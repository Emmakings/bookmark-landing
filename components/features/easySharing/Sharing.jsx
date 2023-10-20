import Image from "next/image";
import React from "react";
import styles from './Sharing.module.css'

export default function Sharing() {
  return (
    <div className={styles.bookmark}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          src="/images/illustration-features-tab-3.svg"
          alt="hero logo"
          height={360}
          width={450}
        />
        <div className={styles.heroBack}></div>
      </div>
      <div className={styles.simple}>
        <h1>Share your bookmarks</h1>
        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button
        </p>
        <button className={styles.info}>More Info</button>
      </div>
    </div>
  );
}
