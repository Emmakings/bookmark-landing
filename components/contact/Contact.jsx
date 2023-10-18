import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
        <h5>35,000+ ALREADY JOINED</h5>
        <h1>Stay up-to-date with what we're doing</h1>
        <div className={styles.email}>
            <input type="email" placeholder='Enter your email address'/>
            <button>Contact Us</button>
        </div>
    </div>
  )
}
