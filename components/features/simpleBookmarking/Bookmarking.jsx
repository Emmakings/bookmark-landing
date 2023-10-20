import React from "react";
import styles from "./Bookmarking.module.css";
import Image from "next/image";

export default function Bookmarking() {
  return (
    <div className={styles.bookmark}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          src="/images/illustration-features-tab-1.svg"
          alt="hero logo"
          height={360}
          width={550}
        />
        <div className={styles.heroBack}></div>
      </div>
      <div className={styles.simple}>
        <h1>Bookmark in one click</h1>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className={styles.info}>More Info</button>
      </div>
    </div>
  );
}
