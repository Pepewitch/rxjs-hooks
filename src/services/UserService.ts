import { BehaviorSubject } from "rxjs";
import { useObservable } from ".";

export interface User {
  isAuthenticated: boolean;
}

const userObservable = new BehaviorSubject<User>({ isAuthenticated: false });

const useUser = () => useObservable(userObservable);

export { useUser };
