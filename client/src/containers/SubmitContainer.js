import React from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap'

class SubmitContainer extends React.Component {

  render() {


    return (

      <div style={{ "text-align": 'left' }} class="submitPromo">
            <br></br>
      <center><h2>Submit a new promo code...</h2></center>
      <Row>
          <Col md={{ span: 6, offset: 3 }} >
          {
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Promo Code</Form.Label>
                <Form.Text className="text-muted">(eg. 50PERCENT)</Form.Text>
                <Form.Control type="text" placeholder="Enter promo code" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Text className="text-muted">Details of Promotion</Form.Text>
                <Form.Control type="text" placeholder="Enter promo details" />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
          }
          </Col>
      </Row>




      </div>
    )
  }
}


export default SubmitContainer
