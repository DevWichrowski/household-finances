import React, { Component } from 'react'
import './Categories.scss'
import AddColumn from './AddColumn/AddColumn';

export default class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <h1>Kategorie operacji</h1>
      <div className="categories-container">
      <div className="left-column">
      <AddColumn />
      </div>
      <div className="right-column">
      
      </div>
      </div>
        
      </div>
    )
  }
}
