import React, { useState, useEffect } from 'react';
// import Data from './mockData.json'
import './App.css';
import axios from 'axios'


const MapDelete = () => {    
  const [query, setQuery] = useState('')
  const [api, setApi] = useState([]) 
  useEffect(() => {
    axios.get("https://api.github.com/users").then(response =>{      
      setApi(response.data)      
    })
  }, [])
  return ( 
    <div className='App'>
       <input placeholder='Enter First Name' onChange={e=>setQuery(e.target.value)}/>       
       {
       api.filter(post => {
        if (query === '') {
          return post;
        }
        else if (post.login.toLocaleLowerCase().includes(query.toLocaleLowerCase())){
          //else if (post.login.includes(query)) instead of above, we can do this one too, above filtering lower and upper case
          return post;
        }
       }).map((post, index) => (    
        <div className='box' key={index}>
            <p>{post.login}</p>
            {/* <p>{post.last_name}</p>  also, it can be .map(item, index too instead of post */}
        </div>
       ))}
       </div>        
 );
} 
export default MapDelete;

//This below code has both api, api mapping, delete row of api and a search too
// import React, { useState, useEffect } from 'react'
// import './App.css';
// import axios from 'axios';


// const App =() => {   
//   const [apii, setApii] = useState([])
//   const [query, setQuery] = useState('')
//   useEffect(() => {
//     axios.get("https://api.github.com/users").then((response)=> {
//     setApii(response.data)
//     })
//   }, [])
  
//   const onDelete = (item) => {
//     const newApii = apii.filter((xyz)=> (
//       xyz !== item
//     ))
//     setApii(newApii)
//   }
//    return (
//     <div className="App">  
//     <input type='text' placeholder='Search' onChange={(e)=>setQuery(e.target.value)}></input>    
//     {
//     apii.filter(post => {
//       if (query === '') {
//         return post
//       } else if (post.login.includes(query)){
//         return post;
//       }
//     })
//     .map(item=><li key={item.id} onClick={()=>onDelete(item)}>{item.login}</li>)}
//     <br />
//     <p>There are {apii.length} users using our application.</p>
    
//     </div>
//   );
// }

// export default App;

//Also, for mockData.json; you can have the below but above, I mapped with API; 
// [{
//     "id": 1,
//     "first_name": "Theo",
//     "last_name": "How",
//     "email": "thow0@hubpages.com",
//     "gender": "Female",
//     "ip_address": "148.125.113.50"
//   }, {
//     "id": 2,
//     "first_name": "Ignazio",
//     "last_name": "Tuftin",
//     "email": "ituftin1@altervista.org",
//     "gender": "Male",
//     "ip_address": "80.2.71.214"
//   }, {
//     "id": 3,
//     "first_name": "Agathe",
//     "last_name": "Jobbins",
//     "email": "ajobbins2@mapy.cz",
//     "gender": "Female",
//     "ip_address": "99.187.143.60"
//   }, {
//     "id": 4,
//     "first_name": "Arvie",
//     "last_name": "Greeson",
//     "email": "agreeson3@wired.com",
//     "gender": "Male",
//     "ip_address": "3.199.169.30"
//   }, {
//     "id": 5,
//     "first_name": "Fan",
//     "last_name": "A'Barrow",
//     "email": "fabarrow4@nih.gov",
//     "gender": "Female",
//     "ip_address": "181.51.219.187"
//   }, {
//     "id": 6,
//     "first_name": "Peri",
//     "last_name": "Broomer",
//     "email": "pbroomer5@fastcompany.com",
//     "gender": "Female",
//     "ip_address": "147.41.46.111"
//   }, {
//     "id": 7,
//     "first_name": "Gerek",
//     "last_name": "Pellew",
//     "email": "gpellew6@indiatimes.com",
//     "gender": "Male",
//     "ip_address": "222.2.214.18"
//   }, {
//     "id": 8,
//     "first_name": "Benn",
//     "last_name": "Corryer",
//     "email": "bcorryer7@mit.edu",
//     "gender": "Male",
//     "ip_address": "206.31.176.42"
//   }, {
//     "id": 9,
//     "first_name": "Bowie",
//     "last_name": "Knapper",
//     "email": "bknapper8@gmpg.org",
//     "gender": "Male",
//     "ip_address": "97.218.214.59"
//   }, {
//     "id": 10,
//     "first_name": "Audra",
//     "last_name": "Heaker",
//     "email": "aheaker9@bloglines.com",
//     "gender": "Female",
//     "ip_address": "79.223.97.164"
//   }]


//App.css is below as well: 
// .App {
//   text-align: center;
//   margin-top: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
  
//   /* to center a div (interview questions)
//   text-align: center;
// 		width: 100%;
// 		height: 100vh;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center; */
// }
// .box {
//   text-align: left;
//   border: black ridge 1px;
//   border-radius: 10px;
//   margin: 3px;
//   width: 20rem;
//   padding-left: 10px;
// }
// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//   .App-logo {
//     animation: App-logo-spin infinite 20s linear;
//   }
// }

// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

// .App-link {
//   color: #61dafb;
// }

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }


  
