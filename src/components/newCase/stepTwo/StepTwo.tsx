import React from "react";
import Input from "../../theme/input/Input";
// import InputContained from "../../theme/inputContained/InputContained";
import InputRadio from "../../theme/inputRadio/InputRadio";
import NextButton from "../../theme/nextButton/NextButton";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";

type StepTwoProps = {
  newCaseData: any;
  setNewCaseData: any;
  updateNewCaseData: (name: string, value: string) => void;
  nextStep: () => void;
  yearList: { label: string; value: string }[];
  months: { label: string; value: string }[];
  days: { label: string; value: string }[];
};

const StepTwo = ({
  newCaseData,
  setNewCaseData,
  nextStep,
  updateNewCaseData,
  days,
  months,
  yearList,
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

  const handleDateOfBirth = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any> | any,
    key: string
  ) => {
    const { name, value } = e.target;
    let day = patientDetails?.[name]?.slice(0, 2);
    let month = patientDetails?.[name]?.slice(3, 5);
    let year = patientDetails?.[name]?.slice(6);
    if (key === "day") {
      day = value;
    } else if (key === "month") {
      month = value;
    } else {
      year = value;
    }

    setNewCaseData((pre: any) => ({
      ...pre,
      patientDetails: {
        ...pre?.patientDetails,
        [name]: `${day || "00"}/${month || "00"}/${year}`,
      },
    }));
  };

  React.useEffect(() => {
    console.log(newCaseData);
  }, [newCaseData]);

  return (
    <div className="h-full relative">
      <div className="flex justify-between border-b border-fontColor-darkGray">
        <div className=" flex-1 p-6 pb-12">
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

          <div className="mt-6 ">
            <p className="pb-4 text-sm text-fontColor-light">Date of birth</p>
            <div className="flex items-center">
              <div className="pr-4">
                <NewCaseSelect
                  options={days}
                  name="DOB"
                  handleChange={(e) => handleDateOfBirth(e, "day")}
                  defaultOption="Day"
                  value={patientDetails?.DOB?.slice(0, 2) || ""}
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="pr-4">
                <NewCaseSelect
                  options={months}
                  name="DOB"
                  handleChange={(e) => handleDateOfBirth(e, "month")}
                  defaultOption="Month"
                  value={patientDetails?.DOB?.slice(3, 5) || ""}
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="pr-8">
                <NewCaseSelect
                  options={yearList}
                  name="DOB"
                  handleChange={(e) => handleDateOfBirth(e, "year")}
                  defaultOption="Year"
                  value={patientDetails?.DOB?.slice(6) || ""}
                  style={{ maxWidth: "120px" }}
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

      <div className="mt-18 flex items-end justify-end p-6">
        <NextButton handleClick={nextStep} />
      </div>
    </div>
  );
};

export default StepTwo;
