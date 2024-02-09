import styles from "./page.module.css";
import Image from "next/image";

import cardStyles from "./card.module.css";
import backgroundCardStyles from "./background-card.module.css";

import backgoundImage from "../../public/home-page-background.jpg"
import React, {CSSProperties} from "react";
import Link from "next/link";



function Card ({style, color, children}:{
  style:CSSProperties,
  color?: string,
  children: React.ReactNode
}) {

  return (
    <div style={{...style, background: color}} className={cardStyles.wrapper} >
      <div style={{background: color}} className={cardStyles.container} >
        <div className={cardStyles.mask} ></div>

        <h2 style={{color: color}} className={cardStyles.dateText} >{children}</h2>
      </div>
    </div>
  )
}



function BackgroundCard () {

  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const date : string[] = shuffle([
    "14 Décembre", "14 Avril", "12 Mai", "25 Juillet", "31 Décembre", "30 Février", "13 Mars", "20 Octobre"
  ])

  return (
    <div className={backgroundCardStyles.container}>
      <div className={backgroundCardStyles.leftCardContainer}>

        <div className={backgroundCardStyles.cardsContainer}>
          <Card style={{transform: "rotate(-59deg)"}} color={"#262626"}>{date[0]}</Card>
          <Card style={{transform: "rotate(-10deg)"}} >{date[1]}</Card>
        </div>


        <div className={backgroundCardStyles.cardsContainer}>
          <Card style={{transform: "rotate(41deg) translateY(57px)"}} >{date[2]}</Card>
          <Card style={{transform: "rotate(-4deg) translateX(-22px)"}} color={"#262626"}>{date[3]}</Card>
        </div>

      </div>

      <div className={backgroundCardStyles.rightCardContainer}>

        <div className={backgroundCardStyles.cardsContainer} >
          <Card style={{transform: "rotate(10deg) translate(166px, -102px)"}} >{date[4]}</Card>
          <Card style={{transform: "rotate(-10deg) translate(-174px, 102px)"}} color={"#262626"}>{date[5]}</Card>
        </div>

        <div className={backgroundCardStyles.cardsContainer}>
          <Card style={{transform: "rotate(-33deg) translate(-81px, 91px)"}} >{date[6]}</Card>
          <Card style={{transform: "rotate(15deg)"}} >{date[7]}</Card>
        </div>
      </div>

    </div>
  )
}

export default function Home() {
  return (
    <>
      <BackgroundCard/>
      <div className={styles.wrapper}>

          <div className={styles.welcomMessageContainer}>
            <h1 className={styles.welcomMessage} >Les concerts de vos artistes favoris</h1>
          </div>

          <div className={styles.buttonContainer} >
            <Link href={"concert"} className={styles.button}>Concerts</Link>
          </div>
      </div>
    </>

  );
}
