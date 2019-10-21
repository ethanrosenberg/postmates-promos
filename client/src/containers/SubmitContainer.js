import React from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap'

import { connect } from 'react-redux';

import { addNewPromo, updatePromoForm } from '../actions/promoActions'

class SubmitContainer extends React.Component {

  constructor () {
    super()
     this.state = {
       code: '',
       description: '',
       status: 'ready'
     }
   }

  handlePromoFormChange = event => {

    this.setState({
     code: event.target.value
    });
      //updatePromoForm(updatedPromoFormData)
      //console.log(updatedPromoFormData)

  }

  handleDescriptionFormChange = event => {
    this.setState({
      description: event.target.value
    });
  }


  render() {





const handleSubmit = event => {

  event.preventDefault()

  //this.props.addNewPromo(this.state)

  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code: this.state.code, description: this.state.description })
  }

  fetch('http://localhost:3000/api/v1/newpromo', headers)
    .then(r => r.json())
    .then(response => {
      //console.log("response back:")
        //console.log(response.status)

        this.setState({
         status: response.status
        });

    })



}

return (

<div style={{ "text-align": 'left' }} className="submitPromo">
      <br></br>
<center></center>
<Row>
    <Col md={{ span: 6, offset: 3 }} >
    { this.state.status === "ready" ?
    <><h2>Submit a new promo code...</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="promocode">
          <Form.Label>Promo Code</Form.Label>
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control type="text" name="promocode" onChange={this.handlePromoFormChange} placeholder="eg. 50PERCENT" required />
        </Form.Group>

        <Form.Group controlId="promodescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" onChange={this.handleDescriptionFormChange} placeholder="Enter promo details" required/>
        </Form.Group>
        <Button variant="dark" type="submit" size="lg">
            Submit New Promo
        </Button>

      </Form></>
      :
      <><><h1>Success!</h1>
      <h3>Your promo code was submitted.</h3></>
      <br></br>
      <a href="/">view all current promo codes</a>
      </>

    }
    </Col>
</Row>




</div>
)
  }
}


export default connect(null, {addNewPromo})(SubmitContainer)
