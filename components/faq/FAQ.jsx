"use client";
import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import Image from "next/image";

export default function FAQ() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <p>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className={styles.container}>
        <div className={styles.flex}>

          <div className={styles.question1}>
            <div className={styles.items1}>
              <button className={styles.hero} onClick={toggleContentVisibility}>
                <p>What is Bookmark?</p>
                <Image
                  className={styles.img}
                  src="/images/icon-arrow.svg"
                  alt="open faq"
                  width={18}
                  height={12}
                />
              </button>

              <div className={styles.panel}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda nihil nemo tempora numquam culpa eligendi quidem
                  sequi eos ducimus?
                </p>
              </div>
            </div>
          </div>

          <div className={styles.question2}>
            <div className={styles.items}>
              <button className={styles.hero} onClick={toggleContentVisibility}>
                <p>How can I request a new browser?</p>
                <Image
                  className={styles.img}
                  src="/images/icon-arrow.svg"
                  alt="open faq"
                  width={18}
                  height={12}
                />
              </button>

              <div className={styles.panel}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda nihil nemo tempora numquam culpa eligendi quidem
                  sequi eos ducimus?
                </p>
              </div>
            </div>
          </div>

          <div className={styles.question3}>
            <div className={styles.items}>
              <button className={styles.hero} onClick={toggleContentVisibility}>
                <p>Is there a mobile app?</p>
                <Image
                  className={styles.img}
                  src="/images/icon-arrow.svg"
                  alt="open faq"
                  width={18}
                  height={12}
                />
              </button>

              <div className={styles.panel}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda nihil nemo tempora numquam culpa eligendi quidem
                  sequi eos ducimus?
                </p>
              </div>
            </div>
          </div>

          <div className={styles.question4}>
            <div className={styles.items}>
              <button className={styles.hero} onClick={toggleContentVisibility}>
                <p>What about other Chromium browsers?</p>
                <Image
                  className={styles.img}
                  src="/images/icon-arrow.svg"
                  alt="open faq"
                  width={18}
                  height={12}
                />
              </button>

              <div className={styles.panel}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda nihil nemo tempora numquam culpa eligendi quidem
                  sequi eos ducimus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.info}>More Info</button>
    </div>
  );
}

// style={{ display: "block" }}