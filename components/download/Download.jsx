import React from "react";
import styles from "./Download.module.css";
import Image from "next/image";

export default function Download() {
  return (
    <div className={styles.download}>
      <div className={styles.flex1}>
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className={styles.flex2}>
        <div className={styles.extension}>
          <Image
            src="/images/logo-chrome.svg"
            alt="Google Chrome"
            height={90}
            width={90}
          />
          <div className={styles.add}>
            <h3>Add to Chrome</h3>
            <span>Minimum version 62</span>
          </div>

          <Image
            className={styles.dots}
            src="/images/bg-dots.svg"
            alt="dots"
            height={4}
            width={250}
          />
          <button>Add & Install Extension</button>
        </div>

        <div className={styles.extension}>
          <Image
            src="/images/logo-firefox.svg"
            alt="Firefox"
            height={90}
            width={90}
          />
          <div className={styles.add}>
            <h3>Add to Firefox</h3>
            <span>Minimum version 55</span>
          </div>

          <Image
            className={styles.dots}
            src="/images/bg-dots.svg"
            alt="dots"
            height={4}
            width={250}
          />
          <button>Add & Install Extension</button>
        </div>

        <div className={styles.extension}>
          <Image
            src="/images/logo-opera.svg"
            alt="Opera"
            height={90}
            width={90}
          />
          <div className={styles.add}>
            <h3>Add to Opera</h3>
            <span>Minimum version 46</span>
          </div>

          <Image
            className={styles.dots}
            src="/images/bg-dots.svg"
            alt="dots"
            height={4}
            width={250}
          />
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
}
