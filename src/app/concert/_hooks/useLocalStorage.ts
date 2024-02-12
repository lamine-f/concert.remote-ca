"use client"

import {CONCERTS} from "@/app/api/bd";

const key = 'saved-concerts'


export const getConcertsFromLocalStorage = (): Concert[] => {
  const getConcertFromId = (id: number): Concert => {
    const concert = CONCERTS.filter( concert => concert.id === id );
    return concert[0]
  }

  if (typeof window !== "undefined") {
    // browser code
    let str: string | null =  window.localStorage.getItem(key);
    const data = [JSON.parse( str ? str : '[]' )];
    const concertIds: number[] = data.length === 1 ? data[0] : [];
    return concertIds.map( concertId => getConcertFromId(concertId) ).filter( concert => concert !== null );
  }

  return []
}


export const checkIfConcertAlreadySaved = (id: number) => {
  return getConcertsFromLocalStorage().filter(concert => concert.id === id ).length > 0;
}

export const saveConcertToLocalStorage = (concert: Concert) => {
  const newId = concert.id;
  const concertsId = getConcertsFromLocalStorage().map(concert => concert.id);
  if (!checkIfConcertAlreadySaved(newId)){
    concertsId.push(newId)
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem( key , JSON.stringify(concertsId) );
  }
}

export const removeConcertToLocalStorage = (concert: Concert) => {
  const id = concert.id;
  let concertsId = getConcertsFromLocalStorage().map(concert => concert.id);
  if (checkIfConcertAlreadySaved(id)){
    concertsId = concertsId.filter(concertId => concertId !== id )
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem( key , JSON.stringify(concertsId) );
  }
}