import React, { useEffect, useState } from 'react'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Container from '../components/Container/Container';
import styles from '../components/CheckOut/CheckOut.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment, decrement, clearCard } from '../actions/cardAction';
import { openRegister, openUpdateInfo } from '../actions/accountAction';
import { createReceipt, setReceipt } from '../actions/receiptAction';
import { openMessage } from '../actions/messageAction';
import { url } from '../data';

const CheckOut = () => {
    const {total, products} = useSelector(state => state.card);
    const {errors, loading, receipt} = useSelector(state => state.receipt);
    const {user} = useSelector(state => state.account);
    const [productQuantity, setProductQuantity] = useState(0);
    const [state, setState] = useState(0);
    const [statePayment, setStatePayment] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const quantity = products.reduce((prev, cur) => {
            return prev + cur.quantity;
        }, 0);
        setProductQuantity(quantity);
    }, [products])

    useEffect(() => {
        if(loading) {
            dispatch(openMessage('handing...'));
        } else if(errors !== null) {
            dispatch(openMessage(`${errors}`));
        } else if(receipt._id !== ''){
            dispatch(openMessage('We have already had you order and will comfirm with your email address'));
            dispatch(clearCard());
            dispatch(setReceipt({
                _id: '',
                user: '',
                products: [],
            }))
        }
    }, [dispatch, loading, errors, receipt]);

    const handleMakePayment = () => {
        const formattedProducts = products.map(product => {
            return {product: product._id, quantity: product.quantity};
        })
        const data = {
            user: user._id,
            products: formattedProducts,
            payment: statePayment === 0 ? 'cod' : 'momo'
        }
        dispatch(createReceipt(data));
    }

    const handleClickDelivery = () => {
        if(products.length < 1) {
            dispatch(openMessage('Your card is empty :(('));
        } else if(user.address !== '' && user.phone) {
            setState(1);
        } else {
            dispatch(openMessage('Please fill your address and phone number to continue'));
            dispatch(openUpdateInfo());
        }
    }

    return (
        <Container>
            <ScrollToTop></ScrollToTop>
            <h1 className={styles.title}>Checkout</h1>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <h3 className={styles.subTitle}>Your shopping cart contains: <span className={styles.quantity}>{productQuantity} Products</span></h3>
                    <p className={styles.total}><span>Total: </span> ${total}</p>
                    <ul className={styles.list}>
                        {products.length > 0 && 
                            products.map(product => {
                                const price = product.price - (product.price * (product.sale / 100));
                                return (
                                    <li key={product._id} className={styles.item}>
                                        <img src={`${url}/images/${product.img}`} alt={product.name} className={styles.img} />
                                        <Link to={`/e-commerce/product/${product._id}`} className={styles.name} >{product.name}</Link>
                                        <p className={styles.price} >{price} {product.sale > 0 && <span>{product.price}</span>}</p>
                                        <div className={styles.control}>
                                            <button onClick={() => dispatch(increment(product._id))} className={styles.btn}>+</button>
                                            <p className={styles.quantity}>{product.quantity}</p>
                                            <button onClick={() => dispatch(decrement(product._id))} className={styles.btn}>-</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
                {user.email !== '' ? 
                <div className={styles.containerRight}>
                    <div className={`${styles.slide} ${state === 0 ? styles.slide_active : styles.slide_prev}`}>
                        <h3 className={styles.subTitle}>Your details <button onClick={() => dispatch(openUpdateInfo())} className={styles.updateDetail}>Update Your Detail</button></h3>
                        <div action="" className={styles.form}>
                            <p className={styles.info}><strong>Name: </strong>{user.name}</p>
                            <p className={styles.info}><strong>Your email: </strong>{user.email}</p>
                            <p className={styles.info}><strong>Phone number: </strong>{user.phone ? user.phone : 'NaN'}</p>
                            <p className={styles.info}><strong>Landmark: </strong>{user.address ? user.address.landmark : 'NaN'}</p>
                            <p className={styles.info}><strong>City: </strong>{user.address ? user.address.city : 'NaN'}</p>
                            <button onClick={handleClickDelivery} className={styles.submit}>Delivery to this address</button>
                        </div>
                    </div>
                    <div className={`${styles.slide} ${state === 1 ? styles.slide_active : styles.slide_next}`}>
                        <h3 className={styles.subTitle}>Payment</h3>
                        <div className={styles.controller}>
                            <button onClick={() => setStatePayment(0)} className={`${styles.paymentBtn} ${statePayment === 0 ? styles.paymentBtn_active : ''}`}>CASH ON DELIVERY</button>
                            <button onClick={() => setStatePayment(1)} className={`${styles.paymentBtn} ${statePayment === 1 ? styles.paymentBtn_active : ''}`}>MOMO</button>
                            <div className={styles.line} style={{left: statePayment === 0 ? 0 : '50%'}}></div>
                        </div>
                        <div className={styles.payment}>
                            <div className={`${styles.paymentSlide} ${statePayment === 0 ? styles.paymentSlide_active : styles.paymentSlide_prev}`}>
                                <p className={styles.paymentText}>Pay with cash when receiving product</p>
                                <button onClick={handleMakePayment} className={styles.mkPayment}>Make a payment</button>
                            </div>
                            <div className={`${styles.paymentSlide} ${statePayment === 1 ? styles.paymentSlide_active : styles.paymentSlide_next}`}>
                                <p className={styles.paymentText}>Pay with <a href="https://nhantien.momo.vn/JYb5erCIEJC?fbclid=IwAR28Li2c9V9UgPxqsnegYMKV6oW7a_QMTj99V8wRTy5Y0tt-lCdwn1bBw24" target="_blank" rel="noreferrer" >Momo</a> then click</p>
                                <button onClick={handleMakePayment} className={styles.mkPayment}>Make a payment</button>
                            </div>
                        </div>
                        <button onClick={() => setState(0)} className={styles.back} ><i className="fas fa-arrow-left"></i> Back</button>
                    </div>
                </div>
                :
                <div className={styles.containerRight}>
                    <h3 className={styles.subTitle}>Please sign in to continue</h3>
                    <button onClick={() => dispatch(openRegister())} className={styles.submit}>Register / Sign in</button>
                </div>
                }
            </div>
        </Container>
    )
}

export default CheckOut
