import React from "react";
import GeneralModalProvider from "./GeneralModalProvider";

const GeneralProvider = ({ children }) => {
  return <GeneralModalProvider>{children}</GeneralModalProvider>;
};

export default GeneralProvider;
