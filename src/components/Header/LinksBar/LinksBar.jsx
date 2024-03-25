import HeaderLink from "../HeaderLink/HeaderLink";
import { ReactComponent as DiscordLogo } from "../../../images/svg/discord_logo.svg";
import { ReactComponent as ShipLogo } from "../../../images/svg/ship-logo.svg";
import { ReactComponent as XLogo } from "../../../images/svg/x-logo.svg";
import styles from "./LinksBar.module.css";
import { useElementOnScreen } from "../../../hooks/useElementOnScreen";

const LinkBar = ({ openMenu=false }) => {
  const [containerRef, visible] = useElementOnScreen({
    marginTop: 30,
  });

  return (
    <div className={styles.linkContainer}>
      <HeaderLink
        link="https://discord.com/"
        visible={visible}
        openMenu={openMenu}
        ref={containerRef}
      >
        <DiscordLogo className={styles.linkLogo} />
      </HeaderLink>
      <HeaderLink
        link="https://opensea.io/"
        visible={visible}
        openMenu={openMenu}
        ref={containerRef}
      >
        <ShipLogo className={styles.linkLogo} />
      </HeaderLink>
      <HeaderLink
        link="https://twitter.com/"
        visible={visible}
        openMenu={openMenu}
        ref={containerRef}
      >
        <XLogo className={styles.linkLogo} />
      </HeaderLink>
    </div>
  );
};

export default LinkBar;
