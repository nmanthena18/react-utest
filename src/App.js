import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/UI/Input/Input'
import Button from './components/UI/Buttons/Buttons';

class App extends Component {
  state = {
     placeholder:"name",
     value:"Naresh1",
     change:() =>{},
     classes:"input"
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input {...this.state} />
        <Button clicked={this.changeInputValue}>Click</Button>
      </div>
    );

    
  }
}

export default App;
