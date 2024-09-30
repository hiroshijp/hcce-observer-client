import { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

type ConsoleData = {
  output: string;
};

type ConsoleContextType = {
  console: ConsoleData | null;
  setConsole: (console: ConsoleData) => void;
};

export const SideConsoleContext = createContext<ConsoleContextType>({
  console: null,
  setConsole: (console) => {},
});

export const Context = ({ children }: Props) => {
  const [console, setConsole] = useState<ConsoleData | null>(null);

  return (
    <SideConsoleContext.Provider value={{ console, setConsole}}>
      {children}
    </SideConsoleContext.Provider>
  );
}