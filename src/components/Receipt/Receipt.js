import React, { useState } from 'react'
import styles from './Receipt.module.css'
import { Link } from 'react-router-dom';
import { url } from '../../data';

const Receipt = ({data}) => {
    const [isActive, setActive] = useState(false);

    const productQuantity = data.products.reduce((prev, cur) => {
        return prev + cur.quantity;
    }, 0);

    const totalPrice = data.products.reduce((prev, cur) => {
        const price = cur.product.price - (cur.product.price * (cur.product.sale / 100));
        return prev + cur.quantity * price;
    }, 0);

    return (
        <li className={styles.container}>
            <div className={styles.header}>
                <p className={styles.text}><strong>Date: </strong>{new Date(data.date).toDateString()}</p>
                <p className={styles.text}><strong>Products: </strong>{productQuantity}</p>
                <p className={styles.text}><strong>Total: </strong>{totalPrice}</p>
                <p className={styles.text}><strong>Payment: </strong>{data.payment}</p>
                <button onClick={() => setActive(!isActive)} className={`${styles.expand} ${isActive && styles.expand_active}`}><i className="fas fa-chevron-right"></i></button>
            </div>
            <div className={styles.detail} style={{height: isActive && (78.66 + (75.33 * data.products.length) + 'px')}}>
                <p className={styles.textDetail}><strong>Landmark: </strong>{data.user.address.landmark}</p>
                <p className={styles.textDetail}><strong>Town/City: </strong>{data.user.address.city}</p>
                <ul className={styles.list} >
                    {data.products.map((item) => {
                        const {product, quantity} = item;
                        return (
                            <li className={styles.item} key={product._id}>
                                <img src={`${url}/images/${product.imgs[0]}`} alt={product.name} className={styles.img} />
                                <Link to={`/e-commerce/product/${product._id}`} className={styles.link} >{product.name}</Link>
                                <p className={styles.price} >${product.price - (product.price * (product.sale / 100))} {product.sale !== 0 && <span>${product.price}</span> }</p>
                                <p className={styles.quantity}><strong>Quantity: </strong>{quantity}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </li>
    )
}

export default Receipt
