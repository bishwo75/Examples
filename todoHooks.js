import React, { useState, useEffect } from 'react';
import './App.css';

const Map = () => {   
  const [list, setList] = useState('')
  const [items, setItems] = useState([])

  const addListItem =() => {
    if(!list){
      alert('Please fill your to do item')
    } else {
      setItems([...items, list])
      setList('')
    }
  }
  return (
    <div className='App'> 
    <input type = 'text' 
    placeholder='To do List'
    value={list}
    onChange = {e => setList(e.target.value)}
    />
    <button onClick={addListItem}>Add More</button>
    {items.map((a, index) => {
      return (<li key={index}>{a}</li>)
    })}
    </div>
  )
}
 
export default Map;
