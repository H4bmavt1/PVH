import React from 'react'
import styles from './Nav.module.css'
import {openNav, closeNav, openSearch} from '../../actions/navAction';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { openCard } from '../../actions/cardAction';
import { fetchManufacturers } from '../../actions/navAction';
import { openRegister } from '../../actions/accountAction';
import { getInforUser, logOut } from '../../actions/accountAction';
import { url } from '../../data';

const Nav = () => {
    const {items, activeNav, errors} = useSelector((state) => state.nav);
    const {products} = useSelector((state) => state.card);
    const [activeSubmenu, setActiveSubmenu] = useState('');
    const dispatch = useDispatch();
    const nav = useRef(null);
    const navContainer = useRef(null);
    const {user} = useSelector(state => state.account);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchManufacturers());
        dispatch(getInforUser());
    }, [dispatch]);

    useEffect(() => {
        const scrollFunc = () => {
            if(window.innerWidth > 767) {
                if(window.scrollY > 94) {
                    nav.current.classList.add(styles.nav__list_scroll);
                    navContainer.current.style.paddingBottom = '56.67px';
                } else {
                    nav.current.classList.remove(styles.nav__list_scroll);
                    navContainer.current.style.paddingBottom = '0px';
                }
            } else {
                nav.current.classList.remove(styles.nav__list_scroll);
                navContainer.current.style.paddingBottom = '0px';
            }
        }
        document.addEventListener('scroll', scrollFunc);
        return () => {
            document.removeEventListener('scroll', scrollFunc);
        }
    }, [])

    const handleOpenNav = () => {
        if(activeNav) {
            dispatch(closeNav());
            setActiveSubmenu('');
        } else {
            dispatch(openNav());
        }
    }

    const handleLinkClick = () => {
        if(window.innerWidth <= 767) {
            dispatch(closeNav());
            setActiveSubmenu('');
        }
    }

    const closeMySubmenu = () => {
        setActiveSubmenu('');
    }

    const handleClickUserBtn = () => {
        if(user.email === '') {
            dispatch(openRegister())
        } else {

        }
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container} ref={navContainer} >
                <div className={styles.nav__top}>
                    <button onClick={handleOpenNav} className={`${styles.nav__btn} ${styles.nav__btn_toggle}`}><i className="fas fa-bars"></i></button>
                    <h1 className={styles.nav__logo}><Link to="/e-commerce">Laptop Shop</Link></h1>
                    <div className={styles.contact}>
                        <p className={styles.contact__title}>Need Help</p>
                        <p className={styles.contact__phone}>
                            <span className={styles.contact__phone_icon}><i className="fas fa-phone"></i></span>
                            Call 12345678099
                        </p>
                    </div>
                    <div className={styles.nav__btnGroup} >
                        <div className={styles.accountContainer}>
                            <button onClick={handleClickUserBtn} className={styles.nav__btn} >
                                {user.email === '' ? <i className="fas fa-user"></i> : <img className={styles.avata} src={`${url}/images/users/${user.avata}`} alt={user.name} /> }
                            </button>
                            {user.email !== '' &&
                                <ul className={styles.accountList}>
                                    <li className={styles.accountItem}>
                                        <Link to='/e-commerce/info' className={styles.accountBtn} >Info</Link>
                                    </li>
                                    <li className={styles.accountItem}>
                                        <button onClick={() => {dispatch(logOut()); history.push('/e-commerce')}} className={styles.accountBtn} >Log out</button>
                                    </li>
                                </ul>
                            }
                        </div>
                        <button onClick={() => dispatch(openCard())} className={`${styles.nav__btn} ${styles.nav__btn_card}`} >
                            <span className={styles.nav__card_text}>My Card</span>
                            <i className="fas fa-shopping-cart"></i>
                            <span className={styles.nav__number} >{products.length}</span>
                        </button>
                    </div>
                </div>
                <ul className={`${styles.nav__list} ${activeNav ? styles.nav__list_active : ''}`}  ref={nav}>
                    {items.map((item, index) => {
                        const style = {};
                        if(item.title === activeSubmenu) {
                            style.backgroundColor = '#000';
                            style.color = '#fff';
                        }
                        return  (
                            <li key={index} className={styles.nav__item}>
                                {item.type === 'link' ? <Link to={item.url} onClick={handleLinkClick} className={styles.nav__link}>{item.title}</Link> : <a href={item.url} onClick={(e) => e.preventDefault()} style={style} onMouseOver={() => setActiveSubmenu(item.title)} onMouseLeave={(e) => closeMySubmenu(e)} className={styles.nav__link}>{item.title} <i className={`fas fa-chevron-down ${styles.nav__icon}`}></i></a> }
                                {item.links &&
                                    <ul onMouseEnter={() => setActiveSubmenu(item.title)} onMouseLeave={() => setActiveSubmenu('')} className={styles.nav__sub} style={activeSubmenu === item.title ? {height: item.links.length * 36.67 + 'px'} : {}}>
                                        {errors && <p>{errors}</p> }
                                        {item.links.map((link, indexLink) => {
                                            return (
                                                <li key={indexLink} className={styles.nav__sub_item} >
                                                    {item.title === 'Manufacturers' && <Link onClick={handleLinkClick} className={styles.nav__sub_link} to={`/e-commerce/products?manufacturer=${link._id}`}>{link.name}</Link>}
                                                    {item.title === 'Classes' && <Link onClick={handleLinkClick} className={styles.nav__sub_link} to={`/e-commerce/products?classes=${link._id}`}>{link.name}</Link>}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                }
                            </li>
                        )
                    })}
                    <li className={styles.nav__item}>
                        <a href='/' onClick={(e) => {e.preventDefault(); dispatch(openSearch())}} className={styles.nav__link}>
                            {activeNav ? <span>Search</span> : <i className="fas fa-search"></i>}                
                        </a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Nav
