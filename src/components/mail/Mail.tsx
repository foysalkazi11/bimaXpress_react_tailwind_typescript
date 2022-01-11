import React, { useEffect, useState } from "react";
import search_icon from "../../assets/icon/search_icon.svg";
import deleteIcon from "../../assets/icon/delete_icon.svg";
import openBook from "../../assets/icon/book_open.svg";
import smellEditIcon from "../../assets/icon/small_edit_icon.svg";
import { RiSpamLine } from "react-icons/ri";
import styles from "./Mail.module.css";
import GeneralCheckbox from "../theme/generalCheckbox/GeneralCheckbox";
import big_edit_icon from "../../assets/icon/big_edit_icon.svg";
import MailDescripationHeader from "./mailDescripationHeader/MailDescripationHeader";
import MailDescripation from "./mailDescripatio/MailDescripation";
import ApproveModal from "./approveModal/ApproveModal";
import ComposeModal from "./composeModal/ComposeModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setComposeMailStatus,
  setInboxMailList,
  setSentMailList,
} from "../../redux/slices/mailSlice";
import { setLoading } from "../../redux/slices/utilitySlice";
import notification from "../theme/utility/notification";
import axiosConfig from "../../config/axiosConfig";
// import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";

// function b64DecodeUnicode(str: string) {
//   // Going backwards: from bytestream, to percent-encoding, to original string.
//   return decodeURIComponent(
//     atob(str)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );
// }

const Mail = () => {
  const [mailDes, setMailDes] = useState(0);
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [openComposeModal, setOpenComposeModal] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { inboxMailList, sentMailList, currentMailList } = useAppSelector(
    (state) => state?.mail
  );
  const [selectedMail, setSelectedMail] = useState({});

  const mailList = {
    inbox: [...inboxMailList],
    sent: [...sentMailList],
  };

  //@ts-ignore
  // var decodedStringAtoB = atob(inboxMailList[0]?.message);
  // console.log(decodedStringAtoB);

  const handleOpenApproveModal = () => {
    setOpenApproveModal((pre) => !pre);
  };
  const handleOpenComposeModal = () => {
    setOpenComposeModal((pre) => !pre);
  };

  const handleSelectMail = (num: number) => {
    setMailDes(1);
    //@ts-ignore
    const singleMail = mailList[currentMailList][num];
    setSelectedMail(singleMail);
  };

  const fetchMailList = async () => {
    dispatch(setLoading(true));
    const GETINBOXMAIL = `/inbox?email=${user}`;
    const GETSENTMAIL = `/sentInbox?email=${user}`;
    try {
      const { data: inboxMail } = await axiosConfig.get(GETINBOXMAIL);
      const { data: sentMail } = await axiosConfig.get(GETSENTMAIL);
      dispatch(setLoading(false));
      dispatch(setInboxMailList(inboxMail?.data));
      dispatch(setSentMailList(sentMail?.data));
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  useEffect(() => {
    if (!inboxMailList?.length || !sentMailList?.length) {
      fetchMailList();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderUI = () => {
    switch (mailDes) {
      case 0:
        return <MailDescripationHeader />;
      case 1:
        return (
          <MailDescripation
            openApproveModal={openApproveModal}
            handleOpenApproveModal={handleOpenApproveModal}
            openModal={handleOpenComposeModal}
            selectedMail={selectedMail}
          />
        );

      default:
        return <MailDescripationHeader />;
    }
  };
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
            <img
              src={smellEditIcon}
              alt="icon"
              onClick={() => {
                dispatch(setComposeMailStatus("new"));
                handleOpenComposeModal();
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="border-t-2 border-fontColor-darkGray p-4  ">
          {/* @ts-ignore */}
          {mailList[currentMailList]?.length
            ? //@ts-ignore
              mailList[currentMailList]?.map((mail, index) => {
                return (
                  <div key={index} className="grid grid-cols-12">
                    <div className="col-span-1">
                      <GeneralCheckbox />
                    </div>
                    <div className="col-span-11 mb-4 pb-3 border-b border-fontColor-darkGray">
                      <h2
                        className="text-xl text-fontColor cursor-pointer"
                        onClick={() => handleSelectMail(index)}
                      >
                        {" "}
                        {/* @ts-ignore */}
                        {mail?.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-fontColor mr-2">
                            {/* @ts-ignore */}
                            {mail?.subject}
                          </p>
                        </div>
                        <p className="text-xs text-fontColor">
                          {/* @ts-ignore */}
                          {mail?.date}
                        </p>
                      </div>

                      <p
                        className={`text-sm text-fontColor mt-4 ${styles.mailDiscriptationContainer}`}
                        // dangerouslySetInnerHTML={{ __html: mail?.message }}
                      >
                        {/* @ts-ignore */}
                        {parse(mail?.message)}
                      </p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="col-span-7 bg-primary-light min-h-full p-4 ">
        {renderUI()}
        <div className={styles.compareButContainer}>
          <button
            className={`${styles.compostBtn}`}
            onClick={() => {
              dispatch(setComposeMailStatus("new"));
              handleOpenComposeModal();
            }}
          >
            <img src={big_edit_icon} alt="icon" className="mr-2" />
            Compose
          </button>
        </div>
        <ApproveModal
          isOpen={openApproveModal}
          closeModal={handleOpenApproveModal}
        />
        <ComposeModal
          isOpen={openComposeModal}
          closeModal={handleOpenComposeModal}
          selectedMail={selectedMail}
        />
      </div>
    </div>
  );
};

export default Mail;
