import React, { useEffect, useState } from 'react'
import styles from './ScrollButton.module.css'

const ScrollButton = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 640) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <button onClick={() => window.scrollTo(0, 0)} className={`${styles.btn} ${active && styles.btn_active}`}>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
}

export default ScrollButton
