import React from 'react'
import styles from './UserInfo.module.css'
import Container from '../Container/Container'
import { openUpdateInfo } from '../../actions/accountAction'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { url } from '../../data'
import { openFormProduct} from '../../actions/adminAction';

const UserInfo = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.account);
    return (
        <Container>
            <h1 className={styles.title}>Info</h1>
            <div className={styles.container}>
                <img className={styles.avata} src={`${url}/images/users/${user.avata}`} alt={user.name} />
                <div className={styles.info}>
                    <p className={styles.label}><strong>Name:</strong> {user.name}</p>
                    <p className={styles.label}><strong>Email:</strong> {user.email}</p>
                    <p className={styles.label}><strong>Phone number:</strong> {user.phone ? user.phone : 'NaN'}</p>
                    <p className={styles.labelTitle}><strong>Address:</strong></p>
                    <p className={styles.label}><strong>Landmark:</strong> {user.address ? user.address.landmark : 'NaN'}</p>
                    <p className={styles.label}><strong>Town/City:</strong> {user.address ? user.address.city : 'Nan'}</p>
                    <button onClick={() => dispatch(openUpdateInfo())} className={styles.changeInfo}>Change Info</button>
                    {user.isAdmin && <button onClick={() => dispatch(openFormProduct())} style={{marginLeft: '5px'}} className={styles.changeInfo} >Add Product</button>}
                </div>
            </div>
        </Container>
    )
}

export default UserInfo
