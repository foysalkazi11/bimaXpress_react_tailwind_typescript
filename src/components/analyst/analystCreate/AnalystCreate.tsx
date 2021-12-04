import React, { useState, useRef, useEffect } from "react";
import styles from "./AnalystCreate.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Input from "../../theme/input/Input";
import FormButton from "../../theme/button/FormButton";
import { Link } from "react-router-dom";

const AnalystCreate = () => {
  const [isEdit, setIsEdit] = useState(true);

  const [analystInfo, setAnalystInfo] = useState({
    heading: "",
    name: "",
    emailAddress: "",
    employeeId: "",
    phone: "",
    createPassword: "",
  });

  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const updateAnalytstInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e?.target;
    setAnalystInfo((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div className="pb-10">
      <div className={styles.imageContainer}></div>
      <div className="flex justify-center">
        <div className={`w-full h-full mx-4  z-10  ${styles.inputContainer}`}>
          <div className="w-10 h-10 flex justify-center items-center rounded-full mb-4 bg-primary-lighter opacity-95 cursor-pointer ">
            {" "}
            <Link to="/analyst">
              <BiLeftArrowAlt className="text-2xl text-fontColor-light " />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8  mb-4 bg-primary-lighter px-8 py-4 rounded-xl opacity-95">
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="heading"
                value={analystInfo?.heading}
                inputRef={inputRef}
                placeHolder="Type name hear"
                style={{
                  border: "none",
                  borderRadius: 0,
                  borderBottom: "2px solid #707070",
                  fontSize: "40px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  fontWeight: 400,
                }}
              />
            </div>

            <div className="col-span-2 lg:col-span-1 pb-6 flex justify-end">
              <FormButton
                text={"Create"}
                // handleClick={() => setIsEdit(!isEdit)}
              />
            </div>

            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="name"
                value={analystInfo?.name}
                label="Name"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="emailAddress"
                value={analystInfo?.emailAddress}
                label="Email Address"
                isEdit={isEdit}
                type="email"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="employeeId"
                value={analystInfo?.employeeId}
                label="Employee ID"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="phone"
                value={analystInfo?.phone}
                label="Phone"
                isEdit={isEdit}
              />
            </div>

            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="createPassword"
                value={analystInfo?.createPassword}
                label="Change Password"
                isEdit={isEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystCreate;
