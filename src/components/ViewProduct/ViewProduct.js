import React from 'react'
import styles from './ViewProduct.module.css'
import Container from '../Container/Container'
import { useState } from 'react'
import { useRef } from 'react'
import { openMessage } from '../../actions/messageAction'
import { addProduct } from '../../actions/cardAction'
import { useDispatch } from 'react-redux'
import { url } from '../../data'

const ViewProduct = ({_id, name, imgs = [], price, sale, cpu, ram, screen, gpu, rom, size, battery}) => {
    const [value, setValue] = useState(0);
    const priceAfterSale = price - price * (sale/100);
    const imgWapper = useRef(null);
    const dispatch = useDispatch();

    const handleZoom = (e) => {
        const imgNodes = document.querySelectorAll(`.${styles.mainImg__img}`);
        imgNodes.forEach(node => {
            node.style.transformOrigin = `${e.clientX - imgWapper.current.getBoundingClientRect().left}px ${e.clientY - imgWapper.current.getBoundingClientRect().top}px`;
        })
    }

    return (
        <Container>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.container}>
                <div className={styles.imgField}>
                    <div className={styles.mainImg} onMouseMove={(e) => handleZoom(e)} ref={imgWapper}>
                        {imgs.map((image, index) => {
                            let style = styles.slide;
                            if(index === value) {
                                style += ' ' + styles.slide__active;
                            } else if(index === value - 1 || (value === 0 && index === imgs.length - 1)) {
                                style += ' ' + styles.slide__prev;
                            } else if(index === value + 1 || (value === imgs.length - 1 && index === 0)) {
                                style += ' ' + styles.slide__next;
                            }
                            return (
                                <div key={index} className={style}>
                                    <img className={styles.mainImg__img} src={`${url}/images/${image}`} alt={name} />
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.controllerImg}>
                        <button className={`${styles.controllerImg_btn}`} onClick={() => value - 1 < 0 ? setValue(imgs.length - 1) : setValue(value - 1)}><i className="fas fa-chevron-left"></i></button>
                        <div className={styles.controllerImg_list}>
                            {imgs.map((img, index) => {
                                let style = styles.controllerImg_point;
                                if(index === value) {
                                    style += ' ' + styles.controllerImg_point_active;
                                }
                                return <button onClick={() => setValue(index)} className={style} key={index} ></button>
                            })}
                        </div>
                        <button className={`${styles.controllerImg_btn}`} onClick={() => value + 1 > imgs.length - 1 ? setValue(0) : setValue(value + 1)}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className={styles.infoFiled}>
                        <p className={styles.price}>${priceAfterSale} {sale > 0 && <span>${price}</span>}</p>
                        <button className={styles.addbtn} onClick={() => {dispatch(addProduct({_id, name, price, img: imgs[0], sale, quantity: 1})); dispatch(openMessage(`${name} has been added to your card`))}}>ADD TO CARD</button>
                        <div className={styles.share}>
                            <p className={styles.share_title}>Share on: </p>
                            <ul className={styles.share_list}>
                                <li className={styles.share_item}>
                                    <a href="/#" className={styles.social_icon} ><i className="fab fa-facebook-square"></i></a>
                                </li>
                                <li className={styles.share_item}>
                                    <a href="/#"  className={styles.social_icon} ><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className={styles.share_item}>
                                    <a href="/#"  className={styles.social_icon} ><i className="fab fa-google-plus-g"></i></a>
                                </li>
                                <li className={styles.share_item}>
                                    <a href="/#"  className={styles.social_icon} ><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>                    
                        </div>
                </div>
                <div className={styles.detail}>
                        <table className={styles.table}>
                            <caption className={styles.caption}>Detail</caption>
                            <colgroup>
                                <col className={styles.col_title}/>
                                <col className={styles.col_name}/>
                            </colgroup>
                            <tbody className={styles.tbody}>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>CPU</td>
                                    <td className={styles.td}>{cpu?.name} ({cpu?.base_frequency}Ghz - {cpu?.max_frequency}Ghz)</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>RAM</td>
                                    <td className={styles.td}>{ram?.size} GB, {ram?.type}, {ram?.bus_speed} Mhz</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>GPU</td>
                                    <td className={styles.td}>{gpu}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>Screen</td>
                                    <td className={styles.td}>{screen?.size} inches, {screen?.resolution?.x} x {screen?.resolution?.y} Pixel, {screen?.frequency} Hz</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>Storage</td>
                                    <td className={styles.td}>{rom?.type} {rom?.size} GB</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>Size (mm)</td>
                                    <td className={styles.td}>{size?.length} x {size?.width} x {size?.thickness}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>Battery (kwH)</td>
                                    <td className={styles.td}>{battery}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </Container>
    )
}

export default ViewProduct
