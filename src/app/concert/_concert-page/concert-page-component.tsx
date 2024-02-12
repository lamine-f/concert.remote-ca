import {useDisplayConcert} from "@/app/concert/_hooks/useDisplayConcert";
import React, {useEffect, useRef, useState} from "react";
import styles from "./concert-page-component.module.css";
import infosConcert from "./concert-infos.module.css";
import Image from "next/image";
import SecondaryButton from "@/app/_shared-components/secondary-button/secondary-button-component";
import {Concert} from "@/app/concert/_components/concerts-cards/concert-component";
import PrimaryButton from "@/app/_shared-components/primary-button/primary-button-component";
import {checkIfConcertAlreadySaved} from "@/app/concert/_hooks/useLocalStorage";
import {useSavedConcertContext} from "@/app/concert/_hooks/useSavedConcert";

export default function ConcertPage () {
  const {concert, setConcert, active, toggleDisplayContext} = useDisplayConcert()
  const [currentConcert, setCurrentConcert] = useState<Concert>();
  const { saveConcert } = useSavedConcertContext()

  const cancel = () => {
    toggleDisplayContext?.();
    setConcert?.(undefined);
  }

  useEffect(() => {
    if (concert) {
      setCurrentConcert(concert);
    }
  }, [concert]);


  return (
    (currentConcert && active ) &&
    <div className={styles.wrapper} >
      <div  className={styles.container}>
          <FirstPage concert={currentConcert}/>
          <SecondPage concert={currentConcert}/>
      </div>
      <div className={styles.buttonsContainer} >
          <SecondaryButton
              action={() => cancel()}
              children={"Cancel"}
          />
          {!checkIfConcertAlreadySaved(currentConcert.id) &&
              <PrimaryButton
                  action={() => {
                    saveConcert(currentConcert)
                    cancel()
                  } }
                  children={"Enregistrer"}
              />
          }
      </div>
    </div>
  )
}


function FirstPage ({concert}:{concert: Concert}) {

  const container = useRef<HTMLElement>(null)

  useEffect(() => {
    const element: HTMLElement | null = container.current
    if (element) {
      setTimeout( () => {
        element.scrollIntoView({behavior: 'smooth'})
      }, 700 )
    }
  }, []);

  return (
    <section ref={container} className={styles.firstSection}>
      <div className={styles.backgoundMask} />
      <h2 className={styles.artistName} >{concert.artist.name}</h2>
      <div className={styles.concertCardContainer} >
        <Concert
          data={concert}
          disable={true}
        />
      </div>
      <Image className={styles.image} width={400} height={400} src={concert.artist.picture[1]} alt={"background image"}/>
    </section>
  )
}

function SecondPage ({concert}:{concert: Concert}) {

  const container = useRef<HTMLElement>(null)

  useEffect(() => {
    const element: HTMLElement | null = container.current
    if (element) {
      setTimeout( () => {
        element.scrollIntoView({behavior: 'smooth'})
      }, 500 )
    }
  }, []);

  return (
    <section ref={container} className={infosConcert.wrapper}>
      <div className={infosConcert.backgoundMask} />
      <div className={infosConcert.container} >

        <div className={infosConcert.containers}>


          <div className={infosConcert.concertDateContainer} >
            <h2 className={infosConcert.concertDate} >{concert.date}</h2>
          </div>

          <div className={infosConcert.infosContainer} >
            <div className={infosConcert.infosSubContainer}>
              <div className={infosConcert.label} >Nom de l'evenement</div>
              <p className={infosConcert.infosBody}> {concert.name} </p>
            </div>

            <div className={infosConcert.infosSubContainer}>
              <div className={infosConcert.label} >Type de musique</div>
              <p className={infosConcert.infosBody}> {concert.types.map(type => type.name).join(', ')} </p>
            </div>
          </div>

          <div style={{width: "100%"}} className={infosConcert.infosSubContainer} >
            <div className={infosConcert.label} >Informations:</div>
            <p className={infosConcert.infosSupBody}> {concert.description} </p>
          </div>

        </div>


      </div>
      <Image className={styles.image} width={400} height={400} src={concert.artist.picture[2]} alt={"background image"}/>
    </section>
  )
}