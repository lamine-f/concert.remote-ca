"use client"
import React, {CSSProperties, useEffect, useState} from "react";
import useAxios from "@/app/concert/_hooks/useAxios";
import {apiInstance} from "@/app/api/_api/instances";
import styles from "./concert-component.module.css";
import Image from "next/image";
import {Rapper} from "@/app/concert/page";
import {useDisplayConcert} from "@/app/concert/_hooks/useDisplayConcert";
import * as cluster from "cluster";

export function ConcertsCard (): React.ReactNode {
  const [response, error, loading, axiosFetch] = useAxios();
  const [concerts, setConcerts] = useState<Concert []>([]);

  useEffect(() => {
    axiosFetch({
      axiosInstance: apiInstance,
      url: 'get-concerts',
      method: 'get',
      requestConfig: []
    })
  }, []);

  useEffect(() => {
    let data: Concert[] = response;
    if ( data !== null ) {
      setConcerts([...data])
    }
  }, [response]);

  return (
    <div className={styles.concertsC} >
      <h3 className={styles.title} >Tous les concerts</h3>
      <div className={styles.concertScrollable} >
        <div className={styles.concertsContainer} >
          {concerts.map((concert, id) => <Concert key={id} data={concert} />)}
        </div>
      </div>
    </div>
  );
}


export function Concert ({data, style, disable}: {
  data: Concert,
  disable?: boolean
  style?: CSSProperties
}): React.ReactNode {


  const {toggleDisplayContext, setConcert  } = useDisplayConcert();
  const handleClickEvent = (id: number) => {
    if (!disable){
      toggleDisplayContext?.();
      setConcert?.(data);
    }
  }

  return (
    <div style={style}  onClick={() => handleClickEvent(data.id)} className={styles.concertW} >
      <div className={styles.concertC} >
        <div className={styles.concertLeftSide} >
          <h4 className={styles.concertLeftSideTitle} >{data.artist.name}</h4>
          <p className={styles.concertLeftSideP} >{data.artist.bio?.split(' ').splice(0, 10).join(' ')+"..."}</p>
        </div>
        <div className={styles.concertRightSide} >
          <Image width={100} height={100} className={styles.concertImage} src={data.artist.picture[0]} alt={"artist picture"}/>
        </div>
      </div>
    </div>
  );
}
