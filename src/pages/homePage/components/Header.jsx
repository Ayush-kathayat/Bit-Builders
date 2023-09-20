import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineAccountCircle } from 'react-icons/md'

function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <MdOutlineAccountCircle />
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}

export default Header