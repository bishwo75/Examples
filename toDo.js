import React, { Component } from 'react';
class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toDoList: '',
            list: []
         }
    }
    handleChange =(e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    toAdd = (e) => {
        e.preventDefault();
        var arr = this.state.list;
        arr.push(this.state.todoList);
        this.setState({
            list: arr,
            todoList: ""
        })
    }
    render() { 
        return ( 
            <div>
                <form>
                <input type="text" placeholder="To Do List" name="todoList" 
                value={this.state.todoList} onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={(e)=>this.toAdd(e)}>Add You To Do List</button>
                </form>                
                     {this.state.list.map((abc) => {
                         return <li>{abc}</li>
                     })}                
            </div>           
         );
    }
} 
export default ToDo;
