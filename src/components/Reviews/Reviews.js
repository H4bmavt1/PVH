import React from 'react'
import styles from './Reviews.module.css'
import Container from '../Container/Container'
import { reviews } from '../../data'
import { useState } from 'react'

const Reviews = () => {
    const [value, setValue] = useState(1);

    return (
        <Container>
            <div className={styles.reviews}>
                <h2 className={styles.header} >Reviews</h2>
                <div className={styles.wapper}>
                    {reviews.map((review, index) => {
                        const {name, review: text, location} = review;
                        let style = styles.slide;
                        if(value === index) {
                            style += ' ' + styles.slide__active;
                        } else if(index === value + 1 || (value === reviews.length - 1 && index === 0)) {
                            style += ' ' + styles.slide__next;
                        } else if(index === value - 1 || (value === 0 && index === reviews.length - 1)) {
                            style += ' ' + styles.slide__prev;
                        }
                        return (
                            <div key={index} className={style}>
                                <div className={styles.content}>
                                    <p className={styles.name}>{name} <span className={styles.name__span}>Customer</span></p>
                                    <p className={styles.location} >{location}</p>
                                    <p className={styles.text} >{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => {if(value + 1 > reviews.length - 1) {setValue(0)} else {setValue(value + 1)}}} className={`${styles.btn} ${styles.btn__next}`} ><i className="fas fa-long-arrow-alt-right"></i></button>
                <button onClick={() => {if(value - 1 < 0) {setValue(reviews.length - 1)} else {setValue(value - 1)}}} className={`${styles.btn} ${styles.btn__prev}`}><i className="fas fa-long-arrow-alt-left"></i></button>
            </div>
        </Container>
    )
}

export default Reviews
