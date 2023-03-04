//Below, has both example from parent to child and from child to parent
//parent.js file:
import React, { Component } from "react";
import Child from "./child";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  parentCall = param => {
    this.setState({ name: param });
  };
  render() {    
    return (
      <div>       
        <Child name={'Bishwo'} parentFunction={this.parentCall} />
        {this.state.name}
      </div>
    );
  }
}
export default Parent;

//On Child.js file:
import React, { Component } from "react";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 
  render() {
    return (
      <div>       
        <button
          onClick={() => {
            this.props.parentFunction("khsim ali");
          }}>
          2parent
        </button>
        <p>This name came from parent to child props pass: {this.props.name}</p>
      </div>
    );
  }
}
export default Child;


//Parent child using hooks:
//On Parent Component: (have Parent component on another main App.js or somewhere if needed)
import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
    const name = "Shreyan"
    const [data, setData] = useState('')
    const onParent = (abc)=> {
        setData(abc)
    }
    return ( 
        <div>
            <p>parent Component</p><br />
            {data}
            <br />
            <br />
            <Child abc={name} onParent={onParent}/>
        </div>
     );
}
 
export default Parent;


//On Child Component:
import React from 'react';
const Child = (props) => {
    return ( 
        <div>
            {props.abc}<br />
            <button onClick={()=>props.onParent("from child")}>Child Button</button>
        </div>
     );
}
 
export default Child;




