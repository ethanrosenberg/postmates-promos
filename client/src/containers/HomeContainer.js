import React from 'react';

import { Row, Col, Jumbotron, Container } from 'react-bootstrap'
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
              <Jumbotron fluid>
                <Container>
                  <h1>{promo.code}</h1>
                  <p>
                    {promo.description}
                  </p>
                </Container>
              </Jumbotron>
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
