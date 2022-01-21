import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
} from "reactstrap";

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
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-5 d-flex flex-row">
          <Card style={{ width: "18rem" }} onClick={() => this.onDishSelect(dish)} >
            <CardImg variant="top" src={dish.image} alt={dish.name} />
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
      </div>
    );
  }
}
export default Menu;
