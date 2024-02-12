// BurgerContext.js
import React, { createContext, useContext, useState } from 'react';
import {Rapper} from "@/app/concert/page";
import {
  getConcertsFromLocalStorage,
  removeConcertToLocalStorage,
  saveConcertToLocalStorage
} from "@/app/concert/_hooks/useLocalStorage";

const SavedConcertContext = createContext<
  {
    concerts: Concert[],
    removeConcert: (concert: Concert) => void,
    saveConcert: (concert: Concert) => void,
  }>({ removeConcert: removeConcertToLocalStorage, concerts: getConcertsFromLocalStorage(), saveConcert: saveConcertToLocalStorage});

export const SavedConcertProvider = ({ children }: { children: React.ReactNode }) => {
  const [concerts, setConcerts] = useState<Concert[]>(getConcertsFromLocalStorage());

  const saveConcert = (concert: Concert) => {
    saveConcertToLocalStorage(concert);
    setConcerts(getConcertsFromLocalStorage())
  }

  const removeConcert = (concert: Concert) => {
    removeConcertToLocalStorage(concert);
    setConcerts(getConcertsFromLocalStorage())
  }


  return (
    <SavedConcertContext.Provider value={ {concerts, removeConcert, saveConcert } }>
      {children}
    </SavedConcertContext.Provider>
  );

};

export const useSavedConcertContext = () => {
  const context = useContext(SavedConcertContext);
  if (!context) {
    throw new Error('useDisplayConcert must be used within a DisplayContext');
  }
  return context;
};
