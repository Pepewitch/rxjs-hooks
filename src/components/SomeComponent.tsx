import React from "react";
import { ReactComponent as Hamburger } from "../assets/bars-solid.svg";
import styles from "./SomeComponent.module.scss";
import { useScreenSize, ScreenSize } from "../services/ScreenService";
import { useUser } from "../services/UserService";

export default () => {
  const [size, setSize] = useScreenSize();
  const [user, setUser] = useUser();
  console.log(user);
  return (
    <div>
      <Hamburger
        className={styles.icon}
        onClick={() => {
          // setSize(ScreenSize.mobile);
          user.isAuthenticated = !user.isAuthenticated;
          setUser(user);
          console.log(user);
        }}
      />
      {Object.entries(user).map(([key, value]) => {
        return (
          <span>
            {key} : {value ? "true" : "false"}
          </span>
        );
      })}
      {size === ScreenSize.desktop
        ? "desktop"
        : size === ScreenSize.tablet
        ? "tablet"
        : "mobile"}
    </div>
  );
};
