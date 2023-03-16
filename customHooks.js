//An exaple of custom hooks !! It has two files
//1
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import useGetData from "./UseGetData";

const Dallas = () => {  
  const [productNo, setProductNo] = useState(1);  
  const { result } = useGetData(
    `https://dummyjson.com/products/${productNo}`
  ); 

  const handleNextClick = () => {
    if (productNo !== 100) {
      setProductNo((prevValue) => prevValue + 1)
    }
  };

  const handlePreviousClick = () => {
    if (productNo !== 1) {
      setProductNo((prevValue) => prevValue - 1)
    }
  };
  
  return (
    <div className="App">
      {result && (
        <div key={result.id}>
          <h2>{result.title}</h2>
          {/* <h2>{result.title} &nbsp; &nbsp;{productNo}</h2> */}
          <h4>Product No: {result.id}</h4>         
          <br />
          <img width="120px" height="100px" src={result.thumbnail}></img>
        </div>
      )}
      <br />
      <button onClick={handlePreviousClick} disabled={productNo===1}>Previous</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
      <button onClick={handleNextClick} disabled={productNo===10}>Next</button>
    </div>
  );
};

export default Dallas;
//File 2 useGetData.js (create another file and import on top one)
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// function useGetData(url)  {
//     const [result, setResult] = useState(null);
//     const [error, setError] = useState(null)

//     useEffect(()=>{
//         const getData = () =>{
//             axios.get(url).then(response=>
//                 setResult(response.data)
//             ).catch(error => 
//                 setError(error))
//         }
//         getData()
//     }, [url])
//     return {
//         result, error
//     }
// }
 
// export default useGetData;


//Just incase if need of a css:
// .App {
//   text-align: center;
//   margin-top: 30px;
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
// .center {
//   margin-left: auto;
//   margin-right: auto;
// }
// /* table, th, td {
//   border: 1px solid black;
//   /* border-collapse: collapse; 

// } */
// tr:nth-child(odd) {
//   background-color: #f2f2f2;
// }
// /* https://www.w3schools.com/css/tryit.asp?filename=trycss_table_striped */





