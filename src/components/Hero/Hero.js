import React from 'react'
import styles from './Hero.module.css'
import { hero } from '../../data'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    const [value, setValue] = useState(0);


    useEffect(() => {
        if(value < 0) {
            setValue(hero.length - 1);
        } else if(value > hero.length - 1) {
            setValue(0);
        }
    }, [value])

    useEffect(() => {
        const nextSlide = setInterval(() => {
            setValue(value + 1);
        }, 3000);
        return () => {
            clearInterval(nextSlide);
        }
    }, [value])

    return (
            <div className={styles.hero}>
                {hero.map((img, index) => {
                    const {name, url, slogan} = img;
                    let style = styles.hero__slide;
                    if(index === value) {
                        style += ' ' + styles.hero__slide_active;
                    } else if(index === value - 1 || (value === 0 && index === hero.length - 1)) {
                        style += ' ' + styles.hero__slide_prev;
                    }
                    return (
                        <div key={name} className={style}>
                            <img src={url} alt={name} className={styles.hero__img}/>
                            <div className={styles.overlay}>
                                <h3 className={styles.slogan}>{slogan}</h3>
                                <div className={styles.linkContainer}>
                                    <Link to="/e-commerce/products?page=1" className={styles.link}>Shop now</Link>
                                    <div className={styles.linkBgc}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button className={`${styles.hero__btn} ${styles.hero__btn_next}`} onClick={() => setValue(value + 1)} ><i className="fas fa-chevron-right"></i></button>
                <button className={`${styles.hero__btn} ${styles.hero__btn_prev}`} onClick={() => setValue(value - 1)} ><i className="fas fa-chevron-left"></i></button>
                <div className={styles.hero__control}>
                    {hero.map((img, index) => {
                        let style = styles.hero__control_btn;
                        if(index === value) {
                            style += ' ' + styles.hero__control_btn_active;
                        }
                        return (
                            <button key={index} className={style} onClick={() => setValue(index)} ></button>
                        )
                    })}
                </div>
            </div>
    )
}

export default Hero
