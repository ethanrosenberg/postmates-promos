import React from 'react';

import { Row, Col, Jumbotron, Button } from 'react-bootstrap'


class FooterContainer extends React.Component {

  render() {

    const footerStyle = {
      paddingTop: '9vh',
      height: '60px'
    };

      return (
  <>
        <Row style={footerStyle}>
            <Col md={{ span: 7, offset: 3 }}>
            <p>This website is in no way sponsored, endorsed or administered by, or associated with Postmates.com although we do love them!</p>
            </Col>
        </Row>

  </>
      )

  }

}

export default FooterContainer
