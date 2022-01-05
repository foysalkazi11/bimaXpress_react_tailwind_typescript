import React, { useEffect } from "react";
import Input from "../../theme/input/Input";
import InputCheckbox from "../../theme/inputCheckbox/InputCheckbox";
import InputContained from "../../theme/inputContained/InputContained";
import InputDate from "../../theme/inputDate/InputDate";
import InputRadio from "../../theme/inputRadio/InputRadio";
import NextButton from "../../theme/nextButton/NextButton";
import axiosConfig from "../../../config/axiosConfig";
import notification from "../../theme/utility/notification";
import { setLoading } from "../../../redux/slices/utilitySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

type StepThreeProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
  prevStep: () => void;
};

const StepThree = ({
  newCaseData,
  nextStep,
  prevStep,
  setNewCaseData,
}: StepThreeProps) => {
  const { diagnosisDetails } = newCaseData;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);

  const saveDataToDb = async () => {
    const POST_URL = `/preauthdata?email=${user}&casenumber=${newCaseNum}`;
    // const array = [

    //   "ICD",
    //   "contractNumber",
    //   "doctorsName",
    //   "expectedDeliveryDate",
    //   "proposedLineOfTreatmentInvestigationDetails",
    // ]

    const formData = new FormData();
    formData?.append(
      "doctor_natureOfLiness",
      diagnosisDetails?.natureOfIllness
    );
    formData?.append(
      "doctor_durationOfPresentAliment",
      diagnosisDetails?.durationOfPresentAilment
    );
    formData?.append(
      "doctor_dateOfFirstConsultation",
      diagnosisDetails?.firstConsultation
    );
    // formData?.append("doctor_CauseofAilment", diagnosisDetails?.gender);
    formData?.append(
      "doctor_PastHistoryOfPresentAlignment",
      diagnosisDetails?.historyOfPresentAilmentDis
    );
    // formData?.append("doctor_provisionalDiagnosis", diagnosisDetails?.gender);
    formData?.append("doctor_icdCode", diagnosisDetails?.ICDCode);

    formData?.append(
      "doctor_ifOtherTratmentProvideDetails",
      diagnosisDetails?.otherTreatments
    );
    formData?.append(
      "doctor_howDidInjuryOccure",
      diagnosisDetails?.injuryCause
    );
    formData?.append("doctor_dateOfInjury", diagnosisDetails?.dateOfInjury);
    formData?.append(
      "doctor_releventClinicFindings",
      diagnosisDetails?.relevantClinicFindings
    );
    formData?.append(
      "doctor_reportedToPolice",
      diagnosisDetails?.repotedToPolice
    );
    formData?.append(
      "doctor_proposedLineOfTreatment_Medical_Managment",
      diagnosisDetails?.proposedLineOfTreatment?.includes("medicalManageemnt")
        ? "yes"
        : "no"
    );
    formData?.append(
      "doctor_proposedLineOfTreatment_Surgical_Managment",
      diagnosisDetails?.proposedLineOfTreatment?.includes("surgicalManagement")
        ? "yes"
        : "no"
    );
    formData?.append(
      "doctor_proposedLineOfTreatment_Intensive_Care",
      diagnosisDetails?.proposedLineOfTreatment?.includes("intensiveCare")
        ? "yes"
        : "no"
    );
    formData?.append(
      "doctor_proposedLineOfTreatment_Investigation",
      diagnosisDetails?.proposedLineOfTreatment?.includes("investigation")
        ? "yes"
        : "no"
    );
    formData?.append(
      "doctor_proposedLineOfTreatment_Allopathic_Treatment",
      diagnosisDetails?.proposedLineOfTreatment?.includes(
        "nonAllopaticTreatment"
      )
        ? "yes"
        : "no"
    );
    formData?.append("doctor_inCaseOfAccident", diagnosisDetails?.accident);
    // formData?.append(
    //   "doctor_injuryorDiseaseCausedDueToSubstance",
    //   diagnosisDetails?.gender
    // );
    formData?.append("doctor_testAlcohol", diagnosisDetails?.alcoholConsumer);
    // formData?.append("doctor_firNo", diagnosisDetails?.gender);
    formData?.append(
      "doctor_inCaseMaternityG",
      diagnosisDetails?.maternity?.includes("g") ? "yes" : "no"
    );
    formData?.append(
      "doctor_inCaseMaternityP",
      diagnosisDetails?.maternity?.includes("p") ? "yes" : "no"
    );
    formData?.append(
      "doctor_inCaseMaternityL",
      diagnosisDetails?.maternity?.includes("l") ? "yes" : "no"
    );
    formData?.append(
      "doctor_inCaseMaternityA",
      diagnosisDetails?.maternity?.includes("a") ? "yes" : "no"
    );

    dispatch(setLoading(true));
    try {
      await axiosConfig.post(POST_URL, formData);

      dispatch(setLoading(false));
      notification("info", "Save successfully");
      nextStep();
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any> | any
  ) => {
    const { name, value, type, checked } = e.target;

    const handleCheck = (pre: any, val: any) => {
      if (pre) {
        return [...pre, val];
      } else {
        return [val];
      }
    };

    if (type === "checkbox") {
      if (checked) {
        setNewCaseData((pre: any) => ({
          ...pre,
          diagnosisDetails: {
            ...pre?.diagnosisDetails,
            [name]: handleCheck(pre?.diagnosisDetails[name], value),
          },
        }));
      } else {
        setNewCaseData((pre: any) => ({
          ...pre,
          diagnosisDetails: {
            ...pre?.diagnosisDetails,
            [name]: [
              ...pre?.diagnosisDetails[name]?.filter(
                (item: any) => item !== value
              ),
            ],
          },
        }));
      }
    } else {
      setNewCaseData((pre: any) => ({
        ...pre,
        diagnosisDetails: { ...pre?.diagnosisDetails, [name]: value },
      }));
    }
  };

  useEffect(() => {
    console.log(newCaseData);
  }, [newCaseData]);

  return (
    <div className="mb-8">
      <div className="flex justify-between border-b border-fontColor-darkGray">
        <div className=" flex-1 p-6 pb-12">
          <div>
            <Input
              handleChange={handleChange}
              name="doctorsName"
              value={diagnosisDetails?.doctorsName || ""}
              label="Doctor's Name"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
            />
          </div>
          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="contractNumber"
              value={diagnosisDetails?.contractNumber || ""}
              label="Contract number"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
            />
          </div>
          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="natureOfIllness"
              value={diagnosisDetails?.natureOfIllness || ""}
              label="Nature of illness"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
            />
          </div>
          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="relevantClinicFindings"
              value={diagnosisDetails?.relevantClinicFindings || ""}
              label="Relevant clinic findings"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
            />
          </div>
          <div className="mt-6">
            <InputContained
              handleChange={handleChange}
              name="durationOfPresentAilment"
              value={diagnosisDetails?.durationOfPresentAilment || ""}
              label="Duration of present ailment"
              style={{ maxWidth: "80px" }}
            />
          </div>
          <div className="mt-6">
            <InputDate
              handleChange={handleChange}
              name="firstConsultation"
              value={diagnosisDetails?.firstConsultation || ""}
              label="Date of first consultation"
            />
          </div>
          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">
              Do you have past history of present ailment ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="historyOfPresentAilment"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={diagnosisDetails?.historyOfPresentAilment || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="historyOfPresentAilment"
                  value="no"
                  radioLabel="No"
                  fieldName={diagnosisDetails?.historyOfPresentAilment || ""}
                />
              </div>
            </div>
            {diagnosisDetails?.historyOfPresentAilment === "yes" ? (
              // <p className=" border-b-2 border-fontColor-darkGray py-1 mt-4 w-full text-base text-fontColor-light ">
              //   Yes, I'm having the past history of present ailment
              // </p>
              <div className="pt-4">
                <Input
                  handleChange={handleChange}
                  name="historyOfPresentAilmentDis"
                  value={diagnosisDetails?.historyOfPresentAilmentDis || ""}
                  style={{
                    height: "40px",
                    border: "none",
                    borderBottom: "2px solid #707070",
                    borderRadius: 0,
                  }}
                  placeHolder="Yes, I'm having the past history of present ailment"
                />
              </div>
            ) : null}
          </div>
          <div className="mt-6">
            <InputContained
              handleChange={handleChange}
              name="ICDCode"
              value={diagnosisDetails?.ICDCode || ""}
              label="ICD code"
              style={{ maxWidth: "100px" }}
            />
          </div>

          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">
              Proposed line of treatment ?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="proposedLineOfTreatment"
                  value="medicalManageemnt"
                  checkboxLabel="Medical manageemnt"
                  fieldName={diagnosisDetails?.proposedLineOfTreatment || []}
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="proposedLineOfTreatment"
                  value="surgicalManagement"
                  checkboxLabel="Surgical management"
                  fieldName={diagnosisDetails?.proposedLineOfTreatment || []}
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="proposedLineOfTreatment"
                  value="intensiveCare"
                  checkboxLabel="Intensive care"
                  fieldName={diagnosisDetails?.proposedLineOfTreatment || []}
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="proposedLineOfTreatment"
                  value="investigation"
                  checkboxLabel="Investigation"
                  fieldName={diagnosisDetails?.proposedLineOfTreatment || []}
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="proposedLineOfTreatment"
                  value="nonAllopaticTreatment"
                  checkboxLabel="Non allopatic treatment"
                  fieldName={diagnosisDetails?.proposedLineOfTreatment || []}
                />
              </div>
            </div>

            <div className="pt-4">
              <Input
                handleChange={handleChange}
                name="proposedLineOfTreatmentInvestigationDetails"
                value={
                  diagnosisDetails?.proposedLineOfTreatmentInvestigationDetails ||
                  ""
                }
                style={{
                  height: "40px",
                  border: "none",
                  borderBottom: "2px solid #707070",
                  borderRadius: 0,
                }}
                placeHolder="If investigation / medical management provide details"
              />
            </div>
          </div>
          <div className="mt-6">
            <InputContained
              handleChange={handleChange}
              name="routeOfDrag"
              value={diagnosisDetails?.routeOfDrag || ""}
              label="Route of drug administration"
              style={{ maxWidth: "100px" }}
            />
          </div>
        </div>

        <div className="border-r border-fontColor-darkGray"></div>

        <div className=" flex-1 p-6 pb-0">
          <div>
            <Input
              handleChange={handleChange}
              name="surgeryName"
              value={diagnosisDetails?.surgeryName || ""}
              label="Surgery name"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
            />
          </div>
          <div className="mt-6">
            <InputContained
              handleChange={handleChange}
              name="ICD"
              value={diagnosisDetails?.ICD || ""}
              label="ICD 10 pcs code 9"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="otherTreatments"
              value={diagnosisDetails?.otherTreatments || ""}
              label="if other treatments, please provide"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
            />
          </div>
          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="injuryCause"
              value={diagnosisDetails?.injuryCause || ""}
              label="Injury cause"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
            />
          </div>

          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">
              In case of accident ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="accident"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={diagnosisDetails?.accident || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="accident"
                  value="no"
                  radioLabel="No"
                  fieldName={diagnosisDetails?.accident || ""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <InputDate
              handleChange={handleChange}
              name="dateOfInjury"
              value={diagnosisDetails?.dateOfInjury || ""}
              label="Date of injury"
            />
          </div>

          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">
              Repoted to police ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="repotedToPolice"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={diagnosisDetails?.repotedToPolice || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="repotedToPolice"
                  value="no"
                  radioLabel="No"
                  fieldName={diagnosisDetails?.repotedToPolice || ""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">
              Are you an alcohol consumer ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="alcoholConsumer"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={diagnosisDetails?.alcoholConsumer || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="alcoholConsumer"
                  value="no"
                  radioLabel="No"
                  fieldName={diagnosisDetails?.alcoholConsumer || ""}
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">
              Test conducted or not ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="testConductedOrNot"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={diagnosisDetails?.testConductedOrNot || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="testConductedOrNot"
                  value="no"
                  radioLabel="No"
                  fieldName={diagnosisDetails?.testConductedOrNot || ""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">Maternity</p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputCheckbox
                  handleChange={handleChange}
                  name="maternity"
                  value="g"
                  checkboxLabel="G"
                  fieldName={diagnosisDetails?.maternity || []}
                />
              </div>
              <div className="mr-8">
                <InputCheckbox
                  handleChange={handleChange}
                  name="maternity"
                  value="p"
                  checkboxLabel="P"
                  fieldName={diagnosisDetails?.maternity || []}
                />
              </div>
              <div className="mr-8">
                <InputCheckbox
                  handleChange={handleChange}
                  name="maternity"
                  value="l"
                  checkboxLabel="L"
                  fieldName={diagnosisDetails?.maternity || []}
                />
              </div>
              <div className="mr-8">
                <InputCheckbox
                  handleChange={handleChange}
                  name="maternity"
                  value="a"
                  checkboxLabel="A"
                  fieldName={diagnosisDetails?.maternity || []}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <InputDate
              handleChange={handleChange}
              name="expectedDeliveryDate"
              value={diagnosisDetails?.expectedDeliveryDate || ""}
              label="Expected delivery date"
            />
          </div>
        </div>
      </div>

      <div className="p-6 flex items-center justify-between">
        <NextButton iconLeft={true} text="Back" handleClick={prevStep} />
        <NextButton iconRight={true} handleClick={saveDataToDb} />
      </div>
    </div>
  );
};

export default StepThree;
