"use client"
import React, {useEffect, useState} from "react";
import styles from "./concert.module.css"
import Image from "next/image";

import laFImage from "../../static/laf1.jpeg"
import useAxios from "@/app/_hooks/useAxios";
import {rapperInstance} from "@/app/_api/instances";



type Rapper = {
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
}

export default function () {

  return (
    <div className={styles.wrapper} >
      <SavedConcerts/>
      <Concerts/>
    </div>
  )
}


function Concerts (): React.ReactNode {
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
          {rappers.map((el, id) => <Concert image={el.avatar} key={id} title={el.first_name} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>)}
          {rappers.map((el, id) => <Concert image={el.avatar} key={id} title={el.first_name} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>)}
        </div>
      </div>



    </div>
  );
}


function Concert ({ image, title, text}: {
  image: any,
  title: string,
  text: string
}): React.ReactNode {
  return (
    <div className={styles.concertW} >
      <div className={styles.concertC} >
        <div className={styles.concertLeftSide} >
          <h4 className={styles.concertLeftSideTitle} >{title}</h4>
          <p className={styles.concertLeftSideP} >{text.split(' ').splice(0, 10).join(' ')+"..."}</p>
        </div>
        <div className={styles.concertRightSide} >
          <Image width={100} height={100} className={styles.concertImage} src={image} alt={"artist picture"}/>
        </div>

      </div>
    </div>
  );
}



function SavedConcerts (): React.ReactNode {

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

function SavedConcert ({name, image}: {name: string, image:any}): React.ReactNode {
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