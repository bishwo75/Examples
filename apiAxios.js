import React, { useState, useEffect} from 'react';
import axios from "axios";
const ApiAxios = () => {
    const [api, setApi] = useState([])
    const [error, setError] = useState(false)

    useEffect(async () => {
        // const getList = async () => {
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