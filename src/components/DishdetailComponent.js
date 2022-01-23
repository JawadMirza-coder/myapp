import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg,Breadcrumb,BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
function RenderDish({ dish }) {
  if (dish != null) {
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
  } else return <div>No</div>;
}

function Rendercomments({ comt }) {
  if (comt != null) {
    const coents = comt.map((cmnt) => {
      return (
        <div key={cmnt.id}>
          <Card>
            <h3>Comments</h3>
            <CardBody>
              <CardText>{cmnt.comment}</CardText>
              <CardTitle>{cmnt.author}</CardTitle>
              <CardTitle>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(cmnt.date)))}
              </CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return <div> {coents} </div>;
  } else return <div>No</div>;
}

const DishDetail = (props) => {
  console.log(props.comments);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/menu">Menu</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Dish Detail</BreadcrumbItem>
      </Breadcrumb>
      <div className="container ">
        <div className="row">
          <div className="col-6 col-md-5 col-sm-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-6 col-md-5 col-sm-5 m-1">
            <Rendercomments comt={props.comments} />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </>
  );
};
export default DishDetail;
