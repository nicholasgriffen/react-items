import React from 'react'
import Item from '../Item/Item'
const ItemList = ({ items }) => (
        <ul>
            { items.map((item, index) => <Item 
            id={item.id} 
            item={item} 
            key={index}
            />) }
        </ul>
    )

export default ItemList