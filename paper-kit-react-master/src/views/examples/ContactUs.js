/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function LandingPage() {

  return (
    <>
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Registered Offices</h2>
               
                <br />
              
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                   <div className="description">
                    <h4 className="info-title">ERNAKULAM</h4>
                    <p className="description">
                    Sree Muruga 
                    Pangode, Vadavucode P.O
                    Ernakulam, Pin 682310
                    </p>
                  
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                 
                  <div className="description">
                    <h4 className="info-title">KOLLAM</h4>
                    <p>
                    1ST FLOOR, 17-DIVYA NAGAR
                    PATTATHANAM, KOLLAM
                    PIN NO: 691021    
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  
                  <div className="description">

                    <h4 className="info-title">TRIVANDRUM</h4>
                    <p>
                    Flat number 903
                    Confident Prime 3
                    Kazhakoottam FCI road
                    Kazhakoottam
                    PIN NO : 695582

                    </p>
                    
                  </div>
                </div>
              </Col>
             
            </Row>
          </Container>
        </div>
       
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    
    </>
  );
}

export default LandingPage;
