import React from "react";
import InputDate from "../../theme/inputDate/InputDate";
import InputRadio from "../../theme/inputRadio/InputRadio";

type StepFourProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
};

const StepFour = ({ newCaseData, nextStep, setNewCaseData }: StepFourProps) => {
  const { admissionDetails } = newCaseData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any> | any
  ) => {
    const { name, value, type } = e.target;
    console.log(type);

    setNewCaseData((pre: any) => ({
      ...pre,
      admissionDetails: { ...pre?.admissionDetails, [name]: value },
    }));
  };

  React.useEffect(() => {
    console.log(newCaseData);
  }, [newCaseData]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 ">
        <div className="col-span-1">
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
      </div>
    </div>
  );
};

export default StepFour;
