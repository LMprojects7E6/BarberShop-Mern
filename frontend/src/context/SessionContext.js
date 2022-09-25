import { createContext, useState } from "react";

import React from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [userSession, setUserSession] = useState();
  return (
    <SessionContext.Provider value={{ userSession, setUserSession }}>
      {children}
    </SessionContext.Provider>
  );
};
