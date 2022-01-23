import "./App.css";

import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
      <div className="App"> 
          <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
