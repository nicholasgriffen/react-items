import React, { Component } from 'react'
import ItemList from './ItemList/ItemList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, item: 'Old AM radio', reason: 'Coast to Coast' },
        { id: 1, item: 'Shovel', reason: 'Find underground telephone wires' },
        { id: 2, item: 'Ham radio', reason: 'Talk to people' }
      ]
    }
  }

  render() {
    return (
      <div className="App">
       <ItemList />      
       </div>
    )
  }
}

export default App
