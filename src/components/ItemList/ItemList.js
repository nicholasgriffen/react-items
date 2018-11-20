import React from 'react'
import Item from '../Item/Item'
const ItemList = ({ items, onDeleteItem }) => (
        <ul>
            { items.map((item, index) => <Item 
            id={item.id} 
            item={item} 
            key={index}
            onDeleteItem={onDeleteItem}
            />) }
        </ul>
    )

export default ItemList