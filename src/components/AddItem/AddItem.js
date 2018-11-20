import React, { Component } from 'react'

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '',
            reason: '',
        }
    }
    onSubmit = e => {
        e.preventDefault()
        const { onAddItem } = this.props
        const { item, reason } = this.state
        onAddItem({item, reason})
    }

    onChange = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Add an item</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Item: </label>
                    <input name="item" onChange={this.onChange} value={this.state.item}/>
                    <label>Reason: </label>
                    <input name="reason" onChange={this.onChange} value={this.state.reason}/>
                    <input type="submit" value="Add Item"/>
                </form>
            </div>
        )
    }
}

export default AddItem