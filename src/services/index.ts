import { BehaviorSubject } from "rxjs";
import { useState, useEffect } from "react";

export const useObservable = <T>(observable: BehaviorSubject<T>) => {
  const [state, setState] = useState(observable.value);
  useEffect(() => {
    const subscription = observable.subscribe(next => {
      setState(next);
    });
    return () => {
      subscription.unsubscribe();
    };
  });
  return [
    state,
    (next: T) => observable.next(next instanceof Object ? { ...next } : next)
  ] as [T, (next: T) => void];
};
