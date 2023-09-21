import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home" className='fs-4'>Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}

export default Header