// Get Default State
// Set Initial State
// Before get created
// Render Jsx
// After component created
import React, { Component } from 'react';

class LifeCycle extends Component {
    // Get Default State
    constructor(props){
        super(props)

        // Set Initial State
        this.state = {
            title:'LifeCycle'
        }
    }

    // Before get created
    componentWillMount(){
        console.log("Before Created")
        
    }

    componentWillUpdate(){
        console.log("Before Update", this.state.title)

    }

    componentDidUpdate(){
        console.log("after update", this.state.title)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("current state",this.state.title);
        console.log("next state", nextState.title)
        if(nextState.title === "Life Cycle Hooks")
            return true;
        else
            return false;
    }
    // Render Jsx
    render(){
        console.log("render jsx")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={() => this.setState({title:'Life Cycle Hook'})}>
                        Click to Change
                </div>
            </div>
        )
    }

    // After component created
    componentDidMount(){
        console.log("After Created")
        document.querySelector('h1').style.color="red"
    }

    componentWillUnmount(){
        alert('do you want to leave')
    }

    
}

export default LifeCycle;