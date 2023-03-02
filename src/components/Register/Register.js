import React, { useEffect, useRef, useState } from 'react'
import styles from './Register.module.css'
import Input from '../Input/Input'
import { closeRegister, openSignIn } from '../../actions/accountAction'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../actions/accountAction'
import { useSelector } from 'react-redux'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const outline = useRef(null);

    const {errors, loading, user} = useSelector(state => state.account);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            password,
            confirmPassword
        };
        dispatch(fetchUser(data));
    }

    useEffect(() => {
        if(user.email !== '') {
            dispatch(closeRegister());
        }
    }, [user, dispatch])

    const handleClickOutline = (e) => {
        if(e.target === outline.current) {
            dispatch(closeRegister());
        }
    }

    const handleClickSignIn = () => {
        dispatch(closeRegister());
        dispatch(openSignIn());
    }

    return (
        <div className={styles.bgc} ref={outline} onClick={handleClickOutline}>
            <div className={styles.container}>
                <button onClick={() => dispatch(closeRegister())} className={styles.close}><i className="fas fa-times"></i></button>
                <h2 className={styles.title} >Register</h2>
                <form action="" noValidate className={styles.form} onSubmit={handleSubmit}>
                    <Input errors={errors} checks={['required']} title='User name' name='name' id='register-name' type='text' value={name} onChangeInput={(e) => setName(e.target.value)} ></Input>
                    <Input errors={errors} checks={['required', 'email']} title='Email' name='email' id='register-email' type='text' value={email} onChangeInput={(e) => setEmail(e.target.value)} ></Input>
                    <Input errors={errors} checks={['required', 'password']} title='Password' name='password' id='register-password' type='password' value={password} onChangeInput={(e) => setPassword(e.target.value)} ></Input>
                    <Input errors={errors} checks={['required', 'confirmPassword']} confirmPassword={password} title='Confirm Password' name='confirmPassword' id='register-confirm-password' type='password' value={confirmPassword} onChangeInput={(e) => setConfirmPassword(e.target.value)} ></Input>
                    {loading ? <button onClick={(e) => e.preventDefault()} className={styles.loading}>Loading...</button> : <button type='submit' className={styles.submit}>Submit</button>} 
                </form>
                <div className={styles.signInField}>
                    <p className={styles.text}>You already have an account?</p>
                    <button className={styles.signIn} onClick={handleClickSignIn} >Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Register
