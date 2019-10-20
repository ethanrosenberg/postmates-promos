import React from 'react';


import { Navbar, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5bda29fccff7d254a5f13a5f/5be29fd2b83aa80726c8bb40_carditem-sourceico-postmates.png"
          width="50"
          height="50"
          padding-right="10"
          className="d-inline-block"
        />
        { ' Postmates Promos' }
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">View All</Nav.Link>
        <Nav.Link href="/submit">Submit a Promo</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>

  )
}

export default NavigationBar
