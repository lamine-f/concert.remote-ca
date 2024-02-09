"use client"
import styles from "./nav-bar.module.css"
import React, {useEffect, useState} from "react";
import Link from "next/link";
export default function NavBar () {

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 425);
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 425);
    })
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      {
        isMobile ?
          <BurgerMenu/>
          :
            <Buttons
            >
              <Button
                active={false}
                href={"/"}
                children={"Acceuil"}
              />
              <Button
                href={"concert"}
                active={false}
                children={"A propos"}
              />
            </Buttons>
      }
      </div>
    </div>
  )
}


function Buttons ({children}:{children: React.ReactNode[]}) {
  return (
    <>{children}</>
  )
}

function Button ({active, children, href}:{
  active: boolean,
  children: string | React.ReactNode,
  href: string
}) {
  return (
    <Link href={href}  className={styles.text}>
      {children}
    </Link>
  )
}

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <div className={`${styles.icon} ${isOpen ? styles.open : ''}`} onClick={handleToggle}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {isOpen && (
        <div className={styles.menu}>

          <div className={styles.menuItemContainer} >
            <Link className={styles.menuItem} onClick={() => handleToggle()} href={"/"}>Acceuil</Link>
          </div>

          <div className={styles.menuItemContainer} >
            <Link className={styles.menuItem} onClick={() => handleToggle()} href={"concerts-card"}>Concert</Link>
          </div>

        </div>
      )}
    </div>
  );
};