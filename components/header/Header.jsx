import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Image 
            src='/images/logo-bookmark.svg'
            alt='bookmark logo'
            height={25}
            width={150}/>
        </div>

        <ul className={styles.ul}>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
            <li>
                <button className={styles.login}>LOGIN</button>
            </li>
        </ul>
    </div>
  )
}
