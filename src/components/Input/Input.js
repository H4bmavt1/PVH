import React, { useCallback, useState } from 'react'
import styles from './Input.module.css'
import { setErrors } from '../../actions/accountAction';
import { useDispatch } from 'react-redux';

const required = (text) => {
    text = text.trim();
    if(text === '') {
        return false;
    }
    return true;
}

const email = (text) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(text);
}

const password = (text) => {
    const regex = /^(?=[a-z|A-Z])(?=.*[0-9]).{6,}/;
    return regex.test(text);
}

const cfPassword = (text1, text2) => {
    return text1 === text2;
}

const phoneCheck = (text) => {
    if(text === '') {
        return true;
    }
    const regex = /\d{10}/;
    return regex.test(text);
}


const Input = ({id, name, type, title, onChangeInput, value, checks = [], confirmPassword, errors = null}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleBlur = useCallback(() => {
        for(let check of checks) {
            if(check === 'required') {
                if(!required(value)) {
                    setError('This filed is required');
                    return;
                } else {
                    setError(null);
                }
            }
            if(check === 'email') {
                if(!email(value)) {
                    setError('Email is invalid');
                    return;
                } else {
                    setError(null);
                }
            }
            if(check === 'password') {
                if(!password(value)) {
                    setError('Password must have at least 6 characters and include a number');
                    return;
                } else {
                    setError(null);
                }
            }
            if(check === 'confirmPassword') {
                if(!cfPassword(value, confirmPassword)) {
                    setError('Your password is not matched');
                    return;
                } else {
                    setError(null);
                }
            }
            if(check === 'phone') {
                if(!phoneCheck(value)) {
                    setError('Phone number is invalid');
                    return;
                } else {
                    setError(null);
                }
            }
        }
    }, [checks, confirmPassword, value])

    const handleErrors = (theErrors) => {
        const foundError = theErrors.find(err => {
            return err.param === name;
        })
        if(foundError) {
            return foundError.msg;
        }
    }

    return (
        <div className={styles.container}>
            {type === 'textarea' ? <textarea style={{height: '100%'}} value={value} onChange={(e) => onChangeInput(e)} type={type} id={id} name={name} className={styles.input} required autoComplete="off" /> : 
            <input step="0.1" onBlur={() => {handleBlur(); dispatch(setErrors(null))}} value={value} onChange={(e) => onChangeInput(e)} type={type} id={id} name={name} className={styles.input} required autoComplete="off" />}
            <label className={styles.label} htmlFor={id}>{title}</label>
            <div className={styles.line}></div>
            {error && <p className={styles.error}>{error}</p> }
            {errors && <p className={styles.error}>{handleErrors(errors)}</p> }
        </div>
    )
}

export default Input
