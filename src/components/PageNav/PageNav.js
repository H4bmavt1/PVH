import React, { useEffect, useState } from 'react'
import styles from './PageNav.module.css'

const PageNav = ({number, onChangePage, data}) => {
    const {page} = data;
    const [pages, setPages] = useState([]);
    const [value, setValue] = useState(page);

    useEffect(() => {
        const newPages = [value];
        if(value - 1 > 0) {
            newPages.unshift(value - 1);
        }
        if(value - 2 > 0) {
            newPages.unshift(value - 2);
        }
        if(value + 1 <= number) {
            newPages.push(value + 1);
        }
        if(value + 2 <= number) {
            newPages.push(value + 2);
        }
        setPages(newPages);
    }, [number, value])

    const handleChange = (num) => {
        setValue(num);
        onChangePage(num);
    }

    if(number === 0) {
        return (
            <h3 style={{textAlign: 'center'}}>There is no result</h3>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.control}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button onClick={() => handleChange(value - 1)} className={styles.page} style={{display: value === 1 ? 'none' : 'block'}} ><i className="fas fa-chevron-left"></i></button>
                    </li>
                    {pages.map((page) => {
                        let style = styles.page;
                        if(page === value) {
                            style += ' ' + styles.page_active;
                        }
                        return <li className={styles.item} key={page}>
                            <button onClick={() => handleChange(page)} className={style}>{page}</button>
                        </li>
                    })}
                    <li className={styles.item}>
                        <button onClick={() => handleChange(value + 1)} className={styles.page} style={{display: value === number ? 'none' : 'block'}} ><i className="fas fa-chevron-right"></i></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PageNav
