import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SearchTerm.module.css'
import { closeSearch } from '../../actions/navAction'
import Loading from '../Loading/Loading'
import { fetchSearch, setResult } from '../../actions/searchAction'
import Error from '../Error/Error'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { url } from '../../data'

const SearchTerm = () => {
    const {activeSearchTerm} = useSelector((state) => state.nav);
    const {loading, errors, result} = useSelector(state => state.search);
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        if(e.target.value !== "") {
            const text = e.target.value.trim();
            dispatch(fetchSearch(text))
        }
        if(e.target.value === "") {
            dispatch(setResult([]));
        }
    }

    const handleClickLink = () => {
        dispatch(closeSearch());
        setValue('');
        dispatch(setResult([]));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/e-commerce/products?search=${value}`);
        setValue('');
        dispatch(setResult([]));
        dispatch(closeSearch());
    }

    return (
        <div className={`${styles.container} ${activeSearchTerm ? styles.container__active : ''}`}>
            <button onClick={() => dispatch(closeSearch())} className={styles.close}><i className="fas fa-times"></i></button>
            <div className={styles.content}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input} type="text" name='search' id="search-term" autoComplete="off" placeholder="Type something..." onChange={handleChange} value={value} />
                    <button className={styles.submit} type="submit"><i className="fas fa-search"></i></button>
                </form>
                {(loading && value !== '') ? <Loading></Loading> : errors ? <Error>{errors}</Error> : 
                    <ul className={styles.result}>
                        {result.map((item) => {
                            const {_id, name, imgs, price, sale} = item;
                            const finalPrice = price - (price * (sale / 100));
                            return (
                                <li key={_id} className={styles.item} >
                                    <Link to={`/e-commerce/product/${_id}`} onClick={handleClickLink} className={styles.link}>
                                        <img src={`${url}/images/${imgs[0]}`} alt={name} className={styles.img} />
                                        <div className={styles.text}>
                                            <p className={styles.name}>{name}</p>
                                            <p className={styles.price} >${finalPrice} {sale > 0 && <span>${price}</span>}</p>
                                        </div>
                                    </Link>
                                    <button className={styles.icon} ><i className="fas fa-cart-plus"></i></button>
                                </li>
                            )
                        })}
                        {result.length > 0 &&
                            <li className={styles.item}>
                                <p onClick={handleSubmit} className={styles.viewAll}>View All</p>
                            </li>
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default SearchTerm
