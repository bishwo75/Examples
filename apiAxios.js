import React, { useState, useEffect} from 'react';
import axios from "axios";
const ApiAxios = () => {
    const [api, setApi] = useState([])
    const [error, setError] = useState(false)

    useEffect(async () => {
        // always a good way to use a try catch (P. dalla's sugg)
        try {
            await axios.get("https://api.github.com/users").then((response) => {
                console.log("Check the below response")
                console.log(response)
                setApi(response.data);
            })
        }catch(error) {
            setError(true)
            console.log('test')
        }  
        // }
        // await getList(); //1
    }, [])
    return ( 
        <div>
            {!error ?
            api.map(item => <li key={item.item}>{item.login}</li>)
            : <p>API failed</p>
        }
        </div>
     );
}
 
export default ApiAxios;

// const MapDelete = () => {   
//   const [api, setApi] = useState([]) 
//   useEffect(() => {
//     axios.get("https://api.github.com/users").then(response =>{      
//       setApi(response.data)      
//     })
//   }, [])
  
//     return ( 
//       <div className='App'>
//       {api.map(a=><li key={a.login}>{a.login}</li>)}
//       < br />
//       <p> Let's see from Parent to child</p>
//       <Parent />
//       <br />
//       <br />
//       </div>            
//      );
// }
 
// export default MapDelete;
