import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const ContextGeneralModal = createContext(false);
const GeneralModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ContextGeneralModal.Provider value={{ showModal, setShowModal }}>
      {children}
    </ContextGeneralModal.Provider>
  );
};

export default GeneralModalProvider;
