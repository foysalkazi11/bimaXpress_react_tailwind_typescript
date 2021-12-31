import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./ComposeModal.module.css";
import { IoClose } from "react-icons/io5";
import paperclip_black from "../../../assets/icon/paperclip_black.svg";
import bold from "../../../assets/icon/bold.svg";
import italic from "../../../assets/icon/italic.svg";
import underline from "../../../assets/icon/underline.svg";
import align_center_alt from "../../../assets/icon/align-center-alt.svg";
import align_left from "../../../assets/icon/align_left.svg";
import align_right from "../../../assets/icon/align_right.svg";
import { MdOutlineClose } from "react-icons/md";
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

type ComposeModalProps = {
  isOpen?: boolean;
  closeModal?: () => void;
};

const ComposeModal = ({
  isOpen = false,
  closeModal = () => {},
}: ComposeModalProps) => {
  const [mail, setMail] = useState({
    to: "",
    cc: "",
    bcc: "",
    toList: [],
    ccList: [],
    bccList: [],
    sub: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    if (value !== ",") {
      setMail((pre) => ({ ...pre, [name]: value }));
    }
  };

  const handleKeypress = (
    e: React.KeyboardEvent,
    name: string,
    listName: string
  ) => {
    if (e?.key === "Enter" || e?.key === ",") {
      //@ts-ignore
      if (mail[name]) {
        setMail((pre) => ({
          ...pre,
          //@ts-ignore
          [listName]: [...pre[listName], pre[name]],
          [name]: "",
        }));
      }
    }
  };

  console.log(mail);

  const removeEmail = (val: string, listName: string) => {
    setMail((pre) => ({
      ...pre,
      //@ts-ignore
      [listName]: [...pre[listName]]?.filter((mail) => mail !== val),
    }));
  };

  const checkValidEmail = (val: string) => {
    return emailRegex?.test(val);
  };

  return (
    <Modal
      isOpen={isOpen}
      className={styles.approveModalContainer}
      overlayClassName={styles.overlayContainer}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <div
        className={`flex items-center justify-between h-10 w-full bg-primary px-4 border-none outline-none ${styles.composeModalHeader}`}
      >
        <div></div>
        <p className="text-base text-fontColor tracking-wide">New Mail</p>
        <IoClose
          className=" text-2xl text-fontColor cursor-pointer"
          onClick={closeModal}
        />
      </div>
      {/* <p className="px-4 py-2 text-sm text-primary font-medium">
        bhimxpress2000@outlook.in
      </p> */}
      <div className="px-4 py-2 text-sm text-fontColor-darkGray border-t border-fontColor-gray tracking-wide flex items-center flex-wrap">
        <p className="mr-2 mb-1">To</p>
        {mail?.toList?.map((item, index) => {
          return (
            <div
              className={`flex items-center border border-fontColor-darkGray rounded-3xl mr-2 px-2 mb-1  ${
                checkValidEmail(item)
                  ? "font-medium text-primary"
                  : "border-none bg-red-600 text-fontColor"
              }`}
              key={index}
            >
              <p>{item}</p>
              <MdOutlineClose
                className={`text-fontColor-darkGray ml-2 cursor-pointer ${
                  checkValidEmail(item) ? "" : "text-fontColor"
                }`}
                onClick={() => removeEmail(item, "toList")}
              />
            </div>
          );
        })}

        <input
          className="border-none outline-none "
          value={mail?.to}
          name="to"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleKeypress(e, "to", "toList")}
        />
      </div>
      <div className="px-4 py-2 text-sm text-fontColor-darkGray border-t border-fontColor-gray tracking-wide flex items-center flex-wrap">
        <p className="mr-2 mb-1">Cc</p>
        {mail?.ccList?.map((item, index) => {
          return (
            <div
              className={`flex items-center border border-fontColor-darkGray rounded-3xl mr-2 px-2 mb-1  ${
                checkValidEmail(item)
                  ? "font-medium text-primary"
                  : "border-none bg-red-600 text-fontColor"
              }`}
              key={index}
            >
              <p>{item}</p>
              <MdOutlineClose
                className={`text-fontColor-darkGray ml-2 cursor-pointer ${
                  checkValidEmail(item) ? "" : "text-fontColor"
                }`}
                onClick={() => removeEmail(item, "ccList")}
              />
            </div>
          );
        })}

        <input
          className="border-none outline-none "
          value={mail?.cc}
          name="cc"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleKeypress(e, "cc", "ccList")}
        />
      </div>
      <div className="px-4 py-2 text-sm text-fontColor-darkGray border-t border-fontColor-gray tracking-wide flex items-center flex-wrap">
        <p className="mr-2 mb-1">Bcc</p>
        {mail?.bccList?.map((item, index) => {
          return (
            <div
              className={`flex items-center border border-fontColor-darkGray rounded-3xl mr-2 px-2 mb-1 ${
                checkValidEmail(item)
                  ? "font-medium text-primary"
                  : "border-none bg-red-600 text-fontColor"
              }`}
              key={index}
            >
              <p>{item}</p>
              <MdOutlineClose
                className={`text-fontColor-darkGray ml-2 cursor-pointer ${
                  checkValidEmail(item) ? "" : "text-fontColor"
                }`}
                onClick={() => removeEmail(item, "bccList")}
              />
            </div>
          );
        })}

        <input
          className="border-none outline-none "
          value={mail?.bcc}
          name="bcc"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleKeypress(e, "bcc", "bccList")}
        />
      </div>
      <div className="px-4 py-2 text-sm text-fontColor-darkGray border-t border-fontColor-gray tracking-wide">
        <input
          className="border-none outline-none text-primary font-medium"
          value={mail?.sub}
          name="sub"
          onChange={(e) => handleChange(e)}
          placeholder="Subject"
        />
      </div>
      <div className="px-4 py-2 pb-4 text-sm text-fontColor-darkGray border-t border-b border-fontColor-gray tracking-wide">
        <p className="text-base">Hey</p>
        <p className="mt-4 text-base">
          Hey Forget about spam, advertising mailings, hacking and attacking
          robots. Keep your real mailbox clean and secure. Temp Mail provides
          temporary, secure.{" "}
        </p>
        <p className="mt-4 text-base">
          We all know that Internet / Technologies / Automation is present and
          future.
        </p>
        <p className="mt-4 text-base">
          Hey Forget about spam, advertising mailings, hacking and attacking
          robots. Keep your real mailbox clean and secure. Temp Mail provides
          temporary, secure.{" "}
        </p>
        <p className="mt-4 text-base">
          We all know that Internet / Technologies / Automation is present and
          future.
        </p>
      </div>
      <div className=" flex items-center py-8 p px-4">
        <button className="w-28 h-10 bg-primary-dark text-sm text-fontColor border-none outline-none rounded mr-3">
          Send
        </button>
        <img src={paperclip_black} alt="icon" className="mr-3" />
        <div
          className="flex items-center p-3 rounded"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          <img src={bold} alt="icon" className="mr-3" />
          <img src={italic} alt="icon" className="mr-3" />
          <img src={underline} alt="icon" className="mr-3" />
          <img src={align_center_alt} alt="icon" className="mr-3" />
          <img src={align_right} alt="icon" className="mr-3" />
          <img src={align_left} alt="icon" className="mr-3" />
        </div>
      </div>
    </Modal>
  );
};

export default ComposeModal;
