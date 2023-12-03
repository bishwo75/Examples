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
// 2nd Dec 2023 !!
//Also, if you do not call the setState near the input field, the below is the way to do on onChange when calling a method:
// const Tailwind = () => {
//   const [name, setName] = useState({
//     firstName: "",
//     lastName: "",
//   });

//     const handleChange = (e, inputName) => {
//         setName({
//             ...name, 
//             [inputName] : e.target.value})
//     }
//   return (
//     <div className="font-bold text-color-green">
     
//       <div className="align-middle">
//         <input
//           type="text"
//           placeholder="First Name"
//           value={name.firstName}
//         //   onChange={(e) => setName({ ...name, firstName: e.target.value })}
//         onChange={(e)=>handleChange(e, "firstName")}
//         />
//         &nbsp;
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={name.lastName}
//         //   onChange={(e) => setName({ ...name, lastName: e.target.value })}
//         onChange={(e)=>handleChange(e, "lastName")}
//         />
//         &nbsp;
//         <p>
//           {name.firstName} &nbsp; {name.lastName}
//         </p>
//         {(name.firstName.length>0 || name.lastName.length>0) &&
//         <button onClick={()=>setName({firstName:'', lastName:''})}>Reset</button>
//         }
//       </div>
//     </div>
//   );
// };

// export default Tailwind;




//Also, if we want to show the reset button once both first name and last name input field are filled, then we can write like this:
// {name.firstName.length > 0 && name.lastName.length >0  && 
//     <button onClick={()=>setName({firstName:'', lastName:''})}>Reset</button>
//   }
