import "./App.css";

import React, { Component } from "react";

import Main from "./components/mainComponent";
import { DISHES } from "./shared/Dishes";

class App extends Component {

  
  constructor (props){
    super(props);
    this.state={
      dishes:DISHES
    };
  };

  render() {
    return (
      <div className="App"> 
          <Main />
      </div>
    );
  }
}

export default App;
