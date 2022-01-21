import React from "react";
import { Card, CardImg } from "reactstrap";

function RenderMenuitem({ dish, onClick }) {
  return (
    <Card
      style={{ width: "18rem" }}
      onClick={() => onClick(dish.id)}
    >
      <CardImg variant="top" src={dish.image} alt={dish.name} />
    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-2 col-sm-5 m-5 ">
        <RenderMenuitem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container ">
      <div className="row d-flex flex-row ">{menu}</div>
    </div>
  );
}

export default Menu;
