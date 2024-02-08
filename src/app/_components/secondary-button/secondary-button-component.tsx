
import styles from "./secondary-button-component.module.css"
import {CSSProperties} from "react";
export default function SecondaryButton ({children, action, style}: {
  children: string,
  action?: () => void,
  style?: CSSProperties
}) {
  return (
    <button style={style} onClick={ () => action?.() } className={styles.button}>{children}</button>
  )

}