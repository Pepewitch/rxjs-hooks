import React from "react";
import { ReactComponent as Hamburger } from "../assets/bars-solid.svg";
import styles from "./SomeComponent.module.scss";

export default () => {
  return (
    <div>
      <Hamburger className={styles.icon} />
      Some Component
    </div>
  );
};
