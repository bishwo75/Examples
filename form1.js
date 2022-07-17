import React, { useState } from 'react';

const InputFiled = () => {
     const [formName, setFormName] = useState({firstName: "", lastName: '', city:''})

     const handleChange = (e) => {
         const  {name, value} = e.target;
       setFormName({
           ...formName,
           [name]: value
       
       }) 
     }
     console.log(formName)
    return ( 
        <div>
            <form>
                <input type='text' name="firstName" placeholder="First Name" value={formName.firstName} 
                onChange={(e)=>handleChange(e)}>
                </input>
                <br />
                <br />
                <input type='text' name="lastName" placeholder="Last Name" value={formName.lastName} 
                onChange={(e)=>handleChange(e)}>
                </input>
                <br />
                <input type='text' name="city" placeholder="City" value={formName.city} 
                onChange={(e)=>handleChange(e)}>
                </input>
            </form>
            {formName.firstName} {formName.lastName} {formName.city} 
        </div>
     );
}
 
export default InputFiled;
