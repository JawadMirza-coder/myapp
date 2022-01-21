import React, { Component } from "react";
import { Card,  CardImg } from "reactstrap";

class Menu extends Component {
    constructor (props){
        super(props);
        this.state={

        };
      };
  
 
      render() {
        const menu = this.props.dishes.map((dish) => {
          return (
            <div key={dish.id} className="col-12 col-md-2 col-sm-5 m-5 ">
              <Card 
                style={{ width: "18rem" }}
                onClick={() => this.props.onClick(dish.id)}
              >
                <CardImg variant="top" src={dish.image} alt={dish.name} />
              </Card>
            </div>
          );
        });
    
        return (
          <div className="container ">
            <div className="row d-flex flex-row ">
              {menu}</div>
          </div>
        );
      }
    
}
export default Menu;
