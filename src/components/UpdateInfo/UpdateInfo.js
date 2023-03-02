import React, { useState, useRef } from 'react'
import styles from './UpdateInfo.module.css'
import Input from '../Input/Input'
import { useDispatch } from 'react-redux'
import { closeUpdateInfo, changeInfo } from '../../actions/accountAction'
import { useSelector } from 'react-redux'
import { url } from '../../data'

const UpdateInfo = () => {
    const {errors, loading, user} = useSelector(state => state.account);
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone || '');
    const [landmark, setLandmark] = useState(user.address ? user.address.landmark : '');
    const [city, setCity] = useState(user.address ? user.address.city : '');
    const outline = useRef(null);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('landmark', landmark);
        formData.append('city', city);
        formData.append('avata', file);
        dispatch(changeInfo(formData));
    }

    const handleClickOutline = (e) => {
        if(e.target === outline.current) {
            dispatch(closeUpdateInfo());
        }
    }

    const handleChangeFile = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <div className={styles.bgc} ref={outline} onClick={handleClickOutline}>
            <div className={styles.container}>
                <button onClick={() => dispatch(closeUpdateInfo())} className={styles.close}><i className="fas fa-times"></i></button>
                <h2 className={styles.title} >Update Info</h2>
                <form action="" noValidate className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.changeAvata}>
                        <img src={`${url}/images/users/${user.avata}`} alt={user.name} className={styles.avata} />
                        <input onChange={handleChangeFile} type="file" name="avata" id="update-avata" className={styles.file} />
                    </div>
                    <Input errors={errors} checks={['required']} title='User name' name='name' id='update-name' type='text' value={name} onChangeInput={(e) => setName(e.target.value)} ></Input>
                    <Input errors={errors} checks={['phone']} title='Phone number' name='phone' id='update-phone' type='text' value={phone} onChangeInput={(e) => setPhone(e.target.value)} ></Input>
                    <Input errors={errors} title='Landmark' name='landmark' id='update-landmark' type='text' value={landmark} onChangeInput={(e) => setLandmark(e.target.value)} ></Input>
                    <Input errors={errors} title='City' name='city' id='update-city' type='text' value={city} onChangeInput={(e) => setCity(e.target.value)} ></Input>
                    {loading ? <button onClick={(e) => e.preventDefault()} className={styles.loading}>Loading...</button> : <button type='submit' className={styles.submit}>Submit</button>} 
                </form>
            </div>
        </div>
    )
}

export default UpdateInfo
