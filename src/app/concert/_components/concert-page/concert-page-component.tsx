import {useDisplay} from "@/app/concert/_hooks/useDisplay";
import React, {useEffect, useState} from "react";
import styles from "./concert-page-component.module.css";
import Image from "next/image";
import SecondaryButton from "@/app/_components/secondary-button/secondary-button-component";
import {Concert} from "@/app/concert/_components/concerts-card/concert-component";
import {Rapper} from "@/app/concert/page";

export default function ConcertPage () {

  const [currentRapper, setCurrentRapper] = useState<Rapper>({avatar: "", id: 0, last_name: "", first_name: ""});

  const {rapper, active, setActive, setRapper} = useDisplay()

  const cancel = () => {
    setActive?.(false);
    setRapper?.(null);
  }

  useEffect(() => {
    if (active) {
      console.log(rapper)
    }

    if (rapper)
      setCurrentRapper(rapper);
  }, [active]);

  return (
    active &&
    <div className={styles.wrapper} >
      <div className={styles.container}>
          <section className={styles.firstSection}>
              <div className={styles.backgoundMask} />
              <h2 className={styles.artistName} >{rapper?.first_name+" "+rapper?.last_name}</h2>

              <div className={styles.concertCardContainer} >
                  <Concert
                      artist={currentRapper}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
              </div>

              <Image className={styles.image} width={400} height={400} src={rapper!.avatar} alt={"cc"}/>
          </section>

          <section className={styles.secondSection}>
              <div className={styles.backgoundMask2} />
              <h2 className={styles.artistName} >{rapper?.first_name+" "+rapper?.last_name}</h2>



              <Image className={styles.image} width={400} height={400} src={rapper!.avatar} alt={"cc"}/>
          </section>

      </div>

        <SecondaryButton
          action={() => cancel()}
          children={"Cancel"}
          style={{
            position: "absolute",
            bottom: "50px"
          }}
        />
    </div>
  )
}