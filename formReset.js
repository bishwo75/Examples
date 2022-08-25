import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

const MapDelete = () => {     
   const [name, setNames] = useState({firstName:'', lastName:''})
    return ( 
      <div className='App'>
       <input type='text' placeholder='First Name' 
       value={name.firstName} 
       onChange={e=>setNames({...name, firstName:e.target.value})}></input>
       <input type='text' placeholder='Last Name' 
       value={name.lastName} 
       onChange={e=>setNames({...name, lastName:e.target.value})}></input>
       <br />
       Miss {name.firstName} {name.lastName} is the actres of LIFE IN LA !!
       <br />
       <button onClick={()=>setNames({firstName:'', lastName:''})}>Reset</button>
      </div>            
     );
}
 
export default MapDelete;
