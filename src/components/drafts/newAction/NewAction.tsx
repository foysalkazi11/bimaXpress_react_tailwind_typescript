import React from "react";
import left_arrow from "../../../assets/icon/left_arrow.svg";
import NewCaseSelect from "../../theme/select/newCaseSelect/NewCaseSelect";
import styles from "./newAction.module.css";
import Modal from "react-modal";

const actions = [
  {
    label: "Unprocessed",
    value: "Unprocessed",
  },
  {
    label: "query",
    value: "query",
  },
  {
    label: "Approved",
    value: "Approved",
  },
  {
    label: "Reject",
    value: "Reject",
  },
  {
    label: "Enhance",
    value: "Enhance",
  },
  {
    label: "fci",
    value: "fci",
  },
  {
    label: "Discharge_Approved",
    value: "Discharge_Approved",
  },
  {
    label: "Settled",
    value: "Settled",
  },
];

type NewActionProps = {
  isOpen: boolean;
  closeModal: () => void;
  selectValue: string;
  setSelectValue: any;
  toggleSummeryModal: () => void;
};

const NewAction = ({
  closeModal,
  isOpen,
  selectValue,
  setSelectValue,
  toggleSummeryModal,
}: NewActionProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className={styles.approveModalContainer}
      overlayClassName={styles.overlayContainer}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <div
          className="w-10 h-10 flex justify-center items-center rounded-full mb-4 bg-primary-lighter opacity-95 cursor-pointer "
          onClick={() => {
            closeModal();
          }}
        >
          <img src={left_arrow} alt="icon" />
        </div>
        <div className={styles.newActionModalContainer}>
          <div className={styles.selectContainer}>
            <p className="text-lg text-fontColor-gray mb-2">New Action</p>

            <NewCaseSelect
              options={actions}
              name="actions"
              handleChange={(e) => setSelectValue(e?.target?.value)}
              defaultOption="Select Status"
              value={selectValue}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewAction;
