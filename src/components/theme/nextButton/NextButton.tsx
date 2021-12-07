import React from "react";
import { FiChevronRight } from "react-icons/fi";

type NextButtonPorps = {
  handleClick?: () => void;
};

const NextButton = ({ handleClick = () => {} }: NextButtonPorps) => {
  return (
    <div
      className="border-none outline-none bg-fontColor text-black text-base px-2 py-1 rounded flex items-center font-semibold cursor-pointer"
      onClick={handleClick}
    >
      <p>Next</p>
      <FiChevronRight className="ml-2 text-black font-semibold" />
    </div>
  );
};

export default NextButton;
