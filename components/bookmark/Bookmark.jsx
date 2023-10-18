import React from "react";
import styles from "./Bookmark.module.css";
import Image from "next/image";

export default function Bookmark() {
  return (
    <div className={styles.bookmark}>
      <div className={styles.flex1}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={styles.buttons}>
          <button className={styles.chrome}>Get it on Chrome</button>
          <button className={styles.firefox}>Get it on Firefox</button>
        </div>
      </div>

      <div className={styles.flex2}>
        <Image
          className={styles.img}
          src="/images/illustration-hero.svg"
          alt="hero logo"
          height={450}
          width={650}
        />
        <div className={styles.heroBack}></div>
      </div>
    </div>
  );
}
