import React, { Component } from 'react';
import Menu from './menucomponents';
import Header from "./Header";
import Footer from "./footer";
import Home from './Home';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotion';
import { LEADERS } from '../shared/Leaders';
import ContectUs from './contectus';
import About from './AboutUs';

import { Route,Switch,Redirect  } from 'react-router-dom';

// import DishDetail from './DishdetailComponent';

import { DISHES } from "../shared/Dishes";
import DishDetail from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,

        // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
   
  // }
 
  

  render() {
    const HomePage = () => {
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }
    const DishwithId=({match})=>{
      console.log(this.state.comments.filter((comments)=> comments.dishId=== parseInt(match.params.dishId,10))[0])
      return(
        <DishDetail 
                dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
               comments={this.state.comments.filter((comment)=> comment.dishId=== parseInt(match.params.dishId,10))}
        />
      ) ;
    }
    return (
      <div>

        <Header />
        <Switch>
        <Route path='/home' component={HomePage} />
         <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
         <Route path='/menu/:dishId' component={DishwithId}/>
         <Route path='/contactus' component={()=><ContectUs />} />
         <Route path ='/aboutus' component={()=><About leader={this.state.leaders}/> } />
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