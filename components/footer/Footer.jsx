import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/images/logo-bookmark-white.svg"
          alt="bookmark logo"
          height={25}
          width={150}
        />

        <ul className={styles.ul}>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div className={styles.socials}>
        <Image
          className={styles.link}
          src="/images/icon-facebook.svg"
          alt="facebook logo"
          height={25}
          width={25}
        />

        <Image
          className={styles.link}
          src="/images/icon-twitter.svg"
          alt="facebook logo"
          height={25}
          width={25}
        />
      </div>
    </div>
  );
}
