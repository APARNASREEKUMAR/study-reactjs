import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
        persons :[
            {name :"Maximillian", age:86}
        ],
        username :'TaskUserName'
    }
    eventListen = (newName) =>{
        //Merge with the existing Persons Array
        this.setState({persons : [
                {name : newName ,age:89}
            ]})
    }
    switchUserName = (event) => {
        this.setState({
            username : event.target.value
        })
    }
  render() {
    return (
      <div className="App">Hello Aparna
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Profile name={this.state.persons[0].name}/>
          <button onClick={this.eventListen.bind(this,"Stephannie")}>Click Me</button>
          //below one is a little inefficient
          <button onClick={() => this.eventListen('SecondWayMax!')}>Click Me Part 2</button>
           <UserInput switchName={this.switchUserName}/>
           <UserOutput username={this.state.username}/>


           //
          <h3>Conditional Rendering of Divs</h3>
          <p>is Vue js it is achieved with v-if , in react - jsx is a syntactical sugar of
              plain javascript- so we can use ternary expressions directly as in plain JS as below
          </p>


      </div>
    );
  }
}

export default App;
