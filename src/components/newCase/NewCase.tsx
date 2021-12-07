import React, { useState } from "react";
import ProgessBar from "./progessBar/ProgessBar";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./stepTwo/StepTwo";

const NewCase = () => {
  const [newCaseData, setNewCaseData] = useState({});

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
            updateNewCaseData={updateNewCaseData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <StepTwo
            newCaseData={newCaseData}
            updateNewCaseData={updateNewCaseData}
            nextStep={nextStep}
          />
        );

      default:
        return (
          <StepOne
            newCaseData={newCaseData}
            setNewCaseData={setNewCaseData}
            updateNewCaseData={updateNewCaseData}
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
      <div className="p-8 flex flex-col border-t border-fontColor-darkGray">
        {renderUI()}
      </div>
    </div>
  );
};

export default NewCase;
