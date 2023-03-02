import React, { useEffect, useState } from 'react'
import styles from './Selector.module.css'
import { useLocation } from 'react-router';

const Selector = ({manufacturers, classes, onFindProductList}) => {
    const query = new URLSearchParams(useLocation().search);
    const defaultManufacturer = query.get('manufacturer') ? query.get('manufacturer') : 'all';
    const defaultClasses = query.get('classes') ? query.get('classes') : 'all';
    const defaultSearch = query.get('search') ? query.get('search') : '';

    const [manufacturer, setManufacturer] = useState(defaultManufacturer);
    const [productClass, setProductClass] = useState(defaultClasses);
    const [search, setSearch] = useState(defaultSearch);
    const [sort, setSort] = useState('name-asc');
    const [price, setPrice] = useState('all');

    useEffect(() => {
        setManufacturer(defaultManufacturer);
        setProductClass(defaultClasses);
        setSearch(defaultSearch);
    }, [defaultManufacturer, defaultSearch, defaultClasses])

    const handleSubmit = (e) => {
        e.preventDefault();
        onFindProductList(manufacturer, productClass, price, search, sort);
    }
    return (
        <div className={styles.container}>
            <form action="" className={styles.form} onSubmit={handleSubmit} >
                <div className={styles.form_control}> 
                    <label htmlFor="manufacturer" className={styles.label}>Manufacturer</label>
                    <select className={styles.input} name="manufacturer" id="manufacturer" onChange={(e) => setManufacturer(e.target.value)} value={manufacturer}>
                        <option value="all">All</option>
                        {manufacturers.map((manufacturer, index) => {
                            return <option value={manufacturer._id} key={index}>{manufacturer.name}</option>
                        })}
                    </select>
                </div>
                <div className={styles.form_control}> 
                    <label htmlFor="class" className={styles.label}>Class</label>
                    <select className={styles.input} name="class" id="class" onChange={(e) => setProductClass(e.target.value)} value={productClass}>
                        <option value="all">All</option>
                        {classes.map((item, index) => {
                            return <option value={item._id} key={index}>{item.name}</option>
                        })}
                    </select>
                </div>
                <div className={styles.form_control}> 
                    <label htmlFor="price" className={styles.label}>Price</label>
                    <select className={styles.input} name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price}>
                        <option value="all">All</option>
                        <option value="high">&gt; $1000</option>
                        <option value="low">&le; $1000</option>
                        
                    </select>
                </div>
                <div className={styles.form_control}> 
                    <label htmlFor="sort" className={styles.label}>Sort by</label>
                    <select className={styles.input} name="sort" id="sort" onChange={(e) => setSort(e.target.value)} value={sort}>
                        <option value="name-asc">Name Asc</option>
                        <option value="name-desc">Name Desc</option>
                        <option value="price-asc">Price Asc</option>
                        <option value="price-desc">Price Desc</option>
                    </select>
                </div>
                <div className={styles.form_control}> 
                    <label htmlFor="search" className={styles.label}>Key</label>
                    <input className={styles.input} name="search" id="search" onChange={(e) => setSearch(e.target.value)} value={search}/>
                </div>
                <button type="submit" className={styles.submit}>Find</button>
            </form>
        </div>
    )
}

export default Selector
