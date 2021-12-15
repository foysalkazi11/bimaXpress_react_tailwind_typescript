import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import styles from "./CreateCompany.module.css";
import Input from "../../theme/input/Input";
import FormButton from "../../theme/button/FormButton";
import { Link } from "react-router-dom";
import InputDate from "../../theme/inputDate/InputDate";
import left_arrow from "../../../assets/icon/left_arrow.svg";

const CreateCompany = () => {
  const [analystInfo, setAnalystInfo] = useState({
    name: "",
    expiryDate: "",
    discount: "",
    exclusion: "",
  });

  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const updateAnalytstInfo = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLDataElement | any>
  ) => {
    const { name, value } = e?.target;
    setAnalystInfo((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div className="pb-10">
      <div className={styles.imageContainer}></div>
      <div className="flex justify-center">
        <div className={`w-full h-full mx-4  z-10  ${styles.inputContainer}`}>
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 flex justify-center items-center rounded-full mb-4 bg-secondary-light opacity-95 cursor-pointer ">
              {" "}
              <Link to="/empanelledCompanies">
                <img src={left_arrow} alt="icon" />
              </Link>
            </div>
            <div className={styles.uploadLogo}>Upload Logo</div>
          </div>

          <div className="grid grid-cols-2 gap-x-8  mb-4 bg-primary-lighter px-8 py-4 rounded-xl opacity-95">
            {/* <div className="col-span-2 lg:col-span-1 pb-6">
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
            </div> */}

            <div className="col-span-2  pb-6 flex justify-end">
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
                isEdit={true}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
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
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="discount"
                value={analystInfo?.discount}
                label="Eiscount"
                isEdit={true}
                type="number"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateAnalytstInfo}
                name="exclusion"
                value={analystInfo?.exclusion}
                label="Exclusion"
                isEdit={true}
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
