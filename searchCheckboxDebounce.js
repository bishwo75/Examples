//Similar exercirse like other with search and checkbox
//But here, In Addition, we have added a debounce property where it delays while showing search results
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

const Dallas = () => {
  const [apii, setApii] = useState([]);
  const [query, setQuery] = useState("");
  const [checkedVal, setCheckedVal] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users").then((response) => {
      setApii(response.data);
    });
  }, []);
  const onDelete = (item) => {
    const newApii = apii.filter((abc) => abc !== item);
    setApii(newApii);
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);
    if (e.target.checked) {
      setCheckedVal([...checkedVal, e.target.value]);
    } else {
      setCheckedVal([...checkedVal.filter((item) => e.target.value !== item)]);
    }
  };

  function searchData(e) {
    setQuery(e.target.value);
  }

  function deBounce(functionCall, delay) {
    let timeOut;
    return function(){
      const context = this;
      const arg = arguments;
      clearTimeout(timeOut);
      timeOut = setTimeout(()=> {
        functionCall.apply(context, arg)
      }, delay)
    }
  }
  
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {deBounce(searchData, 3000)(e)}}
      ></input>
      <br /> <br />
      <table className="center">
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {apii
            .filter((item) => {
              if (query === "") {
                return item;
              } else if (item.login.includes(query)) {
                return item;
              }
            })
            .map((item, index) => (
              <tr key={index}>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      value={item.login}
                      onChange={handleChange}
                    />
                  </label>
                </td>
                <td>
                  <span onClick={() => onDelete(item)}>{item.login}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <p> There are {apii.length} logins</p>
      <p>The checked values:</p>
      {checkedVal.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <br />
      <br />
      <br />      
      <br />
      <br />
    </div>
  );
};

export default Dallas;
