import React, { Component } from "react";
import Menu from "./menucomponents";
import Header from "./Header";
import Footer from "./footer";
import Home from "./Home";
import ContectUs from "./contectus";
import About from "./AboutUs";
import { Route, Switch, Redirect } from "react-router-dom";
import DishDetail from "./DishdetailComponent";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comeents:state.comments,
    promotions:state.promotions,
    leaders:state.leaders

  }
}
class Main extends Component {

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishwithId = ({ match }) => {
      console.log(
        this.props.comments.filter(
          (comments) => comments.dishId === parseInt(match.params.dishId, 10)
        )[0]
      );
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route path="/contactus" component={() => <ContectUs />} />
          <Route
            path="/aboutus"
            component={() => <About leader={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>

        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
  
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}

        <Footer />
      </div>
    );
  }
}

export default  withRouter(connect(mapStateToProps)(Main));
