import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                                {
                                    user ?
                                        <button className='btn btn-link text-white text-decoration-none link' onClick={handleSignOut}>LOGOUT</button>
                                        :
                                        <CustomLink to="/login">LOGIN</CustomLink>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;