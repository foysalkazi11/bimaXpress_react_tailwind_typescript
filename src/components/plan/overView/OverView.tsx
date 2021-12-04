import React from "react";
import styles from "./OverView.module.css";
import planBig from "../../../assets/icon/planBig.svg";
import clamsLeft from "../../../assets/icon/clamsLeft.svg";
import clamsToken from "../../../assets/icon/clamsToken.svg";

const OverView = () => {
  return (
    <div>
      <div className="pb-5">
        <p className="text-base text-fontColor">Overview</p>
      </div>
      <div className={`${styles.overviewContainer}`}>
        <div className="flex items-center">
          <img src={planBig} alt="icon" className="mr-4" />
          <div>
            <p className="text-lg text-fontColor font-semibold">Standard</p>
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
              28 December 2020
            </p>

            <div className="mt-4 border border-fontColor rounded w-full h-10 flex items-center justify-center">
              <div className="flex items-center">
                <img src={clamsLeft} alt="icon" className="mr-2" />
                <div className="flex items-center">
                  <span className="mr-2 text-base text-fontColor ">
                    Claims left :
                  </span>
                  <span className="mr-1 text-base text-fontColor font-semibold">
                    12
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
              27 December 2021
            </p>

            <div className="mt-4 border border-fontColor rounded w-full h-10 flex items-center justify-center">
              <div className="flex items-center">
                <img src={clamsToken} alt="icon" className="mr-2" />
                <div className="flex items-center">
                  <span className="mr-2 text-base text-fontColor ">
                    Claims token :
                  </span>
                  <span className="mr-1 text-base text-fontColor font-semibold">
                    44
                  </span>
                  <span className="text-xs text-fontColor">No's</span>
                </div>
              </div>
            </div>
          </div>

          {/* third-4-col */}
          <div className="col-span-4 flex items-center">
            <p className="text-8xl text-fontColor-gray -mt-20">₹</p>
            <span className="text-5xl text-fontColor-gray -mt-16">1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
