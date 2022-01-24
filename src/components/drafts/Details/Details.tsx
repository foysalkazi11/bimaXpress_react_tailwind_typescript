import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/slices/utilitySlice";
import Input from "../../theme/input/Input";
import axiosConfig from "../../../config/axiosConfig";

type DetailsProps = {
  summeryData: object;
  setSummeryData?: any;
};

const Details = ({ summeryData, setSummeryData }: DetailsProps) => {
  //@ts-ignore
  const { patient_details, caseNumber, hospital_details, formstatus, claimno } =
    summeryData;
  const { currentBucket } = useAppSelector((state) => state?.home);
  const { user } = useAppSelector((state) => state?.user);
  const [climNum, setClimNum] = useState("");
  const dispatch = useAppDispatch();

  const fetchEmpanelledCompanies = async () => {
    const URLCLIMNO = `/claimno?email=${user}&casenumber=${caseNumber}`;
    const URLCASE = `/preauthdata?email=${user}&casenumber=${caseNumber}`;
    dispatch(setLoading(true));
    const formData = new FormData();
    formData?.append("claimno", climNum);
    try {
      await axiosConfig.post(URLCLIMNO, formData);
      const { data } = await axiosConfig.get(URLCASE);
      setSummeryData(data?.data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === "Enter") {
      fetchEmpanelledCompanies();
    }
  };

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-6">
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">Name</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {patient_details?.Name}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">Case ID</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {caseNumber}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">Phone</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray`}
        >
          {patient_details?.Phone}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">City</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {patient_details?.city}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">Admission Date</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {hospital_details?.Date_of_Admission}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">Diagnosis</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {patient_details?.Provision_Diagnosis}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        {claimno ? (
          <>
            <p className="pb-4 text-sm text-fontColor font-thin">
              Claim number
            </p>

            <p
              className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
            >
              {claimno}
            </p>
          </>
        ) : currentBucket === "Unprocessed" ? (
          <Input
            name="claim"
            value={climNum}
            handleChange={(e) => setClimNum(e?.target?.value)}
            isEdit={claimno ? false : true}
            label="Claim numbers"
            handleKeyPress={(e: { key: any }) => handleKeyPress(e?.key)}
            placeHolder="Enter Claim numbers"
          />
        ) : (
          <>
            <p className="pb-4 text-sm text-fontColor font-thin">
              Claim number
            </p>

            <p
              className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
            >
              {claimno}
            </p>
          </>
        )}
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">
          IPD Patient number
        </p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {patient_details?.ipd_patient_number}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">
          Docotor Incharge
        </p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {hospital_details?.Treating_Doctor_Name}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">TPA/ Insure</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {patient_details?.Tpa_Company
            ? patient_details?.Tpa_Company
            : patient_details?.Insurance_Company}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">Tpa Company</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {patient_details?.Tpa_Company}
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 ">
        <p className="pb-4 text-sm text-fontColor font-thin">Current Status</p>

        <p
          className={`border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-deepGray `}
        >
          {formstatus}
        </p>
      </div>
    </div>
  );
};

export default Details;
