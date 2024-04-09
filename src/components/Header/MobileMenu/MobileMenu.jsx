import PropTypes from "prop-types";
import buttonsName from "../../../data/buttons.json";
import footerContents from "../../../data/footer.json";
import Modal from "../../Modal/Modal";
import Logo from "../Logo/Logo";
import ButtonsBar from "../ButtonsBar/ButtonsBar";
import LinksBar from "../LinksBar/LinksBar";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ toggle, visible, getViewElement }) => {
  const { headerButtons } = buttonsName;
  return (
    <Modal toggle={toggle} visible={visible}>
      <div className={styles.mobileMenu}>
        <div className={styles.container}>
          <Logo visible={true} />
          <div className={styles.mobileButtonBar}>
            <button type="button" onClick={() => getViewElement("#about")}>
              {headerButtons.about}
            </button>
            <button type="button" onClick={() => getViewElement("#mind")}>
              {headerButtons.map}
            </button>
            <button type="button" onClick={() => getViewElement("#faq")}>
              {headerButtons.faq}
            </button>
            <button type="button" onClick={() => getViewElement("#arts")}>
              {headerButtons.arts}
            </button>
            <button type="button" onClick={() => getViewElement("#contact")}>
              {headerButtons.mint}
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
          <p>{footerContents.footerText}</p>
        </div>
      </div>
    </Modal>
  );
};

MobileMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  getViewElement: PropTypes.func.isRequired,
};

export default MobileMenu;
