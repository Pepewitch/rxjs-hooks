import React from "react";
import { ReactComponent as Hamburger } from "../assets/bars-solid.svg";
import styles from "./SomeComponent.module.scss";
import { useScreenSize, ScreenSize } from "../services/ScreenService";

export default () => {
  const size = useScreenSize();
  return (
    <div>
      <Hamburger className={styles.icon} />
      {size === ScreenSize.desktop
        ? "desktop"
        : size === ScreenSize.tablet
        ? "tablet"
        : "mobile"}
    </div>
  );
};
