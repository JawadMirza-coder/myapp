import React  from "react";
import { baseUrl } from "../shared/baseUrl";
import { Card, CardImg,Breadcrumb,BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import {Loading } from './Loading'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  FormFeedback
} from "reactstrap";
import { Component } from "react";
function RenderMenuitem({ dish, addDishes }) {
  return (
    <>
    <Link to={`/menu/${dish.id}`}>
      <Card  style={{ width: "18rem" }}>
        <CardImg  variant="top" src={baseUrl + dish.image} alt={dish.name} />
      </Card> 
    </Link>
      <DishForm addDishes={addDishes}/>
    </>
  );
}
class DishForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      touched: {
        name: false,
      },
    };

    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  validate(name) {
    const errors = {
      name: "",
    };
    if (this.state.touched.name && name.length < 3)
      errors.name = "Username should be >= 3 characters";
    else if (this.state.touched.name && name.length > 15)
      errors.name = "Username should be <= 10 characters";

    return errors;
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.toggle();
    this.props.addDishes(
      this.state.image,
      this.state.name,
      this.state.category,
      this.state.label,
      this.state.price,
      this.state.featured,
      this.state.description,
    );

    event.preventDefault();
  }
  render() {

    const errors = this.validate(this.state.name);
    return (
      <>
        <Button className="p-2 my-2" color="success" onClick={this.toggle}>
          {this.props.buttonLabel} Submit Comment
        </Button>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Login</ModalHeader>
            <Form onSubmit={this.handleSubmit}>
              <ModalBody>
                <FormGroup row>
                  <Label htmlFor="image" md={3}>
                    Image Address
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="image"
                      name="image"
                      placeholder="ImgAddress"
                      value={this.state.image}

                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="name" md={3}>
                  DishName
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="name"
                      value={this.state.name}
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      onBlur={this.handleBlur("name")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="Category" md={3}>
                  Category
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="Category"
                      name="Category"
                      placeholder="Category"
                      value={this.state.Category}
                     
                      onChange={this.handleInputChange}
                    />
                  
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="Label" md={3}>
                  Label
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="Label"
                      name="Label"
                      placeholder="Label"
                      value={this.state.Label}
                     
                      onChange={this.handleInputChange}
                    />
                  
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="price" md={3}>
                  Price
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="price"
                      name="price"
                      placeholder="price"
                      value={this.state.price}
                    
                      onChange={this.handleInputChange}
                    />
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="featured" md={3}>
                  Featured
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="featured"
                      name="featured"
                      placeholder="featured"
                      value={this.state.featured}
                     
                      onChange={this.handleInputChange}
                    />
                  
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="description" md={3}>
                    Description
                  </Label>
                  <Col md={9}>
                    <Input
                      type="textarea"
                      id="description"
                      name="description"
                      rows="6"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                    ></Input>
                  </Col>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <FormGroup row>
                  <Col>
                    <Button type="submit" color="primary" >
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </ModalFooter>
            </Form>
          </Modal>
        </div>
      </>
    );
  }
}
class  Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:"",
      name:"",
      category:"",
      label:"",
      price:"",
      featured:"",
      description:""
    };
  }
  render(){
  const menu = this.props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-2 col-sm-5 m-5 ">
        <RenderMenuitem dish={dish} addDishes={this.props.addDishs}  />
      </div>
    )
  });
  console.log(this.props.isLoading)
  if (this.props.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (this.props.errMess) {
    return(
        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <h4>{this.props.dishes.errMess}</h4>
                </div>
            </div>
        </div>
    );
}
  else{
  return (
    <>
    <Breadcrumb>
    <BreadcrumbItem>
      <Link to="/home">Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem active>Menu</BreadcrumbItem>
  </Breadcrumb>
    <div className="container ">
      <div className="row d-flex flex-row ">{menu}  </div>
    </div></>
  );}}
};

export default Menu;
