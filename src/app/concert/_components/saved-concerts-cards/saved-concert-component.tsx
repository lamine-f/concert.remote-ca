import useAxios from "@/app/concert/_hooks/useAxios";
import React, {useEffect, useState} from "react";
import {apiInstance} from "@/app/api/_api/instances";
import styles from "./saved-concert-component.module.css"
import Image from "next/image";
import {CONCERTS} from "@/app/api/bd";



export function SavedConcertsCard (): React.ReactNode {
  // const [response, error, loading, axiosFetch] = useAxios();
  const [savedConcerts, setSavedConcerts] = useState<Concert []>([]);


  const getConcertsFromLocalStorage = (): Concert[] => {
    const getConcertFromId = (id: number): Concert => {
      const concert = CONCERTS.filter( concert => concert.id === id );
      return concert[0]
    }

    let str: string | null =  window.localStorage.getItem("saved-concerts");
    const data = [JSON.parse( str ? str : '[]' )];
    const concertIds: number[] = data.length === 1 ? data[0] : [];
    return concertIds.map( concertId => getConcertFromId(concertId) ).filter( concert => concert !== null );
  }



  // useEffect(() => {
  //   axiosFetch({
  //     axiosInstance: apiInstance,
  //     url: "get-saved-concerts",
  //     method: "get",
  //     requestConfig: []
  //   })
  // }, []);

  // useEffect(() => {
  //   let data: Concert[] = response;
  //   if ( data !== null ) {
  //     console.log(data)
  //     setSavedConcerts(data)
  //   }
  // }, [response]);

  useEffect(() => {
    console.log(  )
    setSavedConcerts( getConcertsFromLocalStorage() )
  }, []);


  return (
    <div className={styles.savedConcertC} >
      <h3 className={styles.title} >Enregistrés</h3>
      <div className={styles.scrollable} >
        <div className={styles.savedConcertsContainer} >
          {savedConcerts.map((savedConcert, index) => <SavedConcert key={index} data={savedConcert} />)}
        </div>
      </div>
    </div>
  )
}

export function SavedConcert ({data}: {data: Concert}): React.ReactNode {
  return (
    <div className={styles.savedConcertsW}  >
      <Image width={100} height={100} className={styles.backgroundImage} src={data.artist.picture[1]} alt={"artist picture"}/>
      <div className={styles.backgroundImageMask}/>
      <div className={styles.savedConcertsC} >
        <h2 className={styles.artistName}>{data.artist.name}</h2>
      </div>
    </div>
  )
}