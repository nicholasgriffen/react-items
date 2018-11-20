import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList'
import AddItem from '../AddItem/AddItem'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 3,
      items: [
        { id: 0, item: 'Old AM radio', reason: 'Coast to Coast' },
        { id: 1, item: 'Shovel', reason: 'Find underground telephone wires' },
        { id: 2, item: 'Ham radio', reason: 'Talk to people' }
      ]
    }
  }

  onDeleteItem = ({ id }) => {
    const newItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      ...this.state, 
      items: newItems
    })
  }

  onAddItem = ({ item, reason }) => {
    const newItem = { item, reason, id: this.state.id}
    this.setState({
      ...this.state, 
      items: [...this.state.items, newItem],
      id: this.state.id + 1
    })
  }
  
  render() {
    return (
      <div className="App">
      <AddItem onAddItem={this.onAddItem}/>
       <ItemList items={this.state.items} onDeleteItem={this.onDeleteItem}/>      
       </div>
    )
  }
}

export default App
