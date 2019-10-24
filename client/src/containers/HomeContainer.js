import React from 'react';

import { Row, Col, Jumbotron, Container, ButtonToolbar, Button } from 'react-bootstrap'
import { connect } from 'react-redux';

import { getPromos } from '../actions/promoActions'

class HomeContainer extends React.Component {

  componentDidMount() {
    //console.log("mounted")

      this.props.getPromos()

    }


  render() {
    return (
<>
<br></br>
<br></br>
      <Row>
          <Col md={{ span: 6, offset: 3 }}>
          {
            this.props.promos.map((promo, index) => (
              <><p align="left">{promo.created_at}</p>
              <Jumbotron fluid>
                <Container>
                  <h1>{promo.code}</h1>
                  <p>
                    {promo.description}
                  </p>
                  <Button variant="primary" size="lg">
                    Large button
                  </Button>
                  <Button variant="secondary" size="lg">
                    Large button
                  </Button>

                </Container>
                {promo.ratings.length > 0
                  ?
                  <Container align="left">

                    {
                        promo.ratings.map((rating, index) => (
                        <>
                        <h5>Ratings</h5>
                        <p>{rating.id + "." + " Success: " + rating.success + " Failure: " + rating.failure}</p>
                        <p>{"Comment: " + rating.comment}</p></>
                      ))
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
