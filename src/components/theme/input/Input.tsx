import React, { forwardRef } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

type InputProps = {
  value: string | number;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  isEdit?: boolean;
  style?: object;
  inputRef?: any;
  placeHolder?: string | undefined;
  isPassword?: boolean;
  showInput?: boolean;
};

const Input = ({
  handleChange,
  name,
  value,
  type = "text",
  label = "",
  isEdit = true,
  style = {},
  inputRef,
  placeHolder = "",
  isPassword = false,
  showInput = false,
}: InputProps) => {
  if (!isEdit) {
    return (
      <>
        {label ? (
          <p className="pb-4 text-sm text-fontColor-light font-thin">{label}</p>
        ) : null}
        <p className=" border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-light ">
          {value}
        </p>
      </>
    );
  }
  return (
    <>
      {label ? (
        <p className="pb-4 text-sm text-fontColor-light">{label}</p>
      ) : null}
      <input
        className={`outline-none rounded-lg border border-fontColor-light px-4 py-1 w-full text-base text-fontColor-light bg-transparent font-thin placeholder-fontColor-light`}
        value={value}
        name={name}
        onChange={(e) => handleChange(e)}
        type={type}
        style={style}
        ref={inputRef ? inputRef : null}
        placeholder={placeHolder}
      />
      {isPassword ? (
        showInput ? (
          <BsEyeSlash className="text-lg text-fontColor-light" />
        ) : (
          <BsEye className="text-lg text-fontColor-light" />
        )
      ) : null}
    </>
  );
};

export default forwardRef(Input);
