import React from 'react'
import styles from './Ads.module.css'
import Container from '../Container/Container'
import { ads } from '../../data'

const Ads = () => {
    const {text, img} = ads;
    return (
        <Container>
            <div className={styles.container}>
                <img src={img} alt={text} className={styles.img} />
                <p className={styles.text} >{text}</p>
            </div>
        </Container>
    )
}

export default Ads
