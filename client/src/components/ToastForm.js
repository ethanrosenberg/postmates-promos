import React from 'react';

import { Row, Col, Toast, Button, } from 'react-bootstrap'

import { connect } from 'react-redux';



class ToastForm extends React.Component {
  constructor () {
    super()
     this.state = {
       show: true,
       setShow: false

     }
   }

render() {
//  const [show, setShow] = useState(false);

const onToastClose = event => {
  this.setState({
    show: false
  })
}

const onSetShow = event => {
  this.setState({
    setShow: true
  })
}

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={onToastClose} show={this.state.show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    
    </Row>
  );
}

}

export default ToastForm;
