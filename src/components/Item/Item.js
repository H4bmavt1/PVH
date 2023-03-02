import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'
import { addProduct } from '../../actions/cardAction'
import { useDispatch } from 'react-redux'
import { openMessage } from '../../actions/messageAction'
import { url } from '../../data'

const Item = ({_id, name, price, imgs, sale = 0}) => {
    const dispatch = useDispatch();
    const img = imgs[0];
    return (
        <div className={styles.item}>
            <Link to={`/e-commerce/product/${_id}`} className={styles.item__link}>
                <span className={styles.item__quickview} >quick view</span>
                {sale > 0 && <div className={styles.item__sale} >-{sale}%</div>}
                <div className={styles.item__img_container}>
                    <img src={`${url}/images/${img}`} alt={name} className={styles.item__img} />
                </div>
            </Link>
            <div className={styles.item__title} >
                <Link className={styles.item__text} to={`/e-commerce/product/${_id}`}>{name}</Link>
                <p className={styles.item__price} >${price}</p>
                <button className={styles.item__icon} onClick={() => {dispatch(addProduct({_id, name, price, img, sale, quantity: 1})); dispatch(openMessage(`${name} has been added to your card`))}} ><i className="fas fa-cart-plus"></i></button>
            </div>
        </div>
    )
}

export default Item
