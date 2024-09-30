import { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

type IsSigninConetextType = {
  isSignin: boolean;
  setIsSignin: (isSignin: boolean) => void;
};

export const IsSigninContext = createContext<IsSigninConetextType>({
  isSignin: false,
  setIsSignin: () => {},
});

export const IsSigninProvider = ({ children }: Props) =>{
  const [isSignin, setIsSignin] = useState(false);

  return (
    <IsSigninContext.Provider value={{ isSignin, setIsSignin}}>
      {children}
    </IsSigninContext.Provider>
  );
}