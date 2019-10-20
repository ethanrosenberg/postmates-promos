import React from 'react';

import { Row, Col } from 'react-bootstrap'
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
      <Row>
          <Col md={{ span: 6, offset: 3 }}>
          {
            this.props.promos.map((promo, index) => (
              <p>{promo.code}</p>
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
