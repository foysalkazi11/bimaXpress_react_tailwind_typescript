import React from "react";
import styles from "./InputDate.module.css";

type InputDateProps = {
  value?: string | number;
  name: string;
  handleChange: (
    e: React.ChangeEvent<HTMLDataElement | HTMLSelectElement | HTMLInputElement>
  ) => void;
  label?: string;
  style?: object;
  type?: string;
};

const InputDate = ({
  handleChange,
  name,
  label,
  value,
  style = {},
  type = "date",
}: InputDateProps) => {
  return (
    <div>
      {label ? <p className="pb-3 text-sm text-fontColor ">{label}</p> : null}

      <input
        type={type}
        name={name}
        placeholder="Select date"
        value={value}
        onChange={handleChange}
        className={styles.inputDate}
        style={style}
      />
    </div>
  );
};

export default InputDate;
