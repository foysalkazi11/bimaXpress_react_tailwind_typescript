import React, { useState, useRef, useEffect } from "react";
import FormButton from "../theme/button/FormButton";
import Input from "../theme/input/Input";
import Select from "../theme/select/Select";
import styles from "./Hospital.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";

const Hospital = () => {
  const [hospitalInfo, setHospitalInfo] = useState({
    heading: "Apollo",
    hospitalName: "Apollo Medical Hospital",
    streetAddress: "Bhari street, 3rd main road",
    type: "maltiSpeciality",
    state: "Bihar",
    mobile: "+048 098098203",
    country: "India",
    website: "apollohospital.in",
    postCode: 455684,
  });

  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<any>(null);

  const updateHospitalInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e?.target;
    setHospitalInfo((pre) => ({ ...pre, [name]: value }));
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isEdit]);

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
                  handleChange={updateHospitalInfo}
                  name="heading"
                  value={hospitalInfo?.heading}
                  style={{
                    border: "none",
                    borderRadius: 0,
                    borderBottom: "2px solid #707070",
                    fontSize: "40px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    fontWeight: 400,
                  }}
                  inputRef={inputRef}
                />
              ) : (
                <h2
                  className="text-fontColor-light"
                  style={{ fontSize: "40px" }}
                >
                  {hospitalInfo?.heading}
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
                handleChange={updateHospitalInfo}
                name="hospitalName"
                value={hospitalInfo?.hospitalName}
                label="Hospital name"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateHospitalInfo}
                name="streetAddress"
                value={hospitalInfo?.streetAddress}
                label="Street address"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Select
                options={[
                  { label: "Malti-Speciality", value: "maltiSpeciality" },
                ]}
                handleChange={updateHospitalInfo}
                name="type"
                value={hospitalInfo?.type}
                label="Type"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateHospitalInfo}
                name="state"
                value={hospitalInfo?.state}
                label="State"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateHospitalInfo}
                name="mobile"
                value={hospitalInfo?.mobile}
                label="Mobile"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateHospitalInfo}
                name="country"
                value={hospitalInfo?.country}
                label="Countery"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateHospitalInfo}
                name="website"
                value={hospitalInfo?.website}
                label="Website"
                isEdit={isEdit}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 pb-6">
              <Input
                handleChange={updateHospitalInfo}
                name="postCode"
                value={hospitalInfo?.postCode}
                label="Postcode"
                isEdit={isEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
