import React, { useState, useEffect } from 'react';
// import Data from './mockData.json'
import './App.css';
import axios from 'axios'


const MapDelete = () => {     
  const [name, setName] = useState({email:'', password:''})
  const [error, setError]= useState('')
  
  const onLogIn = () => {
    if(name.email==="bishwo75@gmail.com" && name.password==='123456'){
      alert('Logged In')
    } else {
      alert('Password or Email is incorrect')
    }

  }
   return ( 
    <div className='App'>
    <label htmlFor='email'>Email: &nbsp;
    <input type = 'text' placeholder='Email' value={name.email}
    onChange={(e)=>setName({...name, email:e.target.value})}></input></label> <br />
    <label htmlFor='pasword'>Password: &nbsp;

    <input type = 'password' placeholder='Pasword' value={name.password}
    onChange={(e)=>setName({...name, password:e.target.value})}></input></label><br />
    {name.email} {name.password} 
    {(name.email && name.password.length>5)  &&
    <button onClick={onLogIn}>Login</button> }
      
       </div>        
 );
} 
export default MapDelete;
//Gotta find out where we can store the input credentials and make it work that way
//Have to refer to one example that I did ealier this year for a reference
