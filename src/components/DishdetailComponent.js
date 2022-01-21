import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

class DishDetail extends Component {

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            <CardText>Lable: {dish.label}</CardText>
            <CardText>Price: {dish.price}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }


  
  rendercomments(dish) {
    if (dish != null){
      const coents=dish.comments.map((cmnt) => {
        
        return <div key={cmnt.id}>
          <Card >
        <h3>Comments</h3>
      <CardBody>
        <CardText>{cmnt.comment}</CardText>
        <CardTitle>{cmnt.author}</CardTitle>
        <CardTitle>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</CardTitle>
      </CardBody>
    </Card></div>});
      return (
        <div> {coents} </div>
      );  }
    else return <div></div>;

  }
 
  render() {
    console.log(this.props.dish);
    return (
      <div className="container ">
        <div className="row">
          <div className="col-6 col-md-5 col-sm-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-6 col-md-5 col-sm-5 m-1">
            {this.rendercomments(this.props.dish)}
          </div>
        </div>
        <div className="row">
          
        </div>
      </div>
    );
  }
}
export default DishDetail;
