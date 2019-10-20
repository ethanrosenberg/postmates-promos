import React from 'react';

import { Row, Col } from 'react-bootstrap'
class HomeContainer extends React.Component {

  componentDidMount() {

      fetch('http://localhost:3000/api/v1/promos')
        .then(r => r.json())
        .then(response =>{
          console.log(response)

          this.setState({
            mostPopular: response
          })

        })

    }


  render() {
    return (
<>
      <Row>
          <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
      <p>All Promos</p>
</>
    )
  }
}


export default HomeContainer
