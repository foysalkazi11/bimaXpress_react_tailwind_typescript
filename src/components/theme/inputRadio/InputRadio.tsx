import React from "react";
import styles from "./InputRadio.module.css";
type InputRadioProps = {
  name: string | undefined;
  value: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  radioLabel?: string;
};

const InputRadio = ({
  handleChange,
  name,
  value,
  label = "",
  radioLabel = "",
}: InputRadioProps) => {
  return (
    <div className="flex flex-col">
      {label ? (
        <p className="pb-3 text-sm text-fontColor-light">{label}</p>
      ) : null}

      <label className={styles.radioContainer}>
        {radioLabel}
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default InputRadio;
