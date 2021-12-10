import React from "react";
import { FiChevronRight } from "react-icons/fi";

type NextButtonPorps = {
  handleClick?: () => void;
  icon?: boolean;
  text?: string;
};

const NextButton = ({
  handleClick = () => {},
  icon = true,
  text = "Next",
}: NextButtonPorps) => {
  return (
    <div
      className={`border-none outline-none bg-fontColor text-black text-lg  py-1 rounded flex items-center font-semibold cursor-pointer ${
        icon ? "px-2" : "px-4"
      }`}
      onClick={handleClick}
    >
      <p>{text}</p>
      {icon ? <FiChevronRight className="ml-2 text-black text-xl" /> : null}
    </div>
  );
};

export default NextButton;
