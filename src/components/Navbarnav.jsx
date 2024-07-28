import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaRegUserCircle, FaRegHeart, FaShoppingBag } from "react-icons/fa";
const Navbarnav = () => {
    // part of links
    const Links = [
        { path: "/", link: "HOME" },
        { path: "/mens", link: "MEN" },
        { path: "/womens", link: "WOMEN" },
        { path: "/kids", link: "KIDS" },
        { path: "/home_living", link: "HOME & LIVING" },
        { path: "/beauty", link: "BEAUTY" },
        { path: "/studio", link: "STUDIO" }
    ]

    // return styling page
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary text-center" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                <Container>
                    <Navbar.Brand href="#home"><img src="./myntra_logo.png" alt="" height={50} width={50} className='object-cover' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto routes-link d-flex justify-content-around">
                            {Links.map((li,index)=>(
                                <Link to={li.path} key={index}>{li.link}</Link>
                            ))}
                        </Nav>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="w-25"
                            aria-label="Search"
                        />
                        <Nav>
                            <Nav.Link href="#deets">
                                <FaRegUserCircle className='m-0 p-0' />
                                <NavDropdown title="Profile" id="collapsible-nav-dropdown" className='m-0 p-0'>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <FaRegHeart /><br />
                                WishList
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <FaShoppingBag /><br />
                                Bag
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>)
}



export default Navbarnav