import React from "react";
import { Card, CardImg,Breadcrumb,BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
function RenderMenuitem({ dish, onClick }) {
  return (
    <Link to={`/menu/${dish.id}`}>
      <Card style={{ width: "18rem" }}>
        <CardImg variant="top" src={dish.image} alt={dish.name} />
      </Card>
    </Link>
  );
}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
   
       
      <div key={dish.id} className="col-12 col-md-2 col-sm-5 m-5 ">
        <RenderMenuitem dish={dish} />
      </div>
      
      
    );
  });

  return (
    <>
    <Breadcrumb>
    <BreadcrumbItem>
      <Link to="/home">Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem active>Menu</BreadcrumbItem>
  </Breadcrumb>
    <div className="container ">
      <div className="row d-flex flex-row ">{menu}</div>
    </div></>
  );
};

export default Menu;
