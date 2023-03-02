import React, { useEffect, useRef, useState } from 'react'
import styles from './SignIn.module.css'
import Input from '../Input/Input'
import { closeSignIn, signIn } from '../../actions/accountAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const SignIn = () => {
    const outline = useRef(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {errors, loading, user} = useSelector(state => state.account);

    useEffect(() => {
        if(user.email !== '') {
            dispatch(closeSignIn());
        }
    }, [user, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        dispatch(signIn(data));
    }

    const handleClickOutline = (e) => {
        if(e.target === outline.current) {
            dispatch(closeSignIn());
        }
    }


    return (
        <div className={styles.bgc} ref={outline} onClick={handleClickOutline}>
            <div className={styles.container}>
                <button onClick={() => dispatch(closeSignIn())} className={styles.close}><i className="fas fa-times"></i></button>
                <h2 className={styles.title} >Sign In</h2>
                <form action="" noValidate className={styles.form} onSubmit={handleSubmit}>
                    <Input errors={errors} checks={['required', 'email']} title='Email' name='email' id='signin-email' type='text' value={email} onChangeInput={(e) => setEmail(e.target.value)} ></Input>
                    <Input errors={errors} checks={['required', 'password']} title='Password' name='password' id='signin-password' type='password' value={password} onChangeInput={(e) => setPassword(e.target.value)} ></Input>
                    {loading ? <button onClick={(e) => e.preventDefault()} className={styles.loading}>Loading...</button> : <button type='submit' className={styles.submit}>Submit</button>} 
                </form>
            </div>
        </div>
    )
}

export default SignIn
