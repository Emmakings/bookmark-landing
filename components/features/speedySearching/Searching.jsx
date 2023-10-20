import React from "react";
import styles from "./Searching.module.css";
import Image from "next/image";

export default function Searching() {
  return (
    <div className={styles.bookmark}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          src="/images/illustration-features-tab-2.svg"
          alt="hero logo"
          height={400}
          width={450}
        />
        <div className={styles.heroBack}></div>
      </div>
      <div className={styles.simple}>
        <h1>Intelligent search</h1>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button className={styles.info}>More Info</button>
      </div>
    </div>
  );
}
