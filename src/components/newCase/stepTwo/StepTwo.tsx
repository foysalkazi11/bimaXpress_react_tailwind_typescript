import React from "react";
import Input from "../../theme/input/Input";
import InputRadio from "../../theme/inputRadio/InputRadio";
import NextButton from "../../theme/nextButton/NextButton";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";

type StepTwoProps = {
  newCaseData: any;
  setNewCaseData: any;
  updateNewCaseData: (name: string, value: string) => void;
  nextStep: () => void;
};

const StepTwo = ({
  newCaseData,
  setNewCaseData,
  nextStep,
  updateNewCaseData,
}: StepTwoProps) => {
  const { patientDetails } = newCaseData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
  ) => {
    const { name, value } = e.target;

    setNewCaseData((pre: any) => ({
      ...pre,
      patientDetails: { ...pre?.patientDetails, [name]: value },
    }));
  };

  return (
    <div className="h-full relative">
      <div className="flex justify-between ">
        <div className=" flex-1 p-6 pb-0">
          <div>
            <Input
              handleChange={handleChange}
              name="patientName"
              value={patientDetails?.patientName || ""}
              label="Patient name"
              labelStyle={{ paddingBottom: "12px" }}
              style={{ height: "40px" }}
            />
          </div>

          <div className="mt-6">
            <p className="pb-4 text-sm text-fontColor-light">Gender</p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="gender"
                  value="male"
                  radioLabel="Male"
                  fieldName={patientDetails?.gender || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="gender"
                  value="female"
                  radioLabel="Female"
                  fieldName={patientDetails?.gender || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="gender"
                  value="transgender"
                  radioLabel="Transgender"
                  fieldName={patientDetails?.gender || ""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="occupation"
              value={patientDetails?.occupation || ""}
              label="Occupation"
              labelStyle={{ paddingBottom: "12px" }}
              style={{ height: "40px" }}
            />
          </div>
          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="contractNumber"
              value={patientDetails?.contractNumber || ""}
              label="Contract number"
              labelStyle={{ paddingBottom: "12px" }}
              style={{ height: "40px" }}
            />
          </div>
          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="relativeContractNumber"
              value={patientDetails?.relativeContractNumber || ""}
              label="Relative contract number"
              labelStyle={{ paddingBottom: "12px" }}
              style={{ height: "40px" }}
            />
          </div>

          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="insuredCardNumber"
              value={patientDetails?.insuredCardNumber || ""}
              label="Insured card number"
              labelStyle={{ paddingBottom: "12px" }}
              style={{ height: "40px" }}
            />
          </div>
        </div>

        <div className="border-r border-fontColor-darkGray"></div>

        <div className=" flex-1 p-6 pb-0">
          <div>
            <Input
              handleChange={handleChange}
              name="policyNumber"
              value={patientDetails?.policyNumber || ""}
              label="Policy number"
              labelStyle={{ paddingBottom: "12px" }}
              style={{ height: "40px" }}
            />
          </div>

          <div className="mt-6">
            <Input
              handleChange={handleChange}
              name="employeeId"
              value={patientDetails?.employeeId || ""}
              label="Employee ID"
              labelStyle={{ paddingBottom: "12px" }}
              style={{ height: "40px" }}
            />
          </div>

          <div className="mt-8">
            <p className="pb-4 text-sm text-fontColor-light">
              Do you have previous health insurance ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="previousHealthInsurance"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={patientDetails?.previousHealthInsurance || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="previousHealthInsurance"
                  value="no"
                  radioLabel="No"
                  fieldName={patientDetails?.previousHealthInsurance || ""}
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="pb-4 text-sm text-fontColor-light">
              Do you have family physician ?
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="familyPhysician"
                  value="yes"
                  radioLabel="Yes"
                  fieldName={patientDetails?.familyPhysician || ""}
                />
              </div>
              <div className="mr-8">
                <InputRadio
                  handleChange={handleChange}
                  name="familyPhysician"
                  value="no"
                  radioLabel="No"
                  fieldName={patientDetails?.familyPhysician || ""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <NewCaseSelect
                  options={[{ label: "Delli", value: "Delli" }]}
                  name="city"
                  handleChange={handleChange}
                  defaultOption="Select city"
                  label="City"
                  value={patientDetails?.city || ""}
                />
              </div>
              <div className="col-span-1">
                <NewCaseSelect
                  options={[{ label: "Kolkata", value: "Kolkata" }]}
                  name="state"
                  handleChange={handleChange}
                  defaultOption="Select state"
                  label="State"
                  value={patientDetails?.state || ""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Input
                  handleChange={handleChange}
                  name="postalCode"
                  value={patientDetails?.postalCode || ""}
                  label="Postal code"
                  labelStyle={{ paddingBottom: "12px" }}
                  style={{ height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-18 flex items-end justify-end p-8">
        <NextButton handleClick={nextStep} />
      </div>
    </div>
  );
};

export default StepTwo;
