import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import styles from './Message.module.css'
import { closeMessage } from '../../actions/messageAction';

const Message = () => {
    const {text, isOpen} = useSelector(state => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        const close = setTimeout(() => {
            dispatch(closeMessage());
        }, 3000);
        return () => {
            clearTimeout(close);
        }
    }, [dispatch, isOpen, text])

    return (
        <div className={`${styles.container} ${isOpen ? styles.container_active : ''}`}>
            <button className={styles.close} onClick={() => dispatch(closeMessage())}>
                <i className="fas fa-times"></i>
            </button>
            <h2 className={styles.text}>{text}</h2>
        </div>
    )
}

export default Message
