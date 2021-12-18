import React from "react";
import MailDescripationHeader from "../mailDescripationHeader/MailDescripationHeader";
import corner_up_left_alt from "../../../assets/icon/corner-up-left-alt.svg";
import corner_up_right_alt from "../../../assets/icon/corner_up_right_alt.svg";
import styles from "./MailDescripation.module.css";
import downArrow from "../../../assets/icon/downArrow.svg";

type MailDescripationProps = {
  openApproveModal: boolean;
  handleOpenApproveModal: () => void;
};
const MailDescripation = ({
  openApproveModal = false,
  handleOpenApproveModal = () => {},
}: MailDescripationProps) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-lg text-fontColor">Kaspersky Malware Protection</p>
          <p className="text-xs text-fontColor-darkGray">
            to: bimxpress2000@outlook.in
          </p>
        </div>
        <MailDescripationHeader />
      </div>
      <div className="my-6">
        <h2 className="text-2xl text-fontColor font-semibold">
          Internet of Things
        </h2>
        <p className="mt-4 text-lg text-fontColor-gray font-thin">Hey</p>
        <p className="mt-6 text-lg text-fontColor-gray font-thin tracking-wide">
          Hey Forget about spam, advertising mailings, hacking and attacking
          robots. Keep your real mailbox clean and secure. Temp Mail provides
          temporary, secure.
        </p>
        <p className="mt-6 text-lg text-fontColor-gray font-thin tracking-wide">
          We all know that Internet / Technologies / Automation is present and
          future.
        </p>
        <p className="mt-6 text-lg text-fontColor-gray font-thin tracking-wide">
          You need to decide, you just wanna user of these in normal life or
          while using & playing with this, want to change your financial life?
          Here is one more example, You can see how this guy is changing his
          financial life,
        </p>
        <p className="mt-8 text-lg text-fontColor-gray font-thin tracking-wide">
          Here is more example
        </p>
        <p className="mt-6 text-lg text-fontColor-gray font-thin tracking-wide">
          You can see how this guy is changing his financial life,
        </p>
        <p className="mt-6 text-lg text-fontColor-gray font-thin tracking-wide">
          while learning and working with DigitalMentorWorld.
        </p>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex">
            <button className=" outline-none px-4 py-2 border-2 border-fontColor flex justify-center items-center rounded-xl mr-4">
              <img src={corner_up_left_alt} alt="icon" />
              <p className="text-lg text-fontColor ml-2 font-semibold tracking-wide">
                Reply
              </p>
            </button>
            <button className=" outline-none px-4 py-2 border-2 border-fontColor flex justify-center items-center rounded-xl mr-2">
              <img src={corner_up_right_alt} alt="icon" />
              <p className="text-lg text-fontColor ml-2 font-semibold tracking-wide">
                Forward
              </p>
            </button>
          </div>
          <div className={styles.approvebtn} onClick={handleOpenApproveModal}>
            <p className="text-sm text-fontColor-darkGray font-medium">
              Approve
            </p>
            <img
              src={downArrow}
              alt="icon"
              className={styles.approvebtnArrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailDescripation;
