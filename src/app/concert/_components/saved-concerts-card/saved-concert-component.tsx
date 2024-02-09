import useAxios from "@/app/concert/_hooks/useAxios";
import React, {useEffect, useState} from "react";
import {rapperInstance} from "@/app/_api/instances";
import styles from "./saved-concert-component.module.css"
import Image from "next/image";
import {Rapper} from "@/app/concert/page";



export function SavedConcertsCard (): React.ReactNode {
  const [response, error, loading, axiosFetch] = useAxios();
  const [rappers, setRappers] = useState<Rapper []>([]);

  useEffect(() => {
    axiosFetch({
      axiosInstance: rapperInstance,
      url: "api/users",
      method: "get",
      requestConfig: []
    })
  }, []);


  useEffect(() => {
    let data: any[] = response?.data;
    if ( data !== undefined ) {
      let r: Rapper [] = data?.map(el => ({avatar: el.avatar, id: el.id, first_name: el.first_name, last_name: el.last_name}))
      setRappers(prevState => r)
    }
  }, [response]);

  return (
    <div className={styles.savedConcertC} >
      <h3 className={styles.title} >Enregistrés</h3>
      <div className={styles.scrollable} >
        <div className={styles.savedConcertsContainer} >
          {rappers.map((el, id) => <SavedConcert image={el.avatar} key={id} name={el.first_name}/>)}
        </div>
      </div>
    </div>
  )
}

export function SavedConcert ({name, image}: {name: string, image:any}): React.ReactNode {
  return (
    <div className={styles.savedConcertsW}  >
      <Image width={100} height={100} className={styles.backgroundImage} src={image} alt={"artist picture"}/>
      <div className={styles.backgroundImageMask}/>
      <div className={styles.savedConcertsC} >
        <h2 className={styles.artistName}>{name}</h2>
      </div>
    </div>
  )
}