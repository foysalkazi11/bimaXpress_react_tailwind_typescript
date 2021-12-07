import React from "react";
import Input from "../../theme/input/Input";
import InputRadio from "../../theme/inputRadio/InputRadio";
import NextButton from "../../theme/nextButton/NextButton";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";

type StepTwoProps = {
  newCaseData: any;
  updateNewCaseData: (name: string, value: string) => void;
  nextStep: () => void;
};

const StepTwo = ({
  newCaseData,
  nextStep,
  updateNewCaseData,
}: StepTwoProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateNewCaseData(name, value);
  };
  return (
    <div className="h-full relative">
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 ">
        <div className="col-span-1">
          <Input
            handleChange={handleChange}
            name="patientName"
            value={newCaseData?.patientName || ""}
            label="Patient name"
            labelStyle={{ paddingBottom: "12px" }}
          />
        </div>
        <div className="col-span-1">
          <Input
            handleChange={handleChange}
            name="policyNumber"
            value={newCaseData?.policyNumber || ""}
            label="Policy number"
            labelStyle={{ paddingBottom: "12px" }}
          />
        </div>
        <div className="col-span-1">
          <p className="pb-4 text-sm text-fontColor-light">Gender</p>
          <div className="flex items-center">
            <div className="mr-8">
              <InputRadio
                handleChange={handleChange}
                name="gender"
                value="male"
                radioLabel="Male"
              />
            </div>
            <div className="mr-8">
              <InputRadio
                handleChange={handleChange}
                name="gender"
                value="female"
                radioLabel="Female"
              />
            </div>
            <div className="mr-8">
              <InputRadio
                handleChange={handleChange}
                name="gender"
                value="transgender"
                radioLabel="Transgender"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Input
            handleChange={handleChange}
            name="employeeId"
            value={newCaseData?.employeeId || ""}
            label="Employee ID"
            labelStyle={{ paddingBottom: "12px" }}
          />
        </div>
        <div className="col-span-1">
          <Input
            handleChange={handleChange}
            name="occupation"
            value={newCaseData?.occupation || ""}
            label="Occupation"
            labelStyle={{ paddingBottom: "12px" }}
          />
        </div>
        <div className="col-span-1">
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
              />
            </div>
            <div className="mr-8">
              <InputRadio
                handleChange={handleChange}
                name="previousHealthInsurance"
                value="no"
                radioLabel="No"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <Input
            handleChange={handleChange}
            name="contractNumber"
            value={newCaseData?.contractNumber || ""}
            label="Contract number"
            labelStyle={{ paddingBottom: "12px" }}
          />
        </div>

        <div className="col-span-1">
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
              />
            </div>
            <div className="mr-8">
              <InputRadio
                handleChange={handleChange}
                name="familyPhysician"
                value="no"
                radioLabel="No"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <Input
            handleChange={handleChange}
            name="relativeContractNumber"
            value={newCaseData?.relativeContractNumber || ""}
            label="Relative contract number"
            labelStyle={{ paddingBottom: "12px" }}
          />
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <NewCaseSelect
                options={[{ label: "Delli", value: "Delli" }]}
                name="city"
                handleChange={handleChange}
                defaultOption="Select city"
                label="City"
                value={newCaseData?.city || ""}
              />
            </div>
            <div className="col-span-1">
              <NewCaseSelect
                options={[{ label: "Kolkata", value: "Kolkata" }]}
                name="state"
                handleChange={handleChange}
                defaultOption="Select state"
                label="State"
                value={newCaseData?.state || ""}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <Input
            handleChange={handleChange}
            name="insuredCardNumber"
            value={newCaseData?.insuredCardNumber || ""}
            label="Insured card number"
            labelStyle={{ paddingBottom: "12px" }}
          />
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Input
                handleChange={handleChange}
                name="postalCode"
                value={newCaseData?.postalCode || ""}
                label="Postal code"
                labelStyle={{ paddingBottom: "12px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex items-end justify-end">
        <NextButton handleClick={nextStep} />
      </div>
    </div>
  );
};

export default StepTwo;
