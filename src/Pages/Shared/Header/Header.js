import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky-top'>
            <div className='my-nav'>
                <Navbar bg="danger" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className='fs-1 fw-bold'>To-do App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <CustomLink to="/">HOME</CustomLink>
                                <CustomLink to="/login">LOGIN</CustomLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;