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
  param: string | undefined;
  toggleModal?: () => void;
};

const StepThree = ({
  newCaseData,
  nextStep,
  prevStep,
  setNewCaseData,
  param,
  toggleModal,
}: StepThreeProps) => {
  const { diagnosisDetails } = newCaseData;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);

  const saveDataToDb = async () => {
    const POST_URL = `/preauthdata?email=${user}&casenumber=${newCaseNum}`;

    const formData = new FormData();

    diagnosisDetails?.expectedDeliveryDate &&
      formData?.append(
        "doctor_expectedDateOfDelivery",
        diagnosisDetails?.expectedDeliveryDate
      );
    diagnosisDetails?.maternityG &&
      formData?.append("doctor_inCaseMaternityG", diagnosisDetails?.maternityG);
    diagnosisDetails?.maternityP &&
      formData?.append("doctor_inCaseMaternityP", diagnosisDetails?.maternityP);
    diagnosisDetails?.maternityL &&
      formData?.append("doctor_inCaseMaternityL", diagnosisDetails?.maternityL);
    diagnosisDetails?.maternityA &&
      formData?.append("doctor_inCaseMaternityA", diagnosisDetails?.maternityA);
    diagnosisDetails?.doctor_proposedLineOfTreatment_Surgical_Managment &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Surgical_Managment",
        diagnosisDetails?.doctor_proposedLineOfTreatment_Surgical_Managment
      );
    diagnosisDetails?.doctor_proposedLineOfTreatment_Medical_Managment &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Medical_Managment",
        diagnosisDetails?.doctor_proposedLineOfTreatment_Medical_Managment
      );
    diagnosisDetails?.doctor_proposedLineOfTreatment_Investigation &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Investigation",
        diagnosisDetails?.doctor_proposedLineOfTreatment_Investigation
      );
    diagnosisDetails?.doctor_proposedLineOfTreatment_Intensive_Care &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Intensive_Care",
        diagnosisDetails?.doctor_proposedLineOfTreatment_Intensive_Care
      );
    diagnosisDetails?.doctor_proposedLineOfTreatment_Allopathic_Treatment &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Allopathic_Treatment",
        diagnosisDetails?.doctor_proposedLineOfTreatment_Allopathic_Treatment
      );
    diagnosisDetails?.surgeryName &&
      formData?.append(
        "If_Surgical_Name_of_Surgery",
        diagnosisDetails?.surgeryName
      );
    diagnosisDetails?.contractNumber &&
      formData?.append(
        "PhysicianYesPhysicianContactNum",
        diagnosisDetails?.contractNumber
      );
    diagnosisDetails?.doctorsName &&
      formData?.append("doctor_name", diagnosisDetails?.doctorsName);
    diagnosisDetails?.ICD &&
      formData?.append("ICD_Code_10_PCS", diagnosisDetails?.ICD);
    diagnosisDetails?.proposedLineOfTreatmentInvestigationDetails &&
      formData?.append(
        "If_Investigation_Or_Medical_Management_Provide_Details",
        diagnosisDetails?.proposedLineOfTreatmentInvestigationDetails
      );
    diagnosisDetails?.routeOfDrag &&
      formData?.append(
        "Route_Of_Drug_Administration",
        diagnosisDetails?.routeOfDrag
      );
    diagnosisDetails?.natureOfIllness &&
      formData?.append(
        "doctor_natureOfLiness",
        diagnosisDetails?.natureOfIllness
      );
    diagnosisDetails?.durationOfPresentAilment &&
      formData?.append(
        "doctor_durationOfPresentAliment",
        diagnosisDetails?.durationOfPresentAilment
      );
    diagnosisDetails?.firstConsultation &&
      formData?.append(
        "doctor_dateOfFirstConsultation",
        diagnosisDetails?.firstConsultation
      );
    // diagnosisDetails?.surgeryName && formData?.append("doctor_CauseofAilment", diagnosisDetails?.gender);
    diagnosisDetails?.historyOfPresentAilmentDis &&
      formData?.append(
        "doctor_PastHistoryOfPresentAlignment",
        diagnosisDetails?.historyOfPresentAilmentDis
      );
    // diagnosisDetails?.surgeryName && formData?.append("doctor_provisionalDiagnosis", diagnosisDetails?.gender);
    diagnosisDetails?.ICDCode &&
      formData?.append("doctor_icdCode", diagnosisDetails?.ICDCode);

    diagnosisDetails?.otherTreatments &&
      formData?.append(
        "doctor_ifOtherTratmentProvideDetails",
        diagnosisDetails?.otherTreatments
      );
    diagnosisDetails?.injuryCause &&
      formData?.append(
        "doctor_howDidInjuryOccure",
        diagnosisDetails?.injuryCause
      );
    diagnosisDetails?.dateOfInjury &&
      formData?.append("doctor_dateOfInjury", diagnosisDetails?.dateOfInjury);
    diagnosisDetails?.relevantClinicFindings &&
      formData?.append(
        "doctor_releventClinicFindings",
        diagnosisDetails?.relevantClinicFindings
      );
    diagnosisDetails?.repotedToPolice &&
      formData?.append(
        "doctor_reportedToPolice",
        diagnosisDetails?.repotedToPolice
      );
    diagnosisDetails?.proposedLineOfTreatment?.includes("medicalManageemnt") &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Medical_Managment",
        diagnosisDetails?.proposedLineOfTreatment?.includes("medicalManageemnt")
          ? "Yes"
          : "No"
      );
    diagnosisDetails?.proposedLineOfTreatment?.includes("surgicalManagement") &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Surgical_Managment",
        diagnosisDetails?.proposedLineOfTreatment?.includes(
          "surgicalManagement"
        )
          ? "Yes"
          : "No"
      );
    diagnosisDetails?.proposedLineOfTreatment?.includes("intensiveCare") &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Intensive_Care",
        diagnosisDetails?.proposedLineOfTreatment?.includes("intensiveCare")
          ? "Yes"
          : "No"
      );
    diagnosisDetails?.proposedLineOfTreatment?.includes("investigation") &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Investigation",
        diagnosisDetails?.proposedLineOfTreatment?.includes("investigation")
          ? "Yes"
          : "No"
      );
    diagnosisDetails?.proposedLineOfTreatment?.includes(
      "nonAllopaticTreatment"
    ) &&
      formData?.append(
        "doctor_proposedLineOfTreatment_Allopathic_Treatment",
        diagnosisDetails?.proposedLineOfTreatment?.includes(
          "nonAllopaticTreatment"
        )
          ? "Yes"
          : "No"
      );
    diagnosisDetails?.accident &&
      formData?.append("doctor_inCaseOfAccident", diagnosisDetails?.accident);
    // diagnosisDetails?.surgeryName && formData?.append(
    //   "doctor_injuryorDiseaseCausedDueToSubstance",
    //   diagnosisDetails?.gender
    // );
    diagnosisDetails?.alcoholConsumer &&
      formData?.append("doctor_testAlcohol", diagnosisDetails?.alcoholConsumer);
    // diagnosisDetails?.surgeryName && formData?.append("doctor_firNo", diagnosisDetails?.gender);
    diagnosisDetails?.maternity?.includes("g") &&
      formData?.append(
        "doctor_inCaseMaternityG",
        diagnosisDetails?.maternity?.includes("g") ? "Yes" : "No"
      );
    diagnosisDetails?.maternity?.includes("p") &&
      formData?.append(
        "doctor_inCaseMaternityP",
        diagnosisDetails?.maternity?.includes("p") ? "Yes" : "No"
      );
    diagnosisDetails?.maternity?.includes("l") &&
      formData?.append(
        "doctor_inCaseMaternityL",
        diagnosisDetails?.maternity?.includes("l") ? "Yes" : "No"
      );
    diagnosisDetails?.maternity?.includes("a") &&
      formData?.append(
        "doctor_inCaseMaternityA",
        diagnosisDetails?.maternity?.includes("a") ? "Yes" : "No"
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

    if (type === "checkbox") {
      if (checked) {
        setNewCaseData((pre: any) => ({
          ...pre,
          diagnosisDetails: { ...pre?.diagnosisDetails, [name]: value },
        }));
      } else {
        setNewCaseData((pre: any) => ({
          ...pre,
          diagnosisDetails: { ...pre?.diagnosisDetails, [name]: "" },
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
      <div className="flex flex-col lg:flex-row justify-between border-b border-fontColor-darkGray">
        <div className=" lg:w-1/2 p-6 pb-12">
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
          {/* <div className="mt-6">
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
          
          </div> */}

          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="historyOfPresentAilment"
              value={diagnosisDetails?.historyOfPresentAilment || ""}
              label="Past History Of Present Ailment , If Any"
              style={{ height: "40px" }}
              labelStyle={{ paddingBottom: "12px" }}
              placeHolder="Yes, I'm having the past history of present ailment"
            />
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
                  name="doctor_proposedLineOfTreatment_Medical_Managment"
                  value="yes"
                  checkboxLabel="Medical manageemnt"
                  fieldName={
                    diagnosisDetails?.doctor_proposedLineOfTreatment_Medical_Managment ||
                    ""
                  }
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="doctor_proposedLineOfTreatment_Surgical_Managment"
                  value="yes"
                  checkboxLabel="Surgical management"
                  fieldName={
                    diagnosisDetails?.doctor_proposedLineOfTreatment_Surgical_Managment ||
                    ""
                  }
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="doctor_proposedLineOfTreatment_Intensive_Care"
                  value="yes"
                  checkboxLabel="Intensive care"
                  fieldName={
                    diagnosisDetails?.doctor_proposedLineOfTreatment_Intensive_Care ||
                    ""
                  }
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="doctor_proposedLineOfTreatment_Investigation"
                  value="yes"
                  checkboxLabel="Investigation"
                  fieldName={
                    diagnosisDetails?.doctor_proposedLineOfTreatment_Investigation ||
                    ""
                  }
                />
              </div>
              <div className="col-span-1">
                <InputCheckbox
                  handleChange={handleChange}
                  name="doctor_proposedLineOfTreatment_Allopathic_Treatment"
                  value="yes"
                  checkboxLabel="Non allopatic treatment"
                  fieldName={
                    diagnosisDetails?.doctor_proposedLineOfTreatment_Allopathic_Treatment ||
                    ""
                  }
                />
              </div>
            </div>

            <div className="mt-6">
              <Input
                handleChange={handleChange}
                name="proposedLineOfTreatmentInvestigationDetails"
                value={
                  diagnosisDetails?.proposedLineOfTreatmentInvestigationDetails ||
                  ""
                }
                label="If Investigation & /Or Medical Management Provide Details"
                style={{ height: "40px" }}
                labelStyle={{ paddingBottom: "12px" }}
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

        <div className=" lg:w-1/2 p-6 pb-0">
          <div>
            <Input
              handleChange={handleChange}
              name="surgeryName"
              value={diagnosisDetails?.surgeryName || ""}
              label="If Surgical Name Of Surgery"
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
              label="How Did Injury Occur"
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
          {diagnosisDetails?.repotedToPolice === "yes" ? (
            <div className="mt-6">
              <Input
                handleChange={handleChange}
                name="FIR_Number"
                value={diagnosisDetails?.FIR_Number || ""}
                label="FIR Number"
                style={{ height: "40px" }}
                labelStyle={{ paddingBottom: "12px" }}
              />
            </div>
          ) : null}

          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">
              Injury/Disease Caused Due To Substance Abuse / Alcohol Consumption
              ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="Injury_Disease_Caused_Due_To_Substance_Abuse_Alcohol_Consumption_"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={
                    diagnosisDetails?.Injury_Disease_Caused_Due_To_Substance_Abuse_Alcohol_Consumption_ ||
                    ""
                  }
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
                  name="maternityG"
                  value="yes"
                  checkboxLabel="G"
                  fieldName={diagnosisDetails?.maternityG || ""}
                />
              </div>
              <div className="mr-8">
                <InputCheckbox
                  handleChange={handleChange}
                  name="maternityP"
                  value="yes"
                  checkboxLabel="P"
                  fieldName={diagnosisDetails?.maternityP || ""}
                />
              </div>
              <div className="mr-8">
                <InputCheckbox
                  handleChange={handleChange}
                  name="maternityL"
                  value="yes"
                  checkboxLabel="L"
                  fieldName={diagnosisDetails?.maternityL || ""}
                />
              </div>
              <div className="mr-8">
                <InputCheckbox
                  handleChange={handleChange}
                  name="maternityA"
                  value="yes"
                  checkboxLabel="A"
                  fieldName={diagnosisDetails?.maternityA || ""}
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
        <div className="flex items-center flex-wrap">
          <NextButton
            text="View ReteList"
            style={{ marginRight: "16px", marginBottom: "16px" }}
          />
          <NextButton
            text="View Documents"
            style={{ marginRight: "16px", marginBottom: "16px" }}
          />
          <NextButton
            text="Send Mail"
            style={{ marginRight: "16px", marginBottom: "16px" }}
            handleClick={toggleModal}
          />
        </div>
        <NextButton iconRight={true} handleClick={saveDataToDb} />
      </div>
    </div>
  );
};

export default StepThree;

// const handleCheck = (pre: any, val: any) => {
//   if (pre) {
//     return [...pre, val];
//   } else {
//     return [val];
//   }
// };

// if (type === "checkbox") {
//   if (checked) {
//     setNewCaseData((pre: any) => ({
//       ...pre,
//       diagnosisDetails: {
//         ...pre?.diagnosisDetails,
//         [name]: handleCheck(pre?.diagnosisDetails[name], value),
//       },
//     }));
//   } else {
//     setNewCaseData((pre: any) => ({
//       ...pre,
//       diagnosisDetails: {
//         ...pre?.diagnosisDetails,
//         [name]: [
//           ...pre?.diagnosisDetails[name]?.filter(
//             (item: any) => item !== value
//           ),
//         ],
//       },
//     }));
//   }
// }
