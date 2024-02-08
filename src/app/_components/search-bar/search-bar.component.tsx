"use client"
import styles from "./search-bar.module.css"
import React, {useEffect, useState} from "react";
import Link from "next/link";
export default function SearchBar () {

  const [value, setValue] = useState<string>("");
  const handleInputTextChange = (e:any) => {
    setValue(e.current)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inputContainer} >
          <input className={styles.input} type={"text"} value={value} onChange={(e) => handleInputTextChange(e)}  />
        </div>

        <div className={styles.iconContainer}> Search </div>
      </div>
    </div>
  )
}

