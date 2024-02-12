import useAxios from "@/app/concert/_hooks/useAxios";
import React, {useEffect, useState} from "react";
import {apiInstance} from "@/app/api/_api/instances";
import styles from "./saved-concert-component.module.css"
import Image from "next/image";
import {CONCERTS} from "@/app/api/bd";
import {getConcertsFromLocalStorage, removeConcertToLocalStorage} from "@/app/concert/_hooks/useLocalStorage";
import {handleAction} from "next/dist/server/app-render/action-handler";
import {useSavedConcertContext} from "@/app/concert/_hooks/useSavedConcert";



export function SavedConcertsCard (): React.ReactNode {
  const [savedConcerts, setSavedConcerts] = useState<Concert []>([]);

  const { concerts, removeConcert } = useSavedConcertContext()


  useEffect(() => {
    setSavedConcerts( concerts )
  }, [concerts]);


  const handleRemoveConcert = (concert: Concert) => {
    removeConcert(concert)
  }

  return (
    <div className={styles.savedConcertC} >
      <h3 className={styles.title} >Enregistrés</h3>
      <div className={styles.scrollable} >
        <div className={styles.savedConcertsContainer} >
          {savedConcerts.map((savedConcert, index) => <SavedConcert key={index} data={savedConcert} deleteAction={handleRemoveConcert} />)}
        </div>
      </div>
    </div>
  )
}

export function SavedConcert ({data, deleteAction}: {data: Concert, deleteAction: (data:Concert) => void }): React.ReactNode {


  return (
    <div className={styles.savedConcertsW}  >

      <Image width={100} height={100} className={styles.backgroundImage} src={data.artist.picture[1]} alt={"artist picture"}/>
      <div className={styles.backgroundImageMask}/>

      <div className={styles.savedConcertsC} >
        <h2 className={styles.artistName}>{data.artist.name}</h2>
      </div>

      <div className={styles.trash} onClick={() => deleteAction(data)} > Supprimer </div>

    </div>
  )
}