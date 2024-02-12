
import styles from "./primary-button-component.module.css"
import {CSSProperties} from "react";
export default function PrimaryButton ({children, action, style}: {
  children: string,
  action?: () => void,
  style?: CSSProperties
}) {
  return (
    <button style={style} onClick={ () => action?.() } className={styles.button}>{children}</button>
  )

}