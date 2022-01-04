import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/slices/utilitySlice";
import NextButton from "../../theme/nextButton/NextButton";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";
import axiosConfig from "../../../config/axiosConfig";
import notification from "../../theme/utility/notification";

type StepOneProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
};

const insuranceCompany = [
  { label: "Health India Insurance", value: "health_india_insurance" },
  { label: "Reliance General Insurance", value: "reliance_general_nsurance" },
  { label: "Futura General Insurance", value: "futura_general_insurance" },
  { label: "Medsave Health Insurance", value: "medsave_health_insurance" },
  {
    label: "Bajaj Allianz Life Insurance",
    value: "bajaj_allianz_life_insurance",
  },
];
const TPA = [
  {
    label: "Paramount Helth Services & Insurance",
    value: "paramount_helth_services_&_insurance",
  },
  {
    label: "Medi Assist Insurance TPA Private Limited",
    value: "medi_Assist_insurance_tpa_private_limited",
  },
  {
    label: "Medsave Health Insurance TPA Limited",
    value: "medsave_health_insurance_tpa_limited",
  },
];

const StepOne = ({ newCaseData, setNewCaseData, nextStep }: StepOneProps) => {
  const { detailsOfTPA } = newCaseData;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);

  const saveDataToDb = async () => {
    const POST_URL = `/preauthdata?email=${user}&casenumber=${newCaseNum}`;

    const formData = new FormData();
    formData?.append("insurance_company", detailsOfTPA?.insuranceCompany);
    formData?.append("Tpa_Company", detailsOfTPA?.TPA);

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
    <div className=" relative m-8" style={{ minHeight: "calc(100vh - 220px)" }}>
      <div className="grid grid-cols-2 gap-8 ">
        <div className="col-span-1">
          <NewCaseSelect
            options={insuranceCompany}
            name="insuranceCompany"
            handleChange={handleChange}
            defaultOption="Select Insurance Company"
            label="Insurance Company"
            value={detailsOfTPA?.insuranceCompany || ""}
          />
        </div>
        <div className="col-span-1">
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

      <div className="absolute right-0 " style={{ bottom: "30px" }}>
        <NextButton iconRight={true} handleClick={saveDataToDb} />
      </div>
    </div>
  );
};

export default StepOne;
