import { createContext, Dispatch } from "react";

interface IAppState {
  modal: boolean;
  course: string;
  menu: boolean;
}

interface IAppContext {
  context: IAppState;
  setContext: Dispatch<IAppState>;
}

export const AppContext = createContext<IAppContext>({
  context: {
    modal: false,
    course: "all",
    menu: false,
  },
  setContext: () => {},
});
