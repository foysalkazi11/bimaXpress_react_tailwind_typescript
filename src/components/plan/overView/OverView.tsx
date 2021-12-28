import React, { useEffect, useState } from "react";
import styles from "./OverView.module.css";
import planBig from "../../../assets/icon/planBig.svg";
import clamsLeft from "../../../assets/icon/clamsLeft.svg";
import clamsToken from "../../../assets/icon/clamsToken.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/slices/utilitySlice";
import { setCurrentPlan } from "../../../redux/slices/planSlice";
import axiosConfig from "../../../config/axiosConfig";
// import { format } from "date-fns";
import rupi from "../../../assets/icon/rupi.svg";
import notification from "../../theme/utility/notification";

// type typeCurrentPlanDetails = {
//   claimsleft: null | number | undefined;
//   amount: null | number | undefined;
//   planstartdate: string | number | Date;
//   planenddate: null | string | undefined;
//   planId: null | string | undefined;
//   claimstaken: null | number | undefined;
// };

const OverView = () => {
  const [currentPlanDetails, setCurrentPlanDetails] = useState<any>({
    claimsleft: "",
    amount: "",
    planstartdate: "",
    planenddate: "",
    planId: "",
    claimstaken: "",
  });
  const { currentPlan } = useAppSelector((state) => state?.plan);
  const { user } = useAppSelector((state) => state?.user);
  const dispatch = useAppDispatch();

  const fetchCurrentPlan = async () => {
    dispatch(setLoading(true));
    const URL = `/plandetails?email=${user}`;
    try {
      const { data } = await axiosConfig.get(URL);
      console.log(data);

      dispatch(setLoading(false));
      dispatch(setCurrentPlan(data?.data));
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (!currentPlan?.planId) {
      fetchCurrentPlan();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //@ts-ignore
    if (currentPlan?.planId) {
      const {
        //@ts-ignore
        claimsleft,
        //@ts-ignore
        amount,
        //@ts-ignore
        planstartdate,
        //@ts-ignore
        planenddate,
        //@ts-ignore
        planId,
        //@ts-ignore
        claimstaken,
      } = currentPlan;
      setCurrentPlanDetails((pre: any) => ({
        ...pre,
        claimsleft,
        amount,
        planstartdate,
        planenddate,
        planId,
        claimstaken,
      }));
    }
  }, [currentPlan]);
  return (
    <div>
      <div className="pb-5">
        <p className="text-base text-fontColor">Overview</p>
      </div>
      <div className={`${styles.overviewContainer}`}>
        <div className="flex items-center">
          <img src={planBig} alt="icon" className="mr-4" />
          <div>
            <p className="text-lg text-fontColor font-semibold capitalize">
              {currentPlanDetails?.planId}
            </p>
            <p className="text-xs text-fontColor-gray">plan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* first-4-col */}
          <div className="col-span-4 mt-8 ">
            <p className="text-xs text-fontColor-gray">
              Subscription started on{" "}
            </p>
            <p className="text-sm text-fontColor font-semibold mt-1">
              {currentPlanDetails?.planstartdate}
              {/* {format(new Date(currentPlanDetails?.planstartdate), "do MMMM Y")} */}
            </p>

            <div
              className="mt-4 border border-fontColor rounded w-full h-10 flex items-center justify-center"
              style={{ maxWidth: "200px" }}
            >
              <div className="flex items-center">
                <img src={clamsLeft} alt="icon" className="mr-2" />
                <div className="flex items-center">
                  <span className="mr-2 text-base text-fontColor ">
                    Claims left :
                  </span>
                  <span className="mr-1 text-base text-fontColor font-semibold">
                    {currentPlanDetails?.claimsleft}
                  </span>
                  <span className="text-xs text-fontColor">No's</span>
                </div>
              </div>
            </div>
          </div>

          {/* second-4-col */}

          <div className="col-span-4 mt-8 ">
            <p className="text-xs text-fontColor-gray">Subscription ends on </p>
            <p className="text-sm text-fontColor font-semibold mt-1">
              {currentPlanDetails?.planenddate}
              {/* {format(new Date(currentPlanDetails?.planenddate), "do MMMM Y")} */}
            </p>

            <div
              className="mt-4 border border-fontColor rounded w-full h-10 flex items-center justify-center"
              style={{ maxWidth: "200px" }}
            >
              <div className="flex items-center">
                <img src={clamsToken} alt="icon" className="mr-2" />
                <div className="flex items-center">
                  <span className="mr-2 text-base text-fontColor ">
                    Claims token :
                  </span>
                  <span className="mr-1 text-base text-fontColor font-semibold">
                    {currentPlanDetails?.claimstaken}
                  </span>
                  <span className="text-xs text-fontColor">No's</span>
                </div>
              </div>
            </div>
          </div>

          {/* third-4-col */}
          <div className="col-span-4 flex items-center -mt-12">
            <img src={rupi} alt="rupi icon" className="w-12" />
            {/* <p className="text-8xl text-fontColor-gray -mt-20">₹</p> */}
            <span className="text-5xl text-fontColor-gray font-thin">
              {" "}
              {currentPlanDetails?.amount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
