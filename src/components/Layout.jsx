import React from 'react'
import { Nav, Navbar, Button} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";


const Layout = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand>KOBZA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id = "responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/">Головна</Link></Nav.Link>
                    <Nav.Link><Link to="/articles">Статті</Link></Nav.Link>
                    <Nav.Link><Link to="/about">Про нас</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" className="me-2">Ввійти</Button>
                    <Button variant="primary">Зареєструватись</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Outlet/>
        <footer>2022</footer>
    </>
  )
}

export {Layout}