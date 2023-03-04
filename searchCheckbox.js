//Here, this is what we did:
//1. Make an API call
//2. Have a search button to search 
//3. Can delete each row when clicked
//4. Add a checkbox and all checked value to be shown on a separate div
//5. While unchecked, the value gets removed

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./App.css"
const Dallas = () => {  
 const [apii, setApii] = useState([])
 const [query, setQuery] = useState('')
 const [checkedVal, setCheckedVal] = useState([])

 useEffect(()=> {
  axios.get('https://api.github.com/users').then(response => {
    setApii(response.data)
  })
 }, [])
 const onDelete=(item) => {
  const newApii = apii.filter(abc=> (
    abc !== item))
    setApii(newApii)    
 } 

 const handleChange = (e) => {  
  console.log(e.target.checked)
  console.log(e.target.value)
  if(e.target.checked){
    setCheckedVal([...checkedVal, e.target.value])
  }else {
    setCheckedVal([...checkedVal.filter((item => e.target.value !== item))])
  }
 }
  return ( 
    <div className='App'> 
    <input type="text" placeholder='Search' onChange={e=>setQuery(e.target.value)}></input><br /> <br />
    <table className="center">
      <thead>
      <tr>
        <th>Checkbox</th>
        <th>Login</th>
      </tr>
      </thead>
      <tbody>
    {apii.filter(item=> {
      if (query === ''){
        return item;
      } 
      else if (item.login.includes(query)){
        return item;
      }
    }).map((item, index)=> (
           <tr key={index} >    
            <td>
    <label>
        <input type="checkbox" value={item.login}
        onChange={handleChange} /> 
         </label> 
        </td>
        <td>
        <span onClick={()=>onDelete(item)}>
        {item.login}
        </span>
        </td>     
      </tr>         
    ))}
    </tbody>
      </table> 
    <p> There are {apii.length} logins</p>
    <p>The checked values:</p>
    {checkedVal.map(item=><li key={item}>{item}</li>)}
    <br />
    <br />
    </div>
   );
}
 
export default Dallas;
//Style.css put:
//  tr:nth-child(odd) {
//   background-color: #f2f2f2;
// }
