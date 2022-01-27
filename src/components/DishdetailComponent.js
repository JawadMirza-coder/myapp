import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";
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
} from "reactstrap";
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
        <>
          <div key={cmnt.id}>
            <Card>
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
        </>
      );
    });
    return <div> {coents} </div>;
  } else return <div>No</div>;
}

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      username: "",
      comment: "",
      touched: {
        username: false,
      },
    };


    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

validate(username) {
  const errors = {
      username: ''
  };
  if (this.state.touched.username && username.length < 3)
      errors.username = 'Username should be >= 3 characters';
  else if (this.state.touched.username && username.length > 15)
      errors.username = 'Username should be <= 10 characters';

  return errors;
}

handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

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
    console.log("Current State is: " + JSON.stringify("Rating: "+this.state.rating +" Username: "+ this.state.username +" Comment: "+ this.state.comment));
    alert("Current State is: " + JSON.stringify("Rating: "+this.state.rating +" Username: "+ this.state.username +" Comment: "+ this.state.comment));
    event.preventDefault();
  }

  render() {
    const errors = this.validate(this.state.username,this.state.comment);
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
              <RenderDish dish={this.props.dish} />
            </div>
            <div className="col-6 col-md-5 col-sm-5 m-1">
              <h3>Comments</h3>
              <Rendercomments comt={this.props.comments} />
              <Button className="p-2 my-2" color="success" onClick={this.toggle}>
                {this.props.buttonLabel} Submit Comment
              </Button>
            </div>
          </div>
          <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Login</ModalHeader>
              <Form onSubmit={this.handleSubmit}>
                <ModalBody>
                  <FormGroup row className="d-flex">
                    <Label
                      htmlFor="rating"
                      
                      md={3}
                    >
                      Rating
                    </Label>
                    <Col md={9} className="d-flex">
                      <Input className="flex-grow-1 form-control"
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="username" md={3}>
                      Username
                    </Label>
                    <Col md={9}>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        valid={errors.username === ''}
                        invalid={errors.username !== ''}
                        onBlur={this.handleBlur('username')}
                        onChange={this.handleInputChange}
                      />
                        <FormFeedback>{errors.username}</FormFeedback>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor="message" md={3}>
                      Your Comment
                    </Label>
                    <Col md={9}>
                      <Input
                        type="textarea"
                        id="comment"
                        name="comment"
                        rows="6"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                      ></Input>
                    </Col>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <FormGroup row>
                    <Col>
                      <Button type="submit" color="primary">
                        Send Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                </ModalFooter>
              </Form>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}
export default DishDetail;
