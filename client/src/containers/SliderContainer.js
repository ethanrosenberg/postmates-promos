import React from 'react';

import { Row, Col, Jumbotron, Button } from 'react-bootstrap'

import Background from '../bg.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class SliderContainer extends React.Component {

  render() {



    var landingStyle = {
      width: "100%",
      height: "700px",
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };

    var textStyle = {
       height: "200px",
       width: "800px",
       color: "#FFFFFF",
       lineHeight: "600px",
       textAlign: "center",
       fontSize: "70px"
    };

    var subTextStyle = {
       height: "200px",
       width: "800px",
       color: "#FFFFFF",
       lineHeight: "300px",
       textAlign: "center",
       fontSize: "30px"
    };

      return (
        <div className="SliderContainer" style={landingStyle}>
        <Row>
            <Col md={{ span: 6, offset: 3 }} >
            <h1 style={textStyle}>Love Postmates?</h1>
            <h3 style={subTextStyle}>Why not save big on your next order?</h3>
            <Button variant="light" type="submit" size="lg"><Link to="/promos">Home</Link></Button>

            </Col>
        </Row>
        </div>

      )

  }

}

export default SliderContainer
