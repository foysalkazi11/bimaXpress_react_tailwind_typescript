import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import ActionTaken from "../actionTaken/ActionTaken";
import Details from "../Details/Details";
import styles from "./SummeryModal.module.css";

// type SummeryModalProps = {
//   isOpen: boolean;
//   closeModal: () => void;
// };

const SummeryModal = () => {
  const [openSummeryModal, setOpenSummeryModal] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState(0);

  const toggleSummeryModal = () => {
    setOpenSummeryModal((pre) => !pre);
  };

  return (
    <Modal
      isOpen={openSummeryModal}
      className={styles.approveModalContainer}
      overlayClassName={styles.overlayContainer}
      onRequestClose={toggleSummeryModal}
      shouldCloseOnOverlayClick={true}
    >
      <p className="text-lg text-fontColor mb-2">Summery</p>
      <div className={`${styles.summerModalContainer} relative`}>
        <IoClose
          className=" absolute top-4 right-6 text-2xl text-fontColor cursor-pointer"
          onClick={toggleSummeryModal}
        />
        <div className="flex items-center">
          <p
            className={`text-lg text-fontColor-deepGray mr-6 tracking-wide cursor-pointer ${
              activeMenu === 0 ? "text-fontColor" : ""
            }`}
            onClick={() => setActiveMenu(0)}
          >
            Details
          </p>
          <p
            className={`text-lg text-fontColor-deepGray mr-6 tracking-wide cursor-pointer ${
              activeMenu === 1 ? "text-fontColor" : ""
            }`}
            onClick={() => setActiveMenu(1)}
          >
            Action Taken
          </p>
        </div>
        {activeMenu === 0 ? <Details /> : <ActionTaken />}
      </div>
    </Modal>
  );
};

export default SummeryModal;
