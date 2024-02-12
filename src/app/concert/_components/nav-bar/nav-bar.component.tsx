"use client"
import styles from "./nav-bar.module.css"
import React, {useEffect, useState} from "react";
import Link from "next/link";
export default function NavBar () {

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 768);
    })
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      {
        isMobile ?
          <BurgerMenus children={[
            <BurgerMenu key={1} handleToggle={() => {}} url={"/"} >Acceuil</BurgerMenu>,
            // <BurgerMenu handleToggle={() => {}} url={"a-propos"}>A propos</BurgerMenu>
          ]} />
          :
          <Buttons
            children={[
              <Button
                key={1}
                active={false}
                href={"/"}
                children={"Acceuil"}
              />,
              // <Button
              //   href={"concert"}
              //   active={false}
              //   children={"A propos"}
              // />
            ]}
          />
      }
      </div>
    </div>
  )
}


function Buttons ({children}:{children: React.ReactNode[] | React.ReactNode}) {
  return (
    <>{children}</>
  )
}

function Button ({children, href}:{
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

const BurgerMenus = ({children}:{children: React.ReactNode[]}) => {
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
            {children.map( (child: any) => React.cloneElement(child, {...child, handleToggle}) )}
          </div>

        </div>
      )}
    </div>
  );
};



const BurgerMenu = ({handleToggle, children, url}: {handleToggle: () => void, children: React.ReactNode, url: string}) => {
  return (
    <Link className={styles.menuItem} onClick={() => handleToggle()} href={url}>{children}</Link>
  )
};