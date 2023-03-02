import React, { useEffect } from 'react'
import styles from './Card.module.css'
import { closeCard } from '../../actions/cardAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProducts, increment, decrement, getTotal } from '../../actions/cardAction'
import { url } from '../../data'

const Card = () => {
    const dispatch = useDispatch();
    const {isOpen, products, total} = useSelector((state) => state.card);

    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch])

    useEffect(() => {
        dispatch(getTotal());
    }, [dispatch, products])

    return (
        <div className={`${styles.container} ${isOpen ? styles.container__active : ''}`}>
            <div className={styles.header}>
                <button onClick={() => dispatch(closeCard())} className={styles.close}><i className="fas fa-times"></i></button>
                <Link to="/e-commerce/checkout" onClick={() => dispatch(closeCard())} className={styles.checkout} >Check Out Now</Link>
                <p className={styles.total}><span>Total: </span> ${total}</p>
            </div>
            <div className={styles.list_container}>
                {products.length > 0 && 
                    <ul className={styles.list}>
                        {products.map(product => {
                            return <li key={product._id} className={styles.item}>
                                <img src={`${url}/images/${product.img}`} alt={product.name} className={styles.img} />
                                <Link to={`/e-commerce/product/${product._id}`} className={styles.link} >{product.name}</Link>
                                <p className={styles.price} >${product.price - (product.price * (product.sale / 100))} {product.sale !== 0 && <span>${product.price}</span> }</p>
                                <div className={styles.control}>
                                    <button onClick={() => dispatch(increment(product._id))} className={styles.btn}>+</button>
                                    <p className={styles.quantity}>{product.quantity}</p>
                                    <button onClick={() => dispatch(decrement(product._id))} className={styles.btn}>-</button>
                                </div>
                            </li>
                        })}

                    </ul>
                }
            </div>
        </div>
    )
}

export default Card
