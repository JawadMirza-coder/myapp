import React from 'react';
import {Container,Row,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
function ContectUs(props){
    return(
        <>
         <Breadcrumb>
    <BreadcrumbItem>
      <Link to="/home">Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem active>Contect Us</BreadcrumbItem>
  </Breadcrumb>
        
        <Container>
           <Row>
             
              <div className=" col-12 col-sm-5 ">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>


           </Row>
        </Container>
        </>
    )
        
}

export default ContectUs;