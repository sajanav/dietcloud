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
  Container,
  Row,
  Col,
} from "reactstrap";


function LandingPage() {

  return (
    <>
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                DietCloud is a Cloud Kitchen Network that serves Healthy & Nutritious food to its users via its mobile app & other online aggregators. Its vision is to make Healthy Food more accessible and more affordable. 
               </h5>
                <br />
              
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Vision</h4>
                    <p className="description">
                    Making Healthy Food Accessible & Affordable to all Globally. 
                    We wish to convey the idea that “You Are What You Eat “
                    </p>
                  
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mission</h4>
                    <p>
                    Delivering Healthy Diet Online to Millions of Homes, Offices and Schools
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Objectives</h4>
                    <p>
                    Be a global online health diet brand that delivers food & happiness to millions of people and their loved ones. 
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Goals</h4>
                    <p>
                    One Million Healthy & Happy Subscribes in India.
                    </p>
                   
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
       
    
      </div>
    
    </>
  );
}

export default LandingPage;
