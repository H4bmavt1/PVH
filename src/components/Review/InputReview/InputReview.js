import React from 'react'
import styles from './InputReview.module.css'
import { useSelector } from 'react-redux'
import { openRegister } from '../../../actions/accountAction'
import { useDispatch } from 'react-redux'
import { addComment } from '../../../actions/commentAction'
import { useState } from 'react'
import { useEffect } from 'react'
import { url } from '../../../data'

const InputReview = ({productId}) => {
    const {user} = useSelector(state => state.account);
    const [value, setValue] = useState('');
    const {loading, errors} = useSelector(state => state.comment);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if((!loading && !errors)) {
            setValue('');
        }
    }, [loading, errors])
    
    if(user.email === '') {
        return (
            <div className={styles.container}>
                <p className={styles.text}>Please<button onClick={() => dispatch(openRegister())} className={styles.btn}>Register/Log In</button>to comment</p>
            </div>
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(productId, value));
    }

    return (
        <div className={styles.container}>
            <img src={`${url}/images/users/${user.avata}`} alt={user.avata} className={styles.avata} />
            <form className={styles.form} onSubmit={handleSubmit} >
                <div className={styles.formControl}>
                    <input readOnly={(loading || errors) ? true : false} value={value} onChange={(e) => setValue(e.target.value)} type="text" name="text" id="" className={styles.input} autoComplete="off" placeholder="Type something..." required />
                    <div className={styles.line}></div>
                </div>
                {(loading || errors) ? <button onClick={(e) => e.preventDefault()} type="submit" className={styles.submit}>Loading</button> :
                    <button type="submit" className={styles.submit}>Send</button>
                }
                
            </form>
        </div>
    )
}

export default InputReview
