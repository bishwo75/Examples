import React, { Component } from 'react'
import './App.css';
import HookCounter from './hookComponent';
import Prabin from './dalla';
import HookCounter1 from './hookCounter';
import HookCounter3 from './hookCounter3Object';
import HookCounterArray from './hookComponent4Array';
import Gagan from './gagan';
import InputFiled from './inputField';
import June9 from './june9LA';
import Abashya from './june9LA1';

class ndRound extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
     }
  }
  incrementCount = () => {
    // this.setState({
    //   //count: this.state.count + 1
    //   count: (prevState => prevState + 1)
    // })
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  render() { 
    return ( 
      <div>
        <button onClick={this.incrementCount}>Count please:{this.state.count}</button>
        <HookCounter/>
        <br />
        <br />   
        <HookCounter1 />    
        <br />
        <br />
        <HookCounter3 />
        <br />
        <br />
        <HookCounterArray />
        <br />
        <br />
        <Gagan />
        <br />
        <br />
        <InputFiled />
        <br />
        <br />
        <p>Practise on June 9th</p>
        <June9 />
        <br />
        <br />
        <p>Chiso Manche</p>
        <Abashya />
      
      </div>
     );
  }
}
 
export default ndRound;
