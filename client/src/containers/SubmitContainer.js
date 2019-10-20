import React from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap'

import { connect } from 'react-redux';

import { addNewPromo, updatePromoForm } from '../actions/promoActions'

class SubmitContainer extends React.Component {

  constructor () {
    super()
     this.state = {
       code: '',
       description: ''
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

  this.props.addNewPromo(this.state)



}

return (

<div style={{ "text-align": 'left' }} className="submitPromo">
      <br></br>
<center><h2>Submit a new promo code...</h2></center>
<Row>
    <Col md={{ span: 6, offset: 3 }} >
    {
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="promocode">
          <Form.Label>Promo Code</Form.Label>
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control type="text" name="promocode" onChange={this.handlePromoFormChange} placeholder="eg. 50PERCENT" />
        </Form.Group>


        <Form.Group controlId="promodescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" onChange={this.handleDescriptionFormChange} placeholder="Enter promo details" />
        </Form.Group>
        <Button variant="dark" type="submit" size="lg">
            Submit New Promo
        </Button>

      </Form>
    }
    </Col>
</Row>




</div>
)
  }
}


export default connect(null, {addNewPromo})(SubmitContainer)
