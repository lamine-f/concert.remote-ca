"use client"
import React, {CSSProperties, useEffect, useState} from "react";
import useAxios from "@/app/_hooks/useAxios";
import {rapperInstance} from "@/app/_api/instances";
import styles from "./concert-component.module.css";
import Image from "next/image";
import {Rapper} from "@/app/concert/page";
import {useDisplay} from "@/app/concert/_hooks/useDisplay";
import * as cluster from "cluster";

export function ConcertsCard (): React.ReactNode {
  const [response, error, loading, axiosFetch] = useAxios();
  const [rappers, setRappers] = useState<Rapper []>([]);


  useEffect(() => {
    axiosFetch({
      axiosInstance: rapperInstance,
      url: "api/users?page=2",
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
    <div className={styles.concertsC} >
      <h3 className={styles.title} >Tous les concerts</h3>
      <div className={styles.concertScrollable} >
        <div className={styles.concertsContainer} >
          {rappers.map((el, id) => <Concert  artist={el} key={id}  text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>)}
          {rappers.map((el, id) => <Concert artist={el} key={id}  text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>)}
        </div>
      </div>
    </div>
  );
}


export function Concert ({ artist, text, style}: {
  artist: Rapper
  title? : string
  text: string,
  style?: CSSProperties
}): React.ReactNode {


  const { active, setActive, setRapper, rapper  } = useDisplay();

  const handleClickEvent = (id: number) => {
    setActive?.(true);
    setRapper?.(artist)
  }


  return (
    <div style={style}  onClick={() => handleClickEvent(artist.id)} className={styles.concertW} >
      <div className={styles.concertC} >
        <div className={styles.concertLeftSide} >
          <h4 className={styles.concertLeftSideTitle} >{artist.first_name}</h4>
          <p className={styles.concertLeftSideP} >{text.split(' ').splice(0, 10).join(' ')+"..."}</p>
        </div>
        <div className={styles.concertRightSide} >
          <Image width={100} height={100} className={styles.concertImage} src={artist.avatar} alt={"artist picture"}/>
        </div>
      </div>
    </div>
  );
}
