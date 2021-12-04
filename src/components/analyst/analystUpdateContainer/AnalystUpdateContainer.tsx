import React, { useState, useRef, useEffect } from "react";
import styles from "./AnalystUpdateContainer.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Input from "../../theme/input/Input";
import FormButton from "../../theme/button/FormButton";

const AnalystUpdateContainer = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [analystInfo, setAnalystInfo] = useState({
    heading: "Pranav",
    name: "Paranav Vikram",
    emailAddress: "paranavvikram@gamil.com",
    employeeId: "45FDGDS",
    phone: "+048 098098203",
    createPassword: "#$dfedf12",
  });

  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isEdit]);

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
        <div
          className={`w-full h-full mx-4  z-10  ${styles.inputContainer} ${
            isEdit ? " " : styles.adjustMargin
          }`}
        >
          {isEdit ? (
            <div
              className="w-10 h-10 flex justify-center items-center rounded-full mb-4 bg-primary-lighter opacity-95 cursor-pointer "
              onClick={() => setIsEdit(!isEdit)}
            >
              {" "}
              <BiLeftArrowAlt className="text-2xl text-fontColor-light " />
            </div>
          ) : null}

          <div className="grid grid-cols-2 gap-x-8  mb-4 bg-primary-lighter px-8 py-4 rounded-xl opacity-95">
            <div className="col-span-2 lg:col-span-1 pb-6">
              {isEdit ? (
                <Input
                  handleChange={updateAnalytstInfo}
                  name="heading"
                  value={analystInfo?.heading}
                  inputRef={inputRef}
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
              ) : (
                <h2
                  className="text-fontColor-light"
                  style={{ fontSize: "40px" }}
                >
                  {analystInfo?.heading}
                </h2>
              )}
            </div>

            <div className="col-span-2 lg:col-span-1 pb-6 flex justify-end">
              <FormButton
                iconEdit={isEdit ? false : true}
                text={isEdit ? "Save" : "Update"}
                handleClick={() => setIsEdit(!isEdit)}
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
            {isEdit ? (
              <div className="col-span-2 lg:col-span-1 pb-6">
                <Input
                  handleChange={updateAnalytstInfo}
                  name="createPassword"
                  value={analystInfo?.createPassword}
                  label="Change Password"
                  isEdit={isEdit}
                />
              </div>
            ) : null}
          </div>
          {isEdit ? null : (
            <div className="mt-8">
              <div className=" flex">
                <h4 className="text-lg text-fontColor-light pb-1 border-b border-fontColor-light  font-semibold">
                  Delete
                </h4>
              </div>

              <p className="text-sm text-fontColor-light mt-2">
                Deleting your account will erase everything with this hospital.
                Please make sure before clicking the delete button
              </p>

              <div className="mt-6 flex items-center">
                <RiDeleteBinLine className="text-lg text-fontColor-light mr-2" />
                <p className="text-sm text-fontColor-light font-semibold">
                  Delete Account
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalystUpdateContainer;
