import React from 'react'
import styles from './ListItem.module.css'
import Item from '../Item/Item'

const ListItem = ({title = '', data}) => {
    return (
        <div>
            {title !== '' && <h1 className={styles.list_item__title} >{title}</h1> }
            <div className={styles.list_item}>
                {data.map(item => {
                    return <Item key={item._id} {...item} ></Item>
                })}
            </div>
        </div>
    )
}

export default ListItem
