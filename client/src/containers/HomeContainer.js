import React from 'react';

import { Row, Col, Jumbotron, Container, ButtonToolbar, Button } from 'react-bootstrap'
import { connect } from 'react-redux';

import { getPromos } from '../actions/promoActions'

import  CommentForm  from '../components/CommentForm'

class HomeContainer extends React.Component {
  constructor () {
    super()
     this.state = {
       code: '',
       description: '',
       status: 'ready',

     }
   }
  componentDidMount() {
    //console.log("mounted")

      this.props.getPromos()

    }




  render() {

    const hasComments = promo => {
      return promo.comments.length > 0
    }
    const handleButtonSubmit = event => {

     event.preventDefault()

     console.log(event.target.id)

     //this.props.addNewPromo(this.state)

     const headers = {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({ promo_id: event.target.id })
     }

     fetch('http://localhost:3000/api/v1/update_rating', headers)
       .then(r => r.json())
       .then(response => {
         //console.log("response back:")
           //console.log(response.status)

           this.setState({
            addressInfo: {
              ...this.state.addressInfo,
              city: 'New York City'
            }
          });

      console.log(response)

      this.props.getPromos()

       })
   }



    return (
<>
<br></br>
<br></br>
      <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <h1>Lastest Promos</h1>
          {
            this.props.promos.map((promo, index) => (
              <>
              <p align="left">{promo.created_at}</p>
              <Jumbotron fluid>

                <Container>

                  <h1>{promo.code}</h1>
                  <p>
                    {promo.description}
                  </p>
                  <Button onClick={handleButtonSubmit} id={promo.id} variant="success" size="lg">
                    Works!
                  </Button>|
                  <Button variant="danger" size="lg">
                    Does not work
                  </Button>

                </Container>
                { promo.success > 0 || promo.failure  > 0
                  ?
                  <Container align="left">
                    {

                        <>
                        <h5>Ratings</h5>
                        <p>{"Success: " + promo.success + " Failure: " + promo.failure}</p>
                        { hasComments(promo) ? <strong>Comments ({promo.comments.length})</strong> : null}

                        {
                          promo.comments.map((comment, index) => (
                            <p>{ index + 1 + ". " + comment.content }</p>
                          ))

                        }
                        { hasComments ? <CommentForm promo_id={promo.id} /> : null}

                        </>

                    }
                  </Container>
                : null
              }
              </Jumbotron>
              </>
            ))
          }
          </Col>
      </Row>

</>
    )
  }
}

const mapStateToProps = state => {
  return {
    promos: state.promos
  };
}


export default connect(mapStateToProps, {getPromos})(HomeContainer)
