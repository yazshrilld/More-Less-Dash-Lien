import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import BaseButton from "./Button/BaseButton";
import { ReactComponent as CloseIcon } from "assets/svg/close.svg";

const BatchSubmissionModal = ({open, handleClose}) => {

  

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="absolute w-70% top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-[10px] p-[3rem]">
          <CloseIcon className="absolute w-6 h-6 top-5 right-5 hover:scale-150 transition-all cursor-pointer" />
          <h1 className="text-xl font-bold mb-3">Batch Submission</h1>
          <div>Selected Batched Data</div>
        </div>
      </Modal>
    </>
  );
};

export default BatchSubmissionModal;
