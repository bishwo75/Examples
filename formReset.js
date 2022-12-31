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
//Also, if we want to show the reset button once both first name and last name input field are filled, then we can write like this:
// {name.firstName.length > 0 && name.lastName.length >0  && 
//     <button onClick={()=>setName({firstName:'', lastName:''})}>Reset</button>
//   }
