import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/slices/utilitySlice";
import NextButton from "../../theme/nextButton/NextButton";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";
import axiosConfig from "../../../config/axiosConfig";
import notification from "../../theme/utility/notification";
import {
  setAllCompaniesList,
  setEmpanelledCompaniesListList,
} from "../../../redux/slices/empanelledCompaniesSlice";
import styles from './stepOne.module.css';
type StepOneProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
  param: string | undefined;
  toggleModal?: () => void;
};

const TPA = [
  {
    label: "Health_insurance_TPA_of_India_Limited",
    value: "Health_insurance_TPA_of_India_Limited",
  },
  {
    label: "Medsave_Health_Insurance_TPA_Limited",
    value: "Medsave_Health_Insurance_TPA_Limited",
  },
  {
    label: "Paramount_Health_Services_&_Insurance_TPA_private_Limited",
    value: "Paramount_Health_Services_&_Insurance_TPA_private_Limited",
  },
  {
    label: "MDIndia_Health_Insurance_TPA_Private_Limited",
    value: "MDIndia_Health_Insurance_TPA_Private_Limited",
  },
  {
    label: "Health_India_Insurance_TPA_Services_Privalte_Limited",
    value: "Health_India_Insurance_TPA_Services_Privalte_Limited",
  },
  {
    label: "Medi_Assist_Insurance_TPA_Private_Limited",
    value: "Medi_Assist_Insurance_TPA_Private_Limited",
  },
];

const StepOne = ({
  newCaseData,
  setNewCaseData,
  nextStep,
  param,
  toggleModal,
}: StepOneProps) => {
  const [insuranceCompany, setInsuranceCompany] = useState<any>([]);
  const { detailsOfTPA } = newCaseData;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);
  const { empanelledCompaniesList, allCompaniesList } = useAppSelector(
    (state) => state?.empanelledCompanies
  );

  const fetchEmpanelledCompanies = async () => {
    const URL = `/empanelcompany?email=${user}`;
    const URLALLCOMPANY = `/allcompany`;
    dispatch(setLoading(true));
    try {
      const { data } = await axiosConfig.get(URL);
      const { data: allCompanyData } = await axiosConfig.get(URLALLCOMPANY);

      dispatch(setLoading(false));
      dispatch(setEmpanelledCompaniesListList(data?.data));
      dispatch(setAllCompaniesList(allCompanyData?.data));
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  useEffect(() => {
    if (
      !Object.entries(empanelledCompaniesList)?.length &&
      !Object.entries(allCompaniesList)?.length
    ) {
      fetchEmpanelledCompanies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.entries(empanelledCompaniesList)?.length) {
      const res = Object.entries(empanelledCompaniesList)?.map(
        (
          //@ts-ignore
          [key, value]
        ) => ({
          label: key,
          value: key,
        })
      );
      setInsuranceCompany(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [empanelledCompaniesList]);
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
    <div className=" relative m-8 min-h-screen">
      <div
        className={`grid gap-8 sm:grid-cols-2 ${styles.elementDiv}`}
      >
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
            options={TPA}
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
            />
            <a
              href={`http://localhost:3000/preauthform`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NextButton
                text="Generate Pre Auth Form"
                style={{ marginRight: "16px", marginBottom: "16px" }}
              />
            </a>

            <NextButton
              text="View Documents"
              style={{ marginRight: "16px", marginBottom: "16px" }}
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
