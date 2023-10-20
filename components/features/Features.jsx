"use client";
import React, { useState } from "react";
import styles from "./Features.module.css";
import Bookmarking from "./simpleBookmarking/Bookmarking";
import Searching from "./speedySearching/Searching";
import Sharing from "./easySharing/Sharing";

export default function Features() {
  const [content, setContent] = useState(<Bookmarking />);

  const changeContent = () => {
    setContent(<Searching />);
  };

  const changeContent2 = () => {
    setContent(<Sharing />);
  };

  const changeContent3 = () => {
    setContent(<Bookmarking />);
  };

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
          <button className={styles.tablinks1} onClick={changeContent3}>
            Simple Bookmarking
          </button>
          <button className={styles.tablinks2} onClick={changeContent}>
            Speedy Searching
          </button>
          <button className={styles.tablinks3} onClick={changeContent2}>
            Easy Sharing
          </button>
        </div>
        <div className={styles.hr}></div>
      </div>

      <div className={styles.tabcontent}>
        {content}
        {/* <Bookmarking /> */}
        {/* <Searching />
        <Sharing /> */}
      </div>
    </div>
  );
}
