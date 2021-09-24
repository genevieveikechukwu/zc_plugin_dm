import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ModalButton from "./button";
import close from "../../../assets/img/svg/close.svg";
const removePinnedMessage = () => {
  return (
    <div
      className="fixed-top h-100 w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="d-flex flex-column p-4 w-50 gap-3 bg-white rounded-1">
        <div
          className="d-flex justify-content-between text-capitalize align-items-center"
          style={{ fontSize: "30px", fontWeight: "700", height: "20px" }}
        >
          <div className="writeUp">remove pinned item</div>
          <img src={close} alt="close" className="d-block h-75" />
        </div>
        <p className="mb-0">
          Are you sure you want to remove this pinned item?
        </p>
        <div className="border border-dark p-3 mb-3">
          <p className="mb-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            quaerat beatae unde voluptatem odit eius enim animi, itaque totam
            temporibus quisquam provident aut minima! Obcaecati iure molestiae
            perferendis eligendi laborum?
          </p>
          <span className="d-block text-secondary">Today at 3:15AM</span>
        </div>
        <div className="d-flex justify-content-end">
          <ModalButton close>Cancel</ModalButton>
          <ModalButton>Remove</ModalButton>
        </div>
      </div>
    </div>
  );
};

export default removePinnedMessage;
