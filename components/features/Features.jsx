import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

export default function Features() {
  return (
    <div className={styles.features}>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className={styles.tabs}>
        <div className={styles.tab1}>
          <button className={styles.tablinks1}>Simple Bookmarking</button>
          <button className={styles.tablinks2}>Speedy Searching</button>
          <button className={styles.tablinks3}>Easy Sharing</button>
        </div>
        <div className={styles.hr}></div>
      </div>
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
    </div>
  );
}
