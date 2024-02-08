"use client"
import React, {useEffect} from "react";
import styles from "./concert.module.css"
import {ConcertsCard} from "@/app/concert/_components/concerts-card/concert-component";
import {SavedConcertsCard} from "@/app/concert/_components/saved-concerts-card/saved-concert-component";
import {DisplayProvider, useDisplay} from "@/app/concert/_hooks/useDisplay";
import ConcertPage from "@/app/concert/_components/concert-page/concert-page-component";

export type Rapper = {
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
}

export default function () {



  return (
    <div className={styles.wrapper} >
      <DisplayProvider>
        <SavedConcertsCard/>
        <ConcertsCard/>
        <ConcertPage/>
      </DisplayProvider>

    </div>
  )
}
