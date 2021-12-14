import React from "react";
import NextButton from "../../theme/nextButton/NextButton";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";

type StepOneProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
};

const insuranceCompany = [
  { label: "Health India Insurance", value: "health_india_insurance" },
  { label: "Reliance General Insurance", value: "reliance_general_nsurance" },
  { label: "Futura General Insurance", value: "futura_general_insurance" },
  { label: "Medsave Health Insurance", value: "medsave_health_insurance" },
  {
    label: "Bajaj Allianz Life Insurance",
    value: "bajaj_allianz_life_insurance",
  },
];
const TPA = [
  {
    label: "Paramount Helth Services & Insurance",
    value: "Paramount Helth Services & Insurance",
  },
  {
    label: "Medi Assist Insurance TPA Private Limited",
    value: "Medi Assist Insurance TPA Private Limited",
  },
  {
    label: "Medsave Health Insurance TPA Limited",
    value: "Medsave Health Insurance TPA Limited",
  },
];

const StepOne = ({ newCaseData, setNewCaseData, nextStep }: StepOneProps) => {
  const { detailsOfTPA } = newCaseData;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewCaseData((pre: any) => ({
      ...pre,
      detailsOfTPA: { ...pre?.detailsOfTPA, [name]: value },
    }));
  };

  return (
    <div className="h-full relative m-8">
      <div className="grid grid-cols-2 gap-8 ">
        <div className="col-span-1">
          <NewCaseSelect
            options={insuranceCompany}
            name="insuranceCompany"
            handleChange={handleChange}
            defaultOption="Select Insurance Company"
            label="Insurance Company"
            value={detailsOfTPA?.insuranceCompany || ""}
          />
        </div>
        <div className="col-span-1">
          <NewCaseSelect
            options={TPA}
            name="TPA"
            handleChange={handleChange}
            defaultOption="Select TPA"
            label="Third Party Administrator (TPA)"
            value={detailsOfTPA?.TPA || ""}
          />
        </div>
      </div>

      <div className="absolute right-0 " style={{ top: "650px" }}>
        <NextButton handleClick={nextStep} />
      </div>
    </div>
  );
};

export default StepOne;
