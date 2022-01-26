import "./App.css";

import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/mainComponent";
import { DISHES } from "./shared/Dishes";
import {ConfigureStore} from "./redux/configure";
import {Provider} from 'react-redux';


const store =ConfigureStore();
class App extends Component {

  
  constructor (props){
    super(props);
    this.state={
      dishes:DISHES
    };
  };

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App"> 
          <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
