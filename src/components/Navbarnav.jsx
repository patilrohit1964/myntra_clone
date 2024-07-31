import React from 'react'
import { Link } from 'react-router-dom'
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
        { path: "/beauty", link: "BEAUTY" }
    ]

    // return styling page
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary text-center" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                <Container>
                    <Navbar.Brand href="#home"><img src="./myntra_logo.png" alt="" height={50} width={50} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto w-50 routes-link d-flex justify-content-around">
                            {Links.map((li, index) => (
                                <Link to={li.path} key={index}>{li.link}</Link>
                            ))}
                        </Nav>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="w-25 me-5"
                            aria-label="Search"
                        />
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link href="#deets">
                                <NavDropdown id="collapsible-nav-dropdown" title={<FaRegUserCircle/>}>
                                    <NavDropdown.Item href="#action/3.2">
                                        <h6><b>Welcome</b></h6>
                                        <span>To access account and manage orders</span><br />
                                        <button className='btn text-danger border'>LOGIN / SIGNUP</button>
                                    </NavDropdown.Item> <hr />
                                    <NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Wishlist</NavDropdown.Item>
                                    <hr />
                                    <NavDropdown.Item href="#action/3.4">Gift Cards</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Myntra Insider</NavDropdown.Item> <hr />
                                    <NavDropdown.Item href="#action/3.4">Myntra credits</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Coupon</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Saved Cards</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Saved VPA</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Saved Addresses</NavDropdown.Item>
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