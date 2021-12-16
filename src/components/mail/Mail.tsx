import React from "react";
import search_icon from "../../assets/icon/search_icon.svg";
import deleteIcon from "../../assets/icon/delete_icon.svg";
import openBook from "../../assets/icon/book_open.svg";
import smellEditIcon from "../../assets/icon/small_edit_icon.svg";
import { RiSpamLine } from "react-icons/ri";
import styles from "./Mail.module.css";
import GeneralCheckbox from "../theme/generalCheckbox/GeneralCheckbox";
import corner_up_left_alt from "../../assets/icon/corner-up-left-alt.svg";
import corner_up_right_alt from "../../assets/icon/corner_up_right_alt.svg";
import big_edit_icon from "../../assets/icon/big_edit_icon.svg";

const mailList = [
  {
    id: 1,
    heading: "Kaspersky Malware Protection",
    sebHeading: "Internet security",
    date: "10 Nov",
    discripation:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure.",
  },
  {
    id: 2,
    heading: "Kaspersky Malware Protection",
    sebHeading: "Internet security",
    date: "10 Nov",
    discripation:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure.",
  },
  {
    id: 3,
    heading: "Kaspersky Malware Protection",
    sebHeading: "Internet security",
    date: "09 Nov",
    discripation:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure.",
  },
  {
    id: 4,
    heading: "Kaspersky Malware Protection",
    sebHeading: "Internet security",
    date: "08 Nov",
    discripation:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure.",
  },
  {
    id: 5,
    heading: "Kaspersky Malware Protection",
    sebHeading: "Internet security",
    date: "07 Nov",
    discripation:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure.",
  },
];
const Mail = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5 bg-primary-dark min-h-screen">
        <div className="p-4 ">
          <div className={styles.mailSearchBox}>
            <img src={search_icon} alt="icon" className="px-4 " />

            <input
              className="border-none outline-none text-base text-fontColor h-10 w-full bg-transparent  pr-4"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex">
              <img src={deleteIcon} alt="icon" className="px-2" />
              <img src={openBook} alt="icon" className="px-2" />

              <RiSpamLine className="mx-2 text-fontColor text-2xl" />
            </div>
            <img src={smellEditIcon} alt="icon" />
          </div>
        </div>
        <div className="border-t-2 border-fontColor-darkGray p-4  ">
          {mailList?.map((mail, index) => {
            return (
              <div key={index} className="grid grid-cols-12">
                <div className="col-span-1">
                  <GeneralCheckbox />
                </div>
                <div className="col-span-11 mb-4 pb-3 border-b border-fontColor-darkGray">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-fontColor"> {mail?.heading}</h2>
                    <p className="text-xs text-fontColor">{mail?.date}</p>
                  </div>
                  <p className="text-xs text-fontColor">{mail?.sebHeading}</p>
                  <p className="text-sm text-fontColor mt-4">
                    {mail?.discripation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-7 bg-primary-light min-h-full p-4 relative">
        <div className="flex items-center justify-end">
          <div className="flex items-center">
            <p className="text-xs text-fontColor opacity-80 mx-2">
              10 November 2021
            </p>
            <img src={deleteIcon} alt="icon" className="px-2" />
            <img src={corner_up_right_alt} alt="icon" className="px-2" />
            <img src={corner_up_left_alt} alt="icon" className="px-2" />
            <RiSpamLine className="mx-2 text-fontColor text-2xl" />
          </div>
        </div>

        <button className={styles.compostBtn}>
          <img src={big_edit_icon} alt="icon" className="mr-2" />
          Compose
        </button>
      </div>
    </div>
  );
};

export default Mail;
