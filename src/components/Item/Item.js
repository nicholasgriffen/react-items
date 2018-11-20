import React, { Component } from 'react'

class Item extends Component {
    onDeleteClick = e => {
        e.preventDefault()
        const { id, onDeleteItem } = this.props
        onDeleteItem({ id })
    }

    render() {
        const { item } = this.props 
        return (
            <li><button onClick={this.onDeleteClick}>Delete</button>{item.item} {item.reason}</li>
        )
    }
} 

export default Item