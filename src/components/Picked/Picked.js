import React from 'react'
import styles from './Picked.module.css'
import Container from '../Container/Container'
import { picks } from '../../data'

const Picked = () => {
    return (
        <Container>
            <div className={styles.container}>
                {picks.map((item, index) => {
                    const {img, id} = item;
                    return (
                        <div key={index} className={styles.wapper}>
                            <img className={styles.img} src={img} alt={id} />
                            <p className={styles.text}>EDITOR'S <span>PICK</span></p>
                            <p className={styles.highline}>CHOOSE YOUR LAPTOP</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Picked
