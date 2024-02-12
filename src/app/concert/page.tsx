"use client"
import React, {useEffect} from "react";
import styles from "./concert.module.css"
import {ConcertsCard} from "@/app/concert/_components/concerts-cards/concert-component";
import {SavedConcertsCard} from "@/app/concert/_components/saved-concerts-cards/saved-concert-component";
import {DisplayProvider, useDisplayConcert} from "@/app/concert/_hooks/useDisplayConcert";
import ConcertPage from "@/app/concert/_concert-page/concert-page-component";

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
