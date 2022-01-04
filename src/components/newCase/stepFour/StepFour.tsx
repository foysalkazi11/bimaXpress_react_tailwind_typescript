import React from "react";
import InputContained from "../../theme/inputContained/InputContained";
import InputDate from "../../theme/inputDate/InputDate";
import InputRadio from "../../theme/inputRadio/InputRadio";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";
import Input from "../../theme/input/Input";
import NextButton from "../../theme/nextButton/NextButton";

const roomType = [
  { label: "Single room", value: "singleRoom" },
  { label: "Double room", value: "doubleRoom" },
  { label: "Semi double room", value: "semiDoubleRoom" },
];

const inputStyle = {
  height: "40px",
  border: "none !important",
  borderBottom: "2px solid #707070",
  borderRadius: 0,
};

type StepFourProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
  yearList: { label: string; value: string }[];
  months: { label: string; value: string }[];
};

const StepFour = ({
  newCaseData,
  nextStep,
  setNewCaseData,
  months,
  yearList,
}: StepFourProps) => {
  const { admissionDetails } = newCaseData;

  const handleDate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any> | any,
    key: string
  ) => {
    const { name, value } = e.target;
    let month = admissionDetails?.[name]?.slice(0, 2);
    let year = admissionDetails?.[name]?.slice(3);
    if (key === "month") {
      month = value;
    } else {
      year = value;
    }

    setNewCaseData((pre: any) => ({
      ...pre,
      admissionDetails: {
        ...pre?.admissionDetails,
        [name]: `${month || "00"}/${year}`,
      },
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any> | any
  ) => {
    const { name, value } = e.target;

    setNewCaseData((pre: any) => ({
      ...pre,
      admissionDetails: { ...pre?.admissionDetails, [name]: value },
    }));
  };

  return (
    <div className="pb-8">
      <div className="border-b border-fontColor-darkGray">
        <div className="flex justify-between">
          <div className=" flex-1 p-6 pb-12">
            <div>
              <p className="pb-4 text-sm text-fontColor-light">
                Date & Time of admission
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <InputDate
                    handleChange={handleChange}
                    name="dateOfAdmission"
                    value={
                      admissionDetails?.dateOfAdmission ||
                      new Date().toISOString().slice(0, 10)
                    }
                  />
                </div>
                <div className="mr-4">
                  <InputDate
                    handleChange={handleChange}
                    name="timeOfAdmission"
                    value={admissionDetails?.timeOfAdmission || ""}
                    type="time"
                    style={{ width: "180px" }}
                  />
                </div>
                <div className="mr-2">
                  <InputRadio
                    handleChange={handleChange}
                    name="timeOfAdmissionAMOrPM"
                    value="am"
                    radioLabel="am"
                    fieldName={admissionDetails?.timeOfAdmissionAMOrPM || ""}
                  />
                </div>

                <InputRadio
                  handleChange={handleChange}
                  name="timeOfAdmissionAMOrPM"
                  value="pm"
                  radioLabel="pm"
                  fieldName={admissionDetails?.timeOfAdmissionAMOrPM || ""}
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="pb-4 text-sm text-fontColor-light">
                In this emergency or planned hospitalized event ?
              </p>
              <div className="flex items-center">
                <div className="mr-8">
                  <InputRadio
                    handleChange={handleChange}
                    name="emergencyOrPlanedHospitalizedEvent"
                    value="emergency"
                    radioLabel="Emergency"
                    fieldName={
                      admissionDetails?.emergencyOrPlanedHospitalizedEvent || ""
                    }
                  />
                </div>
                <div className="mr-8">
                  <InputRadio
                    handleChange={handleChange}
                    name="emergencyOrPlanedHospitalizedEvent"
                    value="planned"
                    radioLabel="Planned"
                    fieldName={
                      admissionDetails?.emergencyOrPlanedHospitalizedEvent || ""
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <InputContained
                handleChange={handleChange}
                name="daysInHospital"
                value={admissionDetails?.daysInHospital || 1}
                label="No of days in hospital"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <div className="mt-6">
              <InputContained
                handleChange={handleChange}
                name="daysInICU"
                value={admissionDetails?.daysInICU || 1}
                label="Days in ICU"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <div className="mt-6">
              <NewCaseSelect
                options={roomType}
                name="roomType"
                handleChange={handleChange}
                defaultOption="Select room type"
                label="Room type"
                value={admissionDetails?.roomType || ""}
              />
            </div>
            <div className="mt-6">
              <Input
                label="Expenses (includes Room rent, Nursing services, Patient diet)"
                handleChange={handleChange}
                name="expenses"
                value={admissionDetails?.expenses || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Cost for investigation and diagnosis"
                handleChange={handleChange}
                name="cost_for_investigation_and_diagnosis"
                value={
                  admissionDetails?.cost_for_investigation_and_diagnosis || ""
                }
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="ICU Charge"
                handleChange={handleChange}
                name="ICU_charge"
                value={admissionDetails?.ICU_charge || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="OT Charge"
                handleChange={handleChange}
                name="OT_charge"
                value={admissionDetails?.OT_charge || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Professional fees (includes surgeon, anaesthetist, consultation)"
                handleChange={handleChange}
                name="professional_fees"
                value={admissionDetails?.professional_fees || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Others (includes medicines, consumables & cont of implant)"
                handleChange={handleChange}
                name="others"
                value={admissionDetails?.others || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
          </div>
          <div className="border-r border-fontColor-darkGray"></div>

          <div className="flex-1 p-6 pb-12">
            <p className=" text-base text-fontColor-light opacity-50">
              Mandatory past history of any chronic illness
            </p>

            <div className="grid grid-cols-5 gap-8 mt-4 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">Diabetes</p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="diabetes"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={admissionDetails?.diabetes?.slice(0, 2) || ""}
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="diabetes"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={admissionDetails?.diabetes?.slice(3) || ""}
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">Heart Disease</p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="heart_disease"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={admissionDetails?.heart_disease?.slice(0, 2) || ""}
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="heart_disease"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={admissionDetails?.heart_disease?.slice(3) || ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">Hypertension</p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="hypertension"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={admissionDetails?.hypertension?.slice(0, 2) || ""}
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="hypertension"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={admissionDetails?.hypertension?.slice(3) || ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">Hyperlipidemias</p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="hyperlipidemias"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={admissionDetails?.hyperlipidemias?.slice(0, 2) || ""}
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="hyperlipidemias"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={admissionDetails?.hyperlipidemias?.slice(3) || ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">Osteoarthritis</p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="osteoarthritis"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={admissionDetails?.osteoarthritis?.slice(0, 2) || ""}
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="osteoarthritis"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={admissionDetails?.osteoarthritis?.slice(3) || ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">
                  Asthma/ COPD/ Bronchitis
                </p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="asthma_COPD_bronchitis"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={
                    admissionDetails?.asthma_COPD_bronchitis?.slice(0, 2) || ""
                  }
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="asthma_COPD_bronchitis"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={
                    admissionDetails?.asthma_COPD_bronchitis?.slice(3) || ""
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">Cancer</p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="cancer"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={admissionDetails?.cancer?.slice(0, 2) || ""}
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="cancer"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={admissionDetails?.cancer?.slice(3) || ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">
                  Alcohol/Drag Abuse
                </p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="alcohol_drag_abuse"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={
                    admissionDetails?.alcohol_drag_abuse?.slice(0, 2) || ""
                  }
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="alcohol_drag_abuse"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={admissionDetails?.alcohol_drag_abuse?.slice(3) || ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-8 items-center">
              <div className="col-span-1">
                <p className="text-sm text-fontColor-light">
                  Any HIV Or STD/Related Ailments
                </p>
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={months}
                  name="HIV_STD_related_ailments"
                  handleChange={(e) => handleDate(e, "month")}
                  defaultOption="Select month"
                  value={
                    admissionDetails?.HIV_STD_related_ailments?.slice(0, 2) ||
                    ""
                  }
                />
              </div>
              <div className="col-span-2">
                <NewCaseSelect
                  options={yearList}
                  name="HIV_STD_related_ailments"
                  handleChange={(e) => handleDate(e, "year")}
                  defaultOption="Select year"
                  value={
                    admissionDetails?.HIV_STD_related_ailments?.slice(3) || ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 p-8">
        <div className="col-span-1">
          <p className="pb-6 text-lg font-semibold text-fontColor-light">
            Total Cost
          </p>

          <p className=" border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-light ">
            amout
          </p>
          <div className="flex pt-8">
            <NextButton text="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
