import React from 'react'
import styles from './WhyChoose.module.css'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'

const WhyChoose = () => {
    return (
        <Container>
            <div className={styles.top}>
                <div className={styles.card}>
                    <span className={styles.card__icon} ><i className="far fa-hand-paper"></i></span>
                    <h3 className={styles.card__title} >Satisfaction Guaranteed</h3>
                    <p className={styles.card__text} >Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <button className={styles.card__btn} >
                        <Link to="/e-commerce/products?page=1">shop now</Link>
                        <div className={styles.card__btn__bgc}></div>
                    </button>
                </div>
                <div className={styles.card}>
                    <span className={styles.card__icon} ><i className="fas fa-rocket"></i></span>
                    <h3 className={styles.card__title} >Fast Shipping</h3>
                    <p className={styles.card__text} >Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <button className={styles.card__btn} >
                        <Link to="/e-commerce/products?page=1">shop now</Link>
                        <div className={styles.card__btn__bgc}></div>
                    </button>
                </div>
                <div className={styles.card}>
                    <span className={styles.card__icon} ><i className="fas fa-tools"></i></span>
                    <h3 className={styles.card__title} >Free Repair</h3>
                    <p className={styles.card__text} >Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <button className={styles.card__btn} >
                        <Link to="/e-commerce/products?page=1">shop now</Link>
                        <div className={styles.card__btn__bgc}></div>
                    </button>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.step} >
                    <div className={styles.step__icon}>
                        <i className="fas fa-gift"></i>
                    </div>
                    <div className={styles.step__content}>
                        <h3 className={styles.step__title}>GENUINE PRODUCT</h3>
                        <p className={styles.step__text}>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className={styles.step} >
                    <div className={styles.step__icon}>
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className={styles.step__content}>
                        <h3 className={styles.step__title}>SECURE PRODUCTS</h3>
                        <p className={styles.step__text}>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className={styles.step} >
                    <div className={styles.step__icon}>
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className={styles.step__content}>
                        <h3 className={styles.step__title}>CASH ON DELIVERY</h3>
                        <p className={styles.step__text}>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className={styles.step} >
                    <div className={styles.step__icon}>
                        <i className="fas fa-truck"></i>
                    </div>
                    <div className={styles.step__content}>
                        <h3 className={styles.step__title}>EASY DELIVERY</h3>
                        <p className={styles.step__text}>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WhyChoose
