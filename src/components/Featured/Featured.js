import React from 'react'
import styles from './Featured.module.css'
import Container from '../Container/Container'
import Item from '../Item/Item'
import { useState } from 'react'

const Featured = ({title = "", data}) => {
    const [value, setValue] = useState(0);
    const [dragValue, setDragValue] = useState(0);

    const getData = (number) => {
        const length = data.length;
        const formattedData = [];
        let i = 0;
        while(i < length) {
            const list = [];
            let j = 0;
            while(j + i < length && j < number) {
                list.push(data[i + j]);
                j++;
            }
            formattedData.push(list);
            i += j;
        }
        return formattedData;
    }
    const getDataSize = () => {
        if(window.innerWidth > 991) {
            return getData(4);
        }
        if(window.innerWidth > 575) {
            return getData(2);
        }
        return getData(1);
    }

    const formattedData = [...getDataSize()];

    const handleTouchEnter = (e) => {
        setDragValue(e.changedTouches[0].clientX);
    }

    const handleTouchEnd = (e) => {
        if(Math.abs(e.changedTouches[0].clientX - dragValue) > 20) {
            if(e.changedTouches[0].clientX < dragValue) {
                if(value + 1 > formattedData.length - 1) {
                    setValue(0);
                } else {
                    setValue(value + 1);
                }
                setDragValue(0);
            } else {
                if(value - 1 < 0) {
                    setValue(formattedData.length - 1);
                } else {
                    setValue(value - 1);
                }
                setDragValue(0);
            }
        } else {
            setDragValue(0)
        }
    }

    const handleDragEnter = (e) => {
        setDragValue(e.clientX);
    }

    const handleDragEnd = (e) => {
        if(e.clientX < dragValue) {
            if(value + 1 > formattedData.length - 1) {
                setValue(0);
            } else {
                setValue(value + 1);
            }
            setDragValue(0);
        } else {
            if(value - 1 < 0) {
                setValue(formattedData.length - 1);
            } else {
                setValue(value - 1);
            }
            setDragValue(0);
        }
    }

    return (
        <Container>
            {title !== "" && <h2 className={styles.title}>{title}</h2> }
            <div className={styles.container} onDragEnter={handleDragEnter} onDragEnd={handleDragEnd} onTouchStart={handleTouchEnter} onTouchEnd={handleTouchEnd}>
                {formattedData.map((listData, indexListData) => {
                    let style = styles.list;
                    if(value === indexListData) {
                        style += ' ' + styles.list__active;
                    } else if(indexListData === value - 1 || (value === 0 && indexListData === formattedData.length - 1)) {
                        style += ' ' + styles.list__prev;
                    } else if(indexListData === value + 1 || (value === formattedData.length - 1 && indexListData === 0)) {
                        style += ' ' + styles.list__next;
                    }
                    return (
                        <div key={indexListData} className={style}>
                            {listData.map((item, index) => {
                                return (
                                    <Item key={index} {...item} ></Item>
                                )
                            })}
                        </div>
                    )
                })}
                
                <div className={styles.control}>
                    <button onClick={() => value - 1 < 0 ? setValue(formattedData.length - 1) : setValue(value - 1)} className={`${styles.btn} ${styles.btn__prev}`}><i className="fas fa-chevron-left"></i></button>
                    {formattedData.map((list, index) => {
                        let style = styles.btn__circle;
                        if(index === value) {
                            style += ' ' + styles.btn__circle_active;
                        }
                        return <button onClick={() => setValue(index)} key={index} className={style}></button>
                    })}
                    <button onClick={() =>  value + 1 > formattedData.length - 1 ? setValue(0) : setValue(value + 1)} className={`${styles.btn} ${styles.btn__next}`}><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </Container>
    )
}

export default Featured
