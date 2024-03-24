import styles from "./MobileMenu.module.css";
import Modal from "../../Modal/Modal";
import ButtonsBar from "../ButtonsBar/ButtonsBar";
import LinksBar from "../LinksBar/LinksBar";
import Logo from "../Logo/Logo";

const MobileMenu = ({ toggle, visible, getViewElement }) => {
  return (
    <Modal toggle={toggle} visible={visible}>
      <div className={styles.mobileMenu}>
        <div className={styles.container}>
          <Logo fill="#ffffff" visible={true}/>
          <div className={styles.mobileButtonBar}>
            <button type="button" onClick={() => getViewElement("#about")}>
              About
            </button>
            <button type="button" onClick={() => getViewElement("#mind")}>
              m-map
            </button>
            <button type="button" onClick={() => getViewElement("#faq")}>
              faq
            </button>
            <button type="button" onClick={() => getViewElement("#arts")}>
              arts
            </button>
            <button type="button" onClick={() => getViewElement("#contact")}>
              mint
            </button>
          </div>
          <div>
            <ButtonsBar
              onToggle={toggle}
              openMobileMenu={visible}
              visibleMenu={true}
            />
            <LinksBar openMenu={visible} visible={true} />
          </div>
        </div>
        <div className={styles.bottomText}>
          <p>© Yacht ape 2024 all rights reserved</p>
        </div>
      </div>
    </Modal>
  );
};

export default MobileMenu;
