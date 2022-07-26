import React, { Component } from 'react';
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players : ["Ram", "Shyam", "Bash", "Akesha", "Surya", "Rajendra"] 
        }        
    }
    onDeleteNameOfPlayers = (abc) => {
        var updatedPlayers = this.state.players.filter(item => {
            return item != abc
        })
        this.setState({
            players: updatedPlayers
        })
    }
    render() {    
         
        return ( 
            <div>
                <ul>
                    {this.state.players.map((abc)=>{
                        return (
                        <li onClick={()=> this.onDeleteNameOfPlayers(abc)}>{abc}</li>                       
                        )
                    })}
                </ul>
                <span>There are {this.state.players.length} soccer players here in Los Angeles.</span>
            </div>
         );
    }
}
 
export default Map;
