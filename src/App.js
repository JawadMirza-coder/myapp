import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import Menu from "./components/menucomponents";
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
        <header className="App-header">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Jawad Mirza</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} />
        </header>
      </div>
    );
  }
}

export default App;
