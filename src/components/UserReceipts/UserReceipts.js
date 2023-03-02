import React, { useEffect } from 'react'
import styles from './UserReceipts.module.css'
import Container from '../Container/Container'
import { useDispatch } from 'react-redux'
import { fetchReceipts } from '../../actions/receiptListAction'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import Receipt from '../Receipt/Receipt'

const UserReceipts = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.account);
    const {loading, errors, receipts} = useSelector(state => state.receiptList);

    useEffect(() => {
        dispatch(fetchReceipts(user._id));
    }, [dispatch, user])

    if(loading) {
        return <Loading></Loading>
    }

    if(errors) {
        return <Error>{errors}</Error>
    }
    return (
        <Container>
            <div className={styles.container}>
                <h2 className={styles.title} >Your orders</h2>
                <ul className={styles.list}>
                    {receipts.map(receipt => {
                        return <Receipt key={receipt._id} data={receipt}></Receipt>
                    })}
                </ul>
            </div>
        </Container>
    )
}

export default UserReceipts
