import React, { useState } from 'react';
//import { useState } from 'react/cjs/react.development';

const players112 = ["Ram", "Shyam", "Bash", "Akesha", "Surya", "Rajendra", "Ram"] 
const MapDelete = (props) => {
    //const {mapDelete} = props
    // const [players, setPlayers] = useState(mapDelete)
    const [players, setPlayers] = useState(players112)  
    const handleClick= (index) => {
      const newPlayers = [...players];
      newPlayers.splice(index, 1)
      setPlayers(newPlayers)
    }

    const resetClick = () => {
      setPlayers(players112)
    }
    return ( 
        <div>
            <ul>
                <p>Test here with Hooks for the state ones</p>
              {players.map((abc, index) => {
                  return (
                  <li key={Math.random.toString()} onClick={() => handleClick(index)}>{abc}</li>                  
                  )                 
              })}  
               <p>There are {players.length} players.</p>
               {players.length < players112.length && <button onClick={()=> resetClick()}>Reset</button>}
            </ul>
        </div>
     );
}
 
export default MapDelete;


