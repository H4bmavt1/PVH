import React from 'react'
import styles from './Error.module.css'
import Container from '../Container/Container'

const Error = ({children}) => {
    return (
        <Container>
            <div className={styles.container}>
                <h3 className={styles.text}>
                    {children}
                </h3>
            </div>
        </Container>
    )
}


export default Error
