import React, { useState } from 'react';

const HookCounter3 = () => {
    const [names, setName] = useState({firstName: '', lastName: ''})
    return ( 
        <form>
            <input type="text" 
            value={names.firstName}
            onChange={e=>setName({...names,firstName:e.target.value})}>                
            </input>

            <input type="text" 
            value={names.lastName} 
            onChange={e=>setName({...names, lastName:e.target.value})}>                
            </input>
            <p>24th June 2022, Friday !!</p>
            <h2>Your first name is - {names.firstName}</h2>
            <h2>Your last name is - {names.lastName}</h2>
        </form>
    )
}
 
export default HookCounter3;
