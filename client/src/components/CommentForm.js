import React from 'react';

import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'
//import ToastForm from '../components/ToastForm'

import { getPromos } from '../actions/promoActions'

import { connect } from 'react-redux';



class CommentForm extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    promo_id: props.promo_id,
    comment: '',
    success: ''
  }
}

handleCommentFormChange = event => {
   this.setState({
     comment: event.target.value
   });
 }


  render() {


    const handleCommentSubmit = event => {

     event.preventDefault()

     const headers = {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({ promo_id: this.state.promo_id, content: this.state.comment })
     }

     fetch('http://localhost:3000/api/v1/add_comment', headers)
       .then(r => r.json())
       .then(response => {

         this.setState({
           success: true
         })

      this.props.getPromos()

       })

   }

    return (
      <div className="commentForm">

      <strong>Add Comment</strong>
      <Form onSubmit={handleCommentSubmit} >
      <InputGroup className="mb-3">
        <FormControl
          placeholder="comment..."
          aria-label="comment..."
          aria-describedby="basic-addon2"
          onChange={this.handleCommentFormChange}
        />
        <InputGroup.Append>
            <Button variant="dark" type="submit" size="sm">
             Add Comment
         </Button>
        </InputGroup.Append>
      </InputGroup>
      </Form>
      </div>

    )


  }
}

export default connect(null, {getPromos})(CommentForm)
