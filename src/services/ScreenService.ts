import { BehaviorSubject } from "rxjs";
import { useState, useEffect } from "react";

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

const screenSizeObserver = new BehaviorSubject<ScreenSize>(
  checkScreen(window.innerWidth)
);

window.addEventListener("resize", () => {
  const size = checkScreen(window.innerWidth);
  if (size !== screenSizeObserver.value) {
    screenSizeObserver.next(size);
  }
});

const useScreenSize = () => {
  const [size, setSize] = useState(screenSizeObserver.value);
  useEffect(() => {
    const subscription = screenSizeObserver.subscribe(newSize => {
      setSize(newSize);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return size;
};

export { screenSizeObserver, useScreenSize };
