import React, { useState, useEffect } from "react";
import ProgessBar from "./progessBar/ProgessBar";
import StepFour from "./stepFour/StepFour";
import StepOne from "./stepOne/StepOne";
import StepThree from "./stepThree/StepThree";
import StepTwo from "./stepTwo/StepTwo";

const months = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

const NewCase = () => {
  const [yearList, setYearList] = useState<{ label: string; value: string }[]>(
    []
  );
  const [day, setDay] = useState<{ label: string; value: string }[]>([]);
  const [newCaseData, setNewCaseData] = useState({
    detailsOfTPA: {},
    patientDetails: {},
    diagnosisDetails: {},
    admissionDetails: {},
  });

  useEffect(() => {
    let arr = [];
    let days = [];
    for (let i = 1900; i <= 2500; i++) {
      arr.push({ label: `${i}`, value: `${i}` });
    }
    setYearList(arr);

    for (let i = 1; i <= 31; i++) {
      if (i >= 1 && i <= 9) {
        days.push({ label: `0${i}`, value: `0${i}` });
      } else {
        days.push({ label: `${i}`, value: `${i}` });
      }
    }
    setDay(days);
  }, []);

  const [steps, setSteps] = useState(0);

  const updateNewCaseData = (name: string, value: string) => {
    setNewCaseData((pre) => ({ ...pre, [name]: value }));
  };

  const nextStep = () => {
    if (steps >= 4) {
      return;
    } else {
      setSteps((pre) => pre + 1);
    }
  };
  const prevStep = (val: number) => {
    console.log(val);

    if (val > 4) {
      return;
    } else {
      setSteps(val);
    }
  };

  const renderUI = () => {
    switch (steps) {
      case 0:
        return (
          <StepOne
            newCaseData={newCaseData}
            setNewCaseData={setNewCaseData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <StepTwo
            newCaseData={newCaseData}
            setNewCaseData={setNewCaseData}
            updateNewCaseData={updateNewCaseData}
            nextStep={nextStep}
            months={months}
            yearList={yearList}
            days={day}
          />
        );
      case 3:
        return (
          <StepThree
            newCaseData={newCaseData}
            setNewCaseData={setNewCaseData}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <StepFour
            newCaseData={newCaseData}
            setNewCaseData={setNewCaseData}
            nextStep={nextStep}
            months={months}
            yearList={yearList}
          />
        );

      default:
        return (
          <StepOne
            newCaseData={newCaseData}
            setNewCaseData={setNewCaseData}
            nextStep={nextStep}
          />
        );
    }
  };

  return (
    <div>
      <div className="p-6">
        <ProgessBar steps={steps} prevStep={prevStep} />{" "}
      </div>
      <div className="flex flex-col border-t border-fontColor-darkGray">
        {renderUI()}
      </div>
    </div>
  );
};

export default NewCase;
