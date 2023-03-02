import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    const {items} = useSelector((state) => state.nav);
    const links = items.filter(item => item.type === 'link');
    return (
        <section className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__item}>
                    <h4 className={styles.footer__title}>About Us</h4>
                    <p className={styles.footer__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugit cum, dolores consequatur exercitationem vero officiis quidem laboriosam ea. Eaque cum molestiae ducimus eius eveniet. Ex ipsam similique temporibus dignissimos aperiam, esse voluptatum laudantium laboriosam a nisi odio alias recusandae, nihil eligendi sequi voluptate adipisci, et illo. Aliquid, similique ad.</p>
                    <div className={styles.social_icons}>
                        <a href="/#" className={styles.social_icon} ><i className="fab fa-facebook-square"></i></a>
                        <a href="/#"  className={styles.social_icon} ><i className="fab fa-twitter"></i></a>
                        <a href="/#"  className={styles.social_icon} ><i className="fab fa-google-plus-g"></i></a>
                        <a href="/#"  className={styles.social_icon} ><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className={styles.footer__item}>
                    <h4 className={styles.footer__title}>Get in touch</h4>
                    <p className={styles.footer__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugit cum, dolores consequatur exercitationem vero officiis quidem laboriosam ea. Eaque cum molestiae ducimus eius eveniet. Ex ipsam similique temporibus dignissimos aperiam, esse voluptatum laudantium laboriosam a nisi odio alias recusandae, nihil eligendi sequi voluptate adipisci, et illo. Aliquid, similique ad.</p>
                    <h5 className={styles.footer__title_sm}>Location:</h5>
                    <p className={styles.footer__text}>Thuy Nguyen, Hai Phong, Viet Nam</p>
                    <h5 className={styles.footer__title_sm}>Contact:</h5>
                    <p className={styles.footer__text}>Phone: 0123456789</p>
                    <p className={styles.footer__text}>Email: <a href="/#">arthuria@ehe.com</a></p>
                </div>
                <div className={styles.footer__item}>
                    <h4 className={styles.footer__title}>Quick Links</h4>
                    <ul className={styles.footer__links}>
                        {links.map((link, index) => {
                            return (
                                <li key={index} className={styles.footer__link_item}>
                                    <Link to={link.url} className={styles.footer__link}>{link.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.footer__item}>
                    <h4 className={styles.footer__title}>Sign up for your offers</h4>
                    <p className={styles.footer__text}>By subscribing to our mailing list you will always get latest news and updates from us.</p>
                    <form className={styles.footer__form}>
                        <input className={styles.footer__input} type="email" name="email" id="email-user" autoComplete="off" placeholder="Enter you email..." />
                        <button type="submit" className={styles.footer__submit}><i className="far fa-envelope"></i></button>
                    </form>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                    @2021 Arthuria
            </div>
        </section>
    )
}

export default Footer
