import React, { useState } from 'react'
import styles from '../components/Contact/Contact.module.css'
import Container from '../components/Container/Container'
import Input from '../components/Input/Input'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    return (
        <Container>
            <ScrollToTop></ScrollToTop>
            <h1 className={styles.title}>Contact</h1>
            <h3 className={styles.subTitle}>We love to discuss your idea</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.icon}>
                        <i className="far fa-map"></i>
                    </div>
                    <p className={styles.itemHeader}>Address</p>
                    <p className={styles.itemText}>Thuy Nguyen, Hai Phong, Viet Nam</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}>
                        <i className="far fa-envelope"></i>
                    </div>
                    <p className={styles.itemHeader}>Email</p>
                    <p className={styles.itemText}>email@example.com</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}>
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <p className={styles.itemHeader}>Phone</p>
                    <p className={styles.itemText}>+84 123 567 8910</p>
                </li>
            </ul>
            <form action="" className={styles.form}>
                <div className={styles.formLeft}>
                    <Input id="contact-name" name='name' title='Name' type='text' value={name} onChangeInput={(e) => setName(e.target.value)} ></Input>
                    <Input id="contact-email" name='email' title='Email' type='email' value={email} onChangeInput={(e) => setEmail(e.target.value)} ></Input>
                    <Input id="contact-subject" name='subject' title='Subject' type='text' value={subject} onChangeInput={(e) => setSubject(e.target.value)} ></Input>
                </div>
                <div className={styles.formRight}>
                    <Input id="contact-message" name='message' title='Message' type='textarea' value={message} onChangeInput={(e) => setMessage(e.target.value)} ></Input>
                    <button className={styles.submit}>Submit</button>
                </div>
            </form>
        </Container>
    )
}

export default Contact