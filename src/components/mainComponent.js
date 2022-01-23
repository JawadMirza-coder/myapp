import React, { Component } from 'react';
import Menu from './menucomponents';
import Header from "./Header";
import Footer from "./footer";
import Home from './Home';
import { Route,Switch,Redirect  } from 'react-router-dom';

// import DishDetail from './DishdetailComponent';

import { DISHES } from "../shared/Dishes";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
   
  }
 
  

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>

        <Header />
        <Switch>
        <Route path='/home' component={HomePage} />
         <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
        <Redirect  to="/home" />
        </Switch>


        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
  
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}

        <Footer />

      </div>
      
    );
    
  }

}

export default Main;