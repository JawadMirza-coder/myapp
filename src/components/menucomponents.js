import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selecteddish: null,
    };
  }

  
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  
  rendercomments(dish) {
    if (dish != null){
      return (
        <Card>
            <h3>Comments</h3>
          <CardBody>
            <CardText>{dish.comments[0].comment}</CardText>
            <CardTitle>{dish.comments[0].author}</CardTitle>
            <CardTitle>{dish.comments[0].date}</CardTitle>
          </CardBody>
          <CardBody>
            <CardText>{dish.comments[1].comment}</CardText>
            <CardTitle>{dish.comments[1].author}</CardTitle>
            <CardTitle>{dish.comments[1].date}</CardTitle>
          </CardBody>
          <CardBody>
            <CardText>{dish.comments[2].comment}</CardText>
            <CardTitle>{dish.comments[2].author}</CardTitle>
            <CardTitle>{dish.comments[2].date}</CardTitle>
          </CardBody>
          <CardBody>
            <CardText>{dish.comments[3].comment}</CardText>
            <CardTitle>{dish.comments[3].author}</CardTitle>
            <CardTitle>{dish.comments[3].date}</CardTitle>
          </CardBody>
          <CardBody>
            <CardText>{dish.comments[4].comment}</CardText>
            <CardTitle>{dish.comments[4].author}</CardTitle>
            <CardTitle>{dish.comments[4].date}</CardTitle>
          </CardBody>
         
        </Card>
      );}
    else return <div></div>;

  }
 
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 col-sm-5 m-5 ">
          <Card
            style={{ width: "18rem" }}
            onClick={() => this.onDishSelect(dish)}
          >
            <CardImg variant="top" src={dish.image} alt={dish.name} />
          </Card>
        </div>
      );
    });

    return (
      <div className="container ">
        <div className="row ">{menu}</div>
        <div className="row">
          <div className="col-6 col-md-5 col-sm-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-6 col-md-5 col-sm-5 m-1">
            {this.rendercomments(this.state.selectedDish)}
          </div>
        </div>
        <div className="row">
          
        </div>
      </div>
    );
  }
}
export default Menu;
