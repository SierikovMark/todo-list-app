import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthNavbar = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand>Todo Tasks application</Navbar.Brand>
                    <Link to='/registration'>
                        <Button>Sign Up</Button>
                    </Link>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default AuthNavbar;
