import React from 'react';

import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'



class CommentForm extends React.Component {

  render() {

    return (
      <div className="commentForm">
      <strong>Comments</strong>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="comment..."
          aria-label="comment..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
            <Button  variant="dark" type="submit" size="sm">
             Add Comment
         </Button>
        </InputGroup.Append>
      </InputGroup>
      </div>

    )


  }
}

export default CommentForm
