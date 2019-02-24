import { BehaviorSubject } from "rxjs";
import { useState, useEffect } from "react";
import { useObservable } from ".";

export enum ScreenSize {
  mobile = 1,
  tablet,
  desktop
}

const checkScreen = (size: number) => {
  if (size > 1007) {
    return ScreenSize.desktop;
  } else if (size > 640) {
    return ScreenSize.tablet;
  } else {
    return ScreenSize.mobile;
  }
};

const screenSizeObservable = new BehaviorSubject<ScreenSize>(
  checkScreen(window.innerWidth)
);

window.addEventListener("resize", () => {
  const size = checkScreen(window.innerWidth);
  if (size !== screenSizeObservable.value) {
    screenSizeObservable.next(size);
  }
});

const useScreenSize = () => useObservable(screenSizeObservable);

export { screenSizeObservable, useScreenSize };
