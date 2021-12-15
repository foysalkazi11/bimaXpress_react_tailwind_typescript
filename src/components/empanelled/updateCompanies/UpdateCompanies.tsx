import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import styles from "./UpdateCompanies.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import Input from "../../theme/input/Input";
import FormButton from "../../theme/button/FormButton";
import BajajLogo from "../../../assets/images/Bajaj-Logo.png";
import InputDate from "../../theme/inputDate/InputDate";
import left_arrow from "../../../assets/icon/left_arrow.svg";
import { Link } from "react-router-dom";

const UpdateCompanies = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [analystInfo, setAnalystInfo] = useState({
    // heading: "Pranav",
    name: "Bajaj_Allianz_General_Insuranc",
    expiryDate: "10 Dec 2021",
    discount: 10,
    exclusion: 10,
  });

  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isEdit]);

  const updateAnalytstInfo = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLDataElement | any>
  ) => {
    const { name, value } = e?.target;
    setAnalystInfo((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div className="pb-10">
      <div className={styles.imageContainer}>
        <div className={styles.innerImageContainer}>
          <img src={BajajLogo} alt="img" className={styles.companyLogo} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className={`w-full h-full mx-4  z-10  ${styles.inputContainer} `}>
          {isEdit ? (
            <div className="flex items-center justify-between">
              <div
                className="w-10 h-10 flex justify-center items-center rounded-full mb-4 bg-secondary-light  opacity-95 cursor-pointer "
                onClick={() => setIsEdit(!isEdit)}
              >
                {" "}
                <img src={left_arrow} alt="icon" />
              </div>
              <div className={styles.uploadLogo}>Upload Logo</div>
            </div>
          ) : (
            <div className="w-10 h-10 flex justify-center items-center rounded-full mb-4 bg-secondary-light opacity-95 cursor-pointer ">
              {" "}
              <Link to="/empanelledCompanies">
                <img src={left_arrow} alt="icon" />
              </Link>
            </div>
          )}

          <div className="grid grid-cols-2 gap-x-8  mb-4 bg-primary-lighter px-8 py-4 rounded-xl opacity-95">
            {/* <div className="col-span-2 lg:col-span-1 pb-6">
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
            </div> */}

            <div className="col-span-2  pb-6 flex justify-end">
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
              {isEdit ? (
                <InputDate
                  handleChange={updateAnalytstInfo}
                  name={analystInfo?.expiryDate}
                  label="Expiry date"
                  style={{
                    background: "transparent",
                    border: "1px solid #ffffff",
                    outline: "none",
                    height: "34px",
                    marginTop: "4px",
                    maxWidth: "100%",
                  }}
                />
              ) : (
                <>
                  <p className="pb-4 text-sm text-fontColor-light font-thin">
                    Expiry date
                  </p>

                  <p className=" border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-light ">
                    {analystInfo?.expiryDate}
                  </p>
                </>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="discount"
                value={analystInfo?.discount}
                label="Discount"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="exclusion"
                value={analystInfo?.exclusion}
                label="Exclusion"
                isEdit={isEdit}
              />
            </div>
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

export default UpdateCompanies;
