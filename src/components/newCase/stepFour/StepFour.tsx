import React, { useEffect } from "react";
import InputContained from "../../theme/inputContained/InputContained";
import InputDate from "../../theme/inputDate/InputDate";
import InputRadio from "../../theme/inputRadio/InputRadio";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";
import Input from "../../theme/input/Input";
import NextButton from "../../theme/nextButton/NextButton";
import { setLoading } from "../../../redux/slices/utilitySlice";
import axiosConfig from "../../../config/axiosConfig";
import notification from "../../theme/utility/notification";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const roomType = [
  {
    label: "GENERAL WARD",
    value: "GENERAL WARD",
  },
  { label: "SEMI PRIVATE WARD", value: "SEMI PRIVATE WARD" },
  { label: "SEMI PRIVATE SINGLE WARD", value: "SEMI PRIVATE SINGLE WARD" },
  { label: "THREE SHARING SEMI PRIVATE", value: "THREE SHARING SEMI PRIVATE" },
  { label: "PRIVATE WARD", value: "PRIVATE WARD" },
  { label: "PRIVATE SINGLE ROOM", value: "PRIVATE SINGLE ROOM" },
  { label: "TWIN SHARING PRIVATE", value: "TWIN SHARING PRIVATE" },
  { label: "DELUXE WARD", value: "DELUXE WARD" },
  { label: "DELUXE SINGLE", value: "DELUXE SINGLE" },
  { label: "DELUXE SHARING", value: "DELUXE SHARING" },
  { label: "SINGLE ROOM", value: "SINGLE ROOM" },
  { label: "SINGLE AC ROOM", value: "SINGLE AC ROOM" },
  { label: "PRIVATE AC ROOM", value: "PRIVATE AC ROOM" },
  { label: "TWIN SHARING AC ROOM", value: "TWIN SHARING AC ROOM" },
  { label: "HDU/ISOLATION", value: "HDU/ISOLATION" },
  { label: "TWIN DELUXE/SEMI DELUXE", value: "TWIN DELUXE/SEMI DELUXE" },
  { label: "SUITE ROOM", value: "SUITE ROOM" },
  { label: "ECONOMY/DAYCARE", value: "ECONOMY/DAYCARE" },
  { label: "ICU", value: "ICU" },
  { label: "SICU", value: "SICU" },
  { label: "CCU", value: "CCU" },
  { label: "TICU", value: "TICU" },
];

const inputStyle = {
  height: "40px",
  // border: "none !important",
  // borderBottom: "2px solid #707070",
  // borderRadius: 0,
};

type StepFourProps = {
  newCaseData: any;
  setNewCaseData: any;
  nextStep: () => void;
  yearList: { label: string; value: string }[];
  months: { label: string; value: string }[];
  param: string | undefined;
  toggleModal?: () => void;
  totalCost?: number;
  setTotalCost?: any;
  reteList?: string;
  toggleDocumentsModal?: () => void;
  toggleViewDocumentsModal?: () => void;
};

const StepFour = ({
  newCaseData,
  nextStep,
  setNewCaseData,
  months,
  yearList,
  param,
  toggleModal,
  totalCost = 0,
  setTotalCost,
  reteList,
  toggleDocumentsModal,
  toggleViewDocumentsModal,
}: StepFourProps) => {
  const { admissionDetails } = newCaseData;
  // const [totalCost, setTotalCost] = useState(0);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);
  const navigate = useNavigate();

  const saveDataToDb = async () => {
    const POST_URL = `/preauthdata?email=${user}&casenumber=${newCaseNum}`;
    // const array = [

    // "others",

    // "timeOfAdmission",

    // ]

    const formData = new FormData();
    admissionDetails?.All_Including_Package &&
      formData?.append(
        "admission_allIncludePackageCharge",
        admissionDetails?.All_Including_Package
      );
    admissionDetails?.OtherHospitalIfAny &&
      formData?.append(
        "admission_otherHospitalIfAny",
        admissionDetails?.OtherHospitalIfAny
      );
    admissionDetails?.Consumables &&
      formData?.append("admission_Consumables", admissionDetails?.Consumables);
    admissionDetails?.per_day_room_rent_nursing_charges &&
      formData?.append(
        "per_day_room_rent_nursing_charges",
        admissionDetails?.per_day_room_rent_nursing_charges
      );
    admissionDetails?.others &&
      formData?.append(
        "admission_madicineConsumablesCostOfImplats_admission_Consumables",
        admissionDetails?.others
      );
    admissionDetails?.daysInHospital &&
      formData?.append(
        "admission_expectedNoOfDays",
        admissionDetails?.daysInHospital
      );
    admissionDetails?.daysInICU &&
      formData?.append("admission_daysInICU", admissionDetails?.daysInICU);
    admissionDetails?.expenses &&
      formData?.append("admission_nursingCharges", admissionDetails?.expenses);
    admissionDetails?.cost_for_investigation_and_diagnosis &&
      formData?.append(
        "admission_expectedCostForInvestigation",
        admissionDetails?.cost_for_investigation_and_diagnosis
      );
    admissionDetails?.professional_fees &&
      formData?.append(
        "ProfessionalFeesSurgeon_PhysicianCharge_admission_Anesthetist",
        admissionDetails?.professional_fees
      );
    admissionDetails?.ICU_charge &&
      formData?.append("admission_icuCharge", admissionDetails?.ICU_charge);
    admissionDetails?.OT_charge &&
      formData?.append("admission_otCharge", admissionDetails?.OT_charge);
    admissionDetails?.dateOfAdmission &&
      formData?.append("admission_date", admissionDetails?.dateOfAdmission);
    admissionDetails?.timeOfAdmission &&
      formData?.append("admission_time", admissionDetails?.timeOfAdmission);
    //@ts-ignore
    totalCost && formData?.append("admission_sumTotalExpected", totalCost);
    admissionDetails?.emergencyOrPlanedHospitalizedEvent &&
      formData?.append(
        "admission_isThisAEmergencyPlannedHospitalization",
        admissionDetails?.emergencyOrPlanedHospitalizedEvent
      );
    admissionDetails?.roomType &&
      formData?.append("admission_roomType", admissionDetails?.roomType);
    admissionDetails?.diabetes_month &&
      formData?.append(
        "admission_mandatoryPastHistoryMonth",
        admissionDetails?.diabetes_month
      );
    admissionDetails?.diabetes_year &&
      formData?.append(
        "admission_mandatoryPastHistoryYear",
        admissionDetails?.diabetes_year?.slice(2)
      );
    admissionDetails?.heart_disease_month &&
      formData?.append(
        "admission_heartDiseaseMonth",
        admissionDetails?.heart_disease_month
      );
    admissionDetails?.heart_disease_year &&
      formData?.append(
        "admission_heartDiseaseYear",
        admissionDetails?.heart_disease_year?.slice(2)
      );
    admissionDetails?.hypertension_month &&
      formData?.append(
        "admission_hypertensionMonth",
        admissionDetails?.hypertension_month
      );
    admissionDetails?.hypertension_year &&
      formData?.append(
        "admission_hypertensionYear",
        admissionDetails?.hypertension_year?.slice(2)
      );
    admissionDetails?.hyperlipidemias_month &&
      formData?.append(
        "admission_HyperlipidemiasMonth",
        admissionDetails?.hyperlipidemias_month
      );
    admissionDetails?.hyperlipidemias_year &&
      formData?.append(
        "admission_HyperlipidemiasYear",
        admissionDetails?.hyperlipidemias_year?.slice(2)
      );
    admissionDetails?.osteoarthritis_month &&
      formData?.append(
        "admission_osteoarthritisMonth",
        admissionDetails?.osteoarthritis_month
      );
    admissionDetails?.osteoarthritis_year &&
      formData?.append(
        "admission_osteoarthritisYear",
        admissionDetails?.osteoarthritis_year?.slice(2)
      );
    admissionDetails?.asthma_COPD_bronchitis_month &&
      formData?.append(
        "admission_asthmaOrCOPDOrBronchitisMonth",
        admissionDetails?.asthma_COPD_bronchitis_month
      );
    admissionDetails?.asthma_COPD_bronchitis_year &&
      formData?.append(
        "admission_asthmaOrCOPDOrBronchitisYear",
        admissionDetails?.asthma_COPD_bronchitis_year?.slice(2)
      );
    admissionDetails?.cancer_month &&
      formData?.append("admission_cancerMonth", admissionDetails?.cancer_month);
    admissionDetails?.cancer_year &&
      formData?.append(
        "admission_cancerYear",
        admissionDetails?.cancer_year?.slice(2)
      );
    admissionDetails?.alcohol_drag_abuse_month &&
      formData?.append(
        "admission_alcoholOrDrugAbuseMonth",
        admissionDetails?.alcohol_drag_abuse_month
      );
    admissionDetails?.alcohol_drag_abuse_year &&
      formData?.append(
        "admission_alcoholOrDrugAbuseYear",
        admissionDetails?.alcohol_drag_abuse_year?.slice(2)
      );
    admissionDetails?.HIV_STD_related_ailments_months &&
      formData?.append(
        "admission_anyHIVOrSTDOrRelatedAlimentsMonth",
        admissionDetails?.HIV_STD_related_ailments_months
      );
    admissionDetails?.HIV_STD_related_ailments_year &&
      formData?.append(
        "admission_anyHIVOrSTDOrRelatedAlimentsYear",
        admissionDetails?.HIV_STD_related_ailments_year?.slice(2)
      );
    // admissionDetails?.roomType && formData?.append(
    //   "admission_anyOtherAliments",
    //   admissionDetails?.natureOfIllness
    // );

    dispatch(setLoading(true));
    try {
      await axiosConfig.post(POST_URL, formData);

      dispatch(setLoading(false));
      notification("info", "Save successfully");

      // nextStep();
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  // const handleDate = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any> | any,
  //   key: string
  // ) => {
  //   const { name, value } = e.target;
  //   let month = admissionDetails?.[name]?.slice(0, 2);
  //   let year = admissionDetails?.[name]?.slice(3);
  //   if (key === "month") {
  //     month = value;
  //   } else {
  //     year = value;
  //   }

  //   setNewCaseData((pre: any) => ({
  //     ...pre,
  //     admissionDetails: {
  //       ...pre?.admissionDetails,
  //       [name]: `${month || "00"}/${year}`,
  //     },
  //   }));
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any> | any
  ) => {
    const { name, value } = e.target;

    setNewCaseData((pre: any) => ({
      ...pre,
      admissionDetails: { ...pre?.admissionDetails, [name]: value },
    }));
  };

  useEffect(() => {
    if (
      admissionDetails?.per_day_room_rent_nursing_charges ||
      admissionDetails?.ICU_charge ||
      admissionDetails?.OT_charge ||
      admissionDetails?.cost_for_investigation_and_diagnosis ||
      admissionDetails?.expenses ||
      admissionDetails?.others ||
      admissionDetails?.professional_fees ||
      admissionDetails?.All_Including_Package ||
      admissionDetails?.Consumables ||
      admissionDetails?.OtherHospitalIfAny
    ) {
      const totalSum =
        Number(admissionDetails?.per_day_room_rent_nursing_charges || 0) +
        Number(admissionDetails?.ICU_charge || 0) +
        Number(admissionDetails?.OT_charge || 0) +
        Number(admissionDetails?.cost_for_investigation_and_diagnosis || 0) +
        Number(admissionDetails?.expenses || 0) +
        Number(admissionDetails?.others || 0) +
        Number(admissionDetails?.professional_fees || 0) +
        Number(admissionDetails?.All_Including_Package || 0) +
        Number(admissionDetails?.Consumables || 0) +
        Number(admissionDetails?.OtherHospitalIfAny || 0);
      setTotalCost(totalSum);
      // setNewCaseData((pre: any) => ({
      //   ...pre,
      //   admissionDetails: { ...pre?.admissionDetails, totalCost: totalSum },
      // }));
    }

    console.log(newCaseData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCaseData]);

  return (
    <div className="pb-8">
      <div className="border-b border-fontColor-darkGray w-full relative">
        <div className="flex justify-between flex-col lg:flex-row ">
          <div className=" lg:w-1/2 p-6 pb-12">
            <div>
              <p className="pb-4 text-sm text-fontColor-light">
                Date & Time of admission
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <InputDate
                    handleChange={handleChange}
                    name="dateOfAdmission"
                    value={
                      admissionDetails?.dateOfAdmission ||
                      new Date().toISOString().slice(0, 10)
                    }
                  />
                </div>
                <div className="mr-4">
                  <InputDate
                    handleChange={handleChange}
                    name="timeOfAdmission"
                    value={admissionDetails?.timeOfAdmission || ""}
                    type="time"
                    style={{ width: "180px" }}
                  />
                </div>
                {/* <div className="mr-2">
                  <InputRadio
                    handleChange={handleChange}
                    name="timeOfAdmissionAMOrPM"
                    value="am"
                    radioLabel="am"
                    fieldName={admissionDetails?.timeOfAdmissionAMOrPM || ""}
                  />
                </div>

                <InputRadio
                  handleChange={handleChange}
                  name="timeOfAdmissionAMOrPM"
                  value="pm"
                  radioLabel="pm"
                  fieldName={admissionDetails?.timeOfAdmissionAMOrPM || ""}
                /> */}
              </div>
            </div>

            <div className="mt-6">
              <p className="pb-4 text-sm text-fontColor-light">
                In this emergency or planned hospitalized event ?
              </p>
              <div className="flex items-center">
                <div className="mr-8">
                  <InputRadio
                    handleChange={handleChange}
                    name="emergencyOrPlanedHospitalizedEvent"
                    value="emergency"
                    radioLabel="Emergency"
                    fieldName={
                      admissionDetails?.emergencyOrPlanedHospitalizedEvent || ""
                    }
                  />
                </div>
                <div className="mr-8">
                  <InputRadio
                    handleChange={handleChange}
                    name="emergencyOrPlanedHospitalizedEvent"
                    value="planned"
                    radioLabel="Planned"
                    fieldName={
                      admissionDetails?.emergencyOrPlanedHospitalizedEvent || ""
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <InputContained
                handleChange={handleChange}
                name="daysInHospital"
                value={admissionDetails?.daysInHospital || 0}
                label="Expected No. Of Days Stay In Hospital *"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <div className="mt-6">
              <InputContained
                handleChange={handleChange}
                name="daysInICU"
                value={admissionDetails?.daysInICU || 0}
                label="Days in ICU"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <div className="mt-6">
              <NewCaseSelect
                options={roomType}
                name="roomType"
                handleChange={handleChange}
                defaultOption="Select room type"
                label="Room type"
                value={admissionDetails?.roomType || ""}
              />
            </div>
            <div className="mt-6">
              <Input
                label="Par day room rent"
                handleChange={handleChange}
                name="per_day_room_rent_nursing_charges"
                value={
                  admissionDetails?.per_day_room_rent_nursing_charges || ""
                }
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Expenses ( Nursing services, Patient diet)"
                handleChange={handleChange}
                name="expenses"
                value={admissionDetails?.expenses || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Cost for investigation and diagnosis"
                handleChange={handleChange}
                name="cost_for_investigation_and_diagnosis"
                value={
                  admissionDetails?.cost_for_investigation_and_diagnosis || ""
                }
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="ICU Charge"
                handleChange={handleChange}
                name="ICU_charge"
                value={admissionDetails?.ICU_charge || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="OT Charge"
                handleChange={handleChange}
                name="OT_charge"
                value={admissionDetails?.OT_charge || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Professional fees (includes surgeon, anaesthetist, consultation)"
                handleChange={handleChange}
                name="professional_fees"
                value={admissionDetails?.professional_fees || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Others (includes medicines, consumables & cont of implant)"
                handleChange={handleChange}
                name="others"
                value={admissionDetails?.others || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Consumables"
                handleChange={handleChange}
                name="Consumables"
                value={admissionDetails?.Consumables || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="Other Hospital If Any"
                handleChange={handleChange}
                name="OtherHospitalIfAny"
                value={admissionDetails?.OtherHospitalIfAny || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
            <div className="mt-6">
              <Input
                label="All Include Package Charges If Any Applicable"
                handleChange={handleChange}
                name="All_Including_Package"
                value={admissionDetails?.All_Including_Package || ""}
                type="number"
                style={inputStyle}
                placeHolder="Please specify the amount"
              />
            </div>
          </div>
          <div className="border-r border-fontColor-darkGray"></div>

          <div className="lg:w-1/2 p-6 pb-12">
            <p className=" text-base text-fontColor-light opacity-50">
              Mandatory past history of any chronic illness
            </p>

            <div className="block sm:grid grid-cols-12 gap-8 mt-4 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">Diabetes</p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="diabetes_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.diabetes_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="diabetes_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.diabetes_year || ""}
                />
              </div>
            </div>
            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">Heart Disease</p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="heart_disease_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.heart_disease_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="heart_disease_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.heart_disease_year || ""}
                />
              </div>
            </div>

            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">Hypertension</p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="hypertension_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.hypertension_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="hypertension_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.hypertension_year || ""}
                />
              </div>
            </div>

            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">Hyperlipidemias</p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="hyperlipidemias_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.hyperlipidemias_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="hyperlipidemias_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.hyperlipidemias_year || ""}
                />
              </div>
            </div>

            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">Osteoarthritis</p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="osteoarthritis_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.osteoarthritis_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="osteoarthritis_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.osteoarthritis_year || ""}
                />
              </div>
            </div>

            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">
                  Asthma/ COPD/ Bronchitis
                </p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="asthma_COPD_bronchitis_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.asthma_COPD_bronchitis_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="asthma_COPD_bronchitis_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.asthma_COPD_bronchitis_year || ""}
                />
              </div>
            </div>

            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">Cancer</p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="cancer_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.cancer_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="cancer_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.cancer_year || ""}
                />
              </div>
            </div>

            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">
                  Alcohol/Drag Abuse
                </p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="alcohol_drag_abuse_month"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={admissionDetails?.alcohol_drag_abuse_month || ""}
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="alcohol_drag_abuse_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.alcohol_drag_abuse_year || ""}
                />
              </div>
            </div>

            <div className="block sm:grid grid-cols-12 gap-8 mt-8 items-center">
              <div className="col-span-3">
                <p className="text-sm text-fontColor-light">
                  Any HIV Or STD/Related Ailments
                </p>
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={months}
                  name="HIV_STD_related_ailments_months"
                  handleChange={handleChange}
                  defaultOption="Select month"
                  value={
                    admissionDetails?.HIV_STD_related_ailments_months || ""
                  }
                />
              </div>
              <div className="col-span-4 mt-3 sm:mt-0">
                <NewCaseSelect
                  options={yearList}
                  name="HIV_STD_related_ailments_year"
                  handleChange={handleChange}
                  defaultOption="Select year"
                  value={admissionDetails?.HIV_STD_related_ailments_year || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 p-8 ">
        <div className="col-span-1">
          <p className="pb-6 text-lg font-semibold text-fontColor-light">
            Total Cost
          </p>
          <p className=" border-b-2 border-fontColor-darkGray py-1 w-full text-base text-fontColor-light ">
            {totalCost}
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-col flex-wrap items-start sm:flex-row  sm:items-center px-8  pb-4">
        <NextButton
          text="Save"
          handleClick={saveDataToDb}
          style={{ marginBottom: "16px" }}
        />
        <div className="flex items-start sm:flex-row flex-col">
          <NextButton
            text="View Retelist"
            style={{ marginRight: "16px", marginBottom: "16px" }}
            handleClick={toggleDocumentsModal}
          />
          <NextButton
            text="View Documents"
            style={{ marginRight: "16px", marginBottom: "16px" }}
            handleClick={toggleViewDocumentsModal}
          />
          <NextButton
            text="Generate Pre Auth Form"
            style={{ marginRight: "16px", marginBottom: "16px" }}
            handleClick={() => navigate("/preauthform")}
          />
          <NextButton
            text="Send Mail"
            style={{ marginRight: "16px", marginBottom: "16px" }}
            handleClick={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
