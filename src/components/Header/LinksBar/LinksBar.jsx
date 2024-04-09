import PropTypes from "prop-types";
import { useElementOnScreen } from "../../../hooks/useElementOnScreen";
import { ReactComponent as DiscordLogo } from "../../../images/svg/discord_logo.svg";
import { ReactComponent as ShipLogo } from "../../../images/svg/ship-logo.svg";
import { ReactComponent as XLogo } from "../../../images/svg/x-logo.svg";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./LinksBar.module.css";

const LinksBar = ({ openMenu = false }) => {
  const [containerRef, visible] = useElementOnScreen({
    marginTop: 30,
  });

  return (
    <div className={styles.linkContainer}>
      <HeaderLink
        link="https://discord.com/"
        linkName="discord.com"
        visible={visible}
        openMenu={openMenu}
        ref={containerRef}
      >
        <DiscordLogo className={styles.linkLogo} />
      </HeaderLink>
      <HeaderLink
        link="https://opensea.io/"
        linkName="opensea.io"
        visible={visible}
        openMenu={openMenu}
        ref={containerRef}
      >
        <ShipLogo className={styles.linkLogo} />
      </HeaderLink>
      <HeaderLink
        link="https://twitter.com/"
        linkName="twitter.com"
        visible={visible}
        openMenu={openMenu}
        ref={containerRef}
      >
        <XLogo className={styles.linkLogo} />
      </HeaderLink>
    </div>
  );
};

LinksBar.propTypes = {
  openMenu: PropTypes.bool.isRequired,
};

export default LinksBar;
