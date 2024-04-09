import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ visible = false, children, toggle }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (visible) {
      modalRef.current.parentElement.parentElement.style.overflow = "hidden";
    } else {
      modalRef.current.parentElement.parentElement.style.overflow = "scroll";
    }
  }, [visible]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };

  return createPortal(
    <div
      className={
        visible
          ? `${styles.backdrop} ${styles.show}`
          : `${styles.backdrop} ${styles.hide}`
      }
      onClick={handleBackdropClick}
      ref={modalRef}
    >
      <div className={styles.container}>{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Modal;
