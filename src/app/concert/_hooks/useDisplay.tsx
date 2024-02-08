// BurgerContext.js
import React, { createContext, useContext, useState } from 'react';
import {Rapper} from "@/app/concert/page";

const DisplayContext = createContext<
  {
    active: boolean,
    setActive?: (b:boolean) => void,
    rapper: Rapper | null,
    setRapper?: (r:Rapper|null) => void,
  }>({active: false, rapper:null});

export const DisplayProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayActive, setDisplayActive] = useState(false);
  const [rapper, setRapper] = useState<Rapper | null>(null);
  const toggleDisplay = () => {
    setDisplayActive(v => !v);
  };

  return (
    <DisplayContext.Provider value={ {active: displayActive, rapper,  setActive: setDisplayActive, setRapper: setRapper } }>
      {children}
    </DisplayContext.Provider>
  );

};

export const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error('useBurger must be used within a BurgerProvider');
  }
  return context;
};
