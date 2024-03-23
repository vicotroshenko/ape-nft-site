import React, { useEffect, useRef, useState } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { ReactComponent as DiscordLogo } from "../../../images/svg/discord_logo.svg";
import { ReactComponent as ShipLogo } from "../../../images/svg/ship-logo.svg";
import { ReactComponent as XLogo } from "../../../images/svg/x-logo.svg";
import styles from "./LinksBar.module.css";

const LinkBar = () => {
  return (
    <div className={styles.linkContainer}>
      <HeaderLink link="https://discord.com/">
        <DiscordLogo className={styles.linkLogo} />
      </HeaderLink>
      <HeaderLink link="/">
        <ShipLogo className={styles.linkLogo} />
      </HeaderLink>
      <HeaderLink link="https://twitter.com/">
        <XLogo className={styles.linkLogo} />
      </HeaderLink>
    </div>
  );
};

export default LinkBar;
