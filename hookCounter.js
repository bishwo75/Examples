import React, { useState } from 'react';
const HookCounter1 = () => {
    const initialCount = 1000
    const [count, setCount] = useState(initialCount)
    return ( 
        <div>
            Count: {count} <br />
            <button onClick={() =>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount+300)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount-300)}>Decrement</button>
        </div>
     );
}
 
export default HookCounter1;
