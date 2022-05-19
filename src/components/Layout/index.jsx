import React, {useState} from 'react'
import { Nav, Modal, Navbar, Button, Container, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import Styles from './LayoutStyles';
import { Footer } from '..';

const Layout = () => {

    const[show,setShow] = useState(false);

    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

  return (
    <>
        <Styles>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/">KOBZA</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/articles">Статті</Link></Nav.Link>
                            <Nav.Link><Link to="/about">Про нас</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="me-2" onClick={handleShow}>Увійти</Button>
                            <Button variant="primary" onClick={handleShow}>Зареєструватись</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>

        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Увійти</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Електронна адреса (email)</Form.Label>
                        <Form.Control type="email" placeholder="Введіть email"/>
                        <Form.Text className="text-muted">Ми ніколи не передаємо ваші дані третім особам</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введіть пароль"/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>

        <Container fluid>
            <Outlet/>
        </Container>

        <Footer>
            &copy; {new Date().getFullYear()} Kobza
        </Footer>
    </>
  )
}

export default Layout;