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
import { addComment, fetchDishes, fetchComments, fetchPromos,fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders

  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders())
});
class Main extends Component {
 
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() {
    const HomePage = () => {
      console.log(this.props.dishes.dishes)
      return (
        <Home 
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leaderLoading={this.props.leaders.isLoading}
        leaderErrMess={this.props.leaders.errMess}
        
    />
      );
    };
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMess}
        addComment={this.props.addComment}
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
            component={() => <Menu dishes={this.props.dishes.dishes}   addDishes={this.props.dishes.addDishes} 
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus" component={() => <ContectUs  resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route
            path="/aboutus"
            component={() => <About leader={this.props.leaders.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
