import React from "react";

type PlanSelectButtonProps = {
  outlined?: boolean;
  text: string;
  handleClick?: () => void;
};

const PlanSelectButton = ({
  outlined = false,
  text = "Select",
  handleClick = () => {},
}: PlanSelectButtonProps) => {
  if (outlined) {
    return (
      <button className="w-full h-10 outline-none border border-fontColor text-base text-fontColor rounded  text-semibold">
        {text}
      </button>
    );
  }
  return (
    <button className="w-full h-10 outline-none bg-fontColor text-base text-primary-dark rounded font-bold">
      {text}
    </button>
  );
};

export default PlanSelectButton;
