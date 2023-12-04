import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import style from "./index.module.css";
import { GoX } from "react-icons/go";

interface ModalCompProps {
  show: boolean;
  handleClose: () => void;
  component: React.ReactNode;
  title?: string;
  size?: "lg" | "sm" | "xl";
  isChild?: boolean;
  customSize?: string;
}

const ModalComp: React.FC<ModalCompProps> = ({
  show,
  handleClose,
  component,
  title,
  size = "lg",
  isChild = false,
  customSize = "",
}) => {
  return (
    <div className={`${style.modal} ${show ? style.isOpen : ""}`}>
      <div className={style.modalContainer}>
          <Modal.Header>
            {title ? <h2>{title}</h2> : <></>}
            <button className={style.closeButton} onClick={handleClose}>
              <GoX style={{color:"white", fontWeight:"bold", fontSize:"20px"}}/>
            </button>
          </Modal.Header>
        <Modal.Body>{component}</Modal.Body>
      </div>
    </div>
  );
};

export default ModalComp;
