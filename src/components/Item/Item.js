import React, { Component } from 'react'

class Item extends Component {
    render() {
        const { item } = this.props 
        return (
            <li><button>Delete</button>{item.item} {item.reason}</li>
        )
    }
} 
export default Item