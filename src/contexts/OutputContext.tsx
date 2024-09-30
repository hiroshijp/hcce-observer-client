import { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

type OutputConetextType = {
  output: string;
  setOutput: (output: string) => void;
};

export const OutputContext = createContext<OutputConetextType>({
  output: "",
  setOutput: () => {},
});

export const OutputProvider = ({ children }: Props) =>{
  const [output, setOutput] = useState("default output");

  return (
    <OutputContext.Provider value={{ output, setOutput}}>
      {children}
    </OutputContext.Provider>
  );
}