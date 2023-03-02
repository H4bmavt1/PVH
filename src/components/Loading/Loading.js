import React from 'react'
import styles from './Loading.module.css'
import Container from '../Container/Container'

const Loading = () => {
    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.circle}>
                </div>
            </div>
        </Container>
    )
}

export default Loading
