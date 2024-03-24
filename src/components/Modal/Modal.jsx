import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ visible = false, children, toggle }) => {
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
    >
      <div className={styles.container}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
