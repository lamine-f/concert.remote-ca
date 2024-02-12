"use client"
import React, { createContext, useContext, useState } from 'react';

const DisplayContext = createContext<
  {
    active: boolean,
    toggleDisplayContext?: () => void,
    concert?: Concert,
    setConcert?: (r: undefined | Concert) => void,
  }>({ active: false });

export const DisplayProvider = ({ children }: { children: React.ReactNode }) => {
  const [concert, setConcert] = useState<Concert>();
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive(prevState => !prevState);
  }

  return (
    <DisplayContext.Provider value={ {concert, setConcert, active, toggleDisplayContext: toggleActive} }>
      {children}
    </DisplayContext.Provider>
  );

};

export const useDisplayConcert = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error('useDisplayConcert must be used within a DisplayContext');
  }
  return context;
};
