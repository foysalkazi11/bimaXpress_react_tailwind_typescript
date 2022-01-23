import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/slices/utilitySlice";
import NextButton from "../../theme/nextButton/NextButton";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";
import axiosConfig from "../../../config/axiosConfig";
import notification from "../../theme/utility/notification";
import {
  setEmpanelledCompaniesListList,
  setEmpanelledInsurnaceCompanies,
  setEmpanelledTpaCompanies,
} from "../../../redux/slices/empanelledCompaniesSlice";
import styles from "./stepOne.module.css";
import { useNavigate } from "react-router-dom";
type StepOneProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
  param: string | undefined;
  toggleModal?: () => void;
  reteList?: string;
  toggleDocumentsModal?: () => void;
  toggleViewDocumentsModal?: () => void;
  setRateList?: any;
};

const StepOne = ({
  newCaseData,
  setNewCaseData,
  nextStep,
  param,
  toggleModal,
  reteList,
  toggleDocumentsModal,
  toggleViewDocumentsModal,
  setRateList,
}: StepOneProps) => {
  const [insuranceCompany, setInsuranceCompany] = useState<any>([]);
  const [tpaCompany, setTpaCompany] = useState<any>([]);
  const { detailsOfTPA } = newCaseData;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);
  const {
    empanelledCompaniesList,
    empanelledInsurnaceCompanies,
    empanelledTpaCompanies,
  } = useAppSelector((state) => state?.empanelledCompanies);
  const navigate = useNavigate();

  const fetchEmpanelledCompanies = async () => {
    const URL = `/empanelcompany?email=${user}`;
    const TPACOMPANY = `/empanelledtpacompany?email=${user}`;
    const INSURANCECOMPANY = `/empanelledinsurancecompany?email=${user}`;
    // const URLALLCOMPANY = `/allcompany`;
    dispatch(setLoading(true));
    try {
      const { data } = await axiosConfig.get(URL);
      const { data: tpaCompany } = await axiosConfig.get(TPACOMPANY);
      const { data: insurnceCompany } = await axiosConfig.get(INSURANCECOMPANY);

      dispatch(setLoading(false));
      dispatch(setEmpanelledCompaniesListList(data?.data));
      dispatch(setEmpanelledTpaCompanies(tpaCompany?.data));
      dispatch(setEmpanelledInsurnaceCompanies(insurnceCompany?.data));

      // dispatch(setAllCompaniesList(allCompanyData?.data));
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  useEffect(() => {
    if (!Object.entries(empanelledCompaniesList)?.length) {
      fetchEmpanelledCompanies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (empanelledInsurnaceCompanies?.length) {
      const res = empanelledInsurnaceCompanies?.map(
        (
          //@ts-ignore
          value
        ) => ({
          label: value,
          value: value,
        })
      );
      setInsuranceCompany(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [empanelledInsurnaceCompanies]);

  useEffect(() => {
    if (empanelledTpaCompanies?.length) {
      const res = empanelledTpaCompanies?.map(
        (
          //@ts-ignore
          value
        ) => ({
          label: value,
          value: value,
        })
      );
      setTpaCompany(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [empanelledTpaCompanies]);
  const saveDataToDb = async () => {
    const POST_URL = `/preauthdata?email=${user}&casenumber=${newCaseNum}`;

    const formData = new FormData();
    detailsOfTPA?.insuranceCompany &&
      formData?.append("insurance_company", detailsOfTPA?.insuranceCompany);
    detailsOfTPA?.TPA && formData?.append("Tpa_Company", detailsOfTPA?.TPA);

    dispatch(setLoading(true));
    try {
      await axiosConfig.post(POST_URL, formData);

      dispatch(setLoading(false));
      notification("info", "Save successfully");
      nextStep();
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewCaseData((pre: any) => ({
      ...pre,
      detailsOfTPA: { ...pre?.detailsOfTPA, [name]: value },
    }));
  };

  return (
    <div className=" relative m-8 min-h-calc-5">
      <div className={`grid gap-8 sm:grid-cols-2 ${styles.elementDiv}`}>
        <div className="col-span-1 ">
          <NewCaseSelect
            options={insuranceCompany}
            name="insuranceCompany"
            handleChange={handleChange}
            defaultOption="Select Insurance Company"
            label="Insurance Company"
            value={detailsOfTPA?.insuranceCompany || ""}
          />
        </div>
        <div className="col-span-1 mb-8">
          <NewCaseSelect
            options={tpaCompany}
            name="TPA"
            handleChange={handleChange}
            defaultOption="Select TPA"
            label="Third Party Administrator (TPA)"
            value={detailsOfTPA?.TPA || ""}
          />
        </div>
      </div>

      <div
        className="flex items-center justify-between flex-wrap absolute w-full"
        style={{ bottom: "30px" }}
      >
        {param ? (
          <div className="flex items-center flex-wrap">
            <NextButton
              text="View ReteList"
              style={{ marginRight: "16px", marginBottom: "16px" }}
              handleClick={toggleDocumentsModal}
            />
            {/* <a
              href={`http://localhost:3000/preauthform`}
              target="_blank"
              rel="noopener noreferrer"
            >
            </a> */}

            <NextButton
              text="Generate Pre Auth Form"
              style={{ marginRight: "16px", marginBottom: "16px" }}
              handleClick={() => navigate("/preauthform")}
            />

            <NextButton
              text="View Documents"
              style={{ marginRight: "16px", marginBottom: "16px" }}
              handleClick={toggleViewDocumentsModal}
            />
            <NextButton
              text="Send Mail"
              style={{ marginRight: "16px", marginBottom: "16px" }}
              handleClick={toggleModal}
            />
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <NextButton
            iconRight={true}
            handleClick={saveDataToDb}
            style={{ marginBottom: "16px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
