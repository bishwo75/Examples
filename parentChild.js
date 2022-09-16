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
