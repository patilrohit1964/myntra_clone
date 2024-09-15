import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUserCircle, FaRegHeart, FaShoppingBag, FaUserAltSlash } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Navbarnav = () => {

    // modal links
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    // part of links
    const Links = [
        { path: "/", link: "HOME" },
        { path: "/mens", link: "MEN" },
        { path: "/womens", link: "WOMEN" },
        { path: "/kids", link: "KIDS" },
        { path: "/home_living", link: "HOME & LIVING" },
        { path: "/beauty", link: "BEAUTY" }
    ]

    const navigate = useNavigate();
    const auth = localStorage.getItem('number');

    // add logout functionality
    const handleClose = () => {
        localStorage.removeItem('number');
        setShow(false);
        navigate('/login');
    };
    // return styling page
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary text-center" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                <Container>
                    <Navbar.Brand ><img src="./myntra_logo.png" alt="" height={50} width={50} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto w-lg-50 routes-link d-flex justify-content-around align-items-center">
                            {Links.map((li, index) => (
                                <Link to={li.path} className='mb-2' key={index}>{li.link}</Link>
                            ))}
                        </Nav>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="w-25 me-5 w-sm-100 d-sm-none d-lg-block"
                            aria-label="Search"
                        />
                        <Nav className='d-flex align-items-center'>
                            {auth ?
                                <div className='cursor-pointer'>
                                    <button onClick={handleShow} className='btn mt-0 p-0'>
                                        <FaUserAltSlash className='text-danger' /><br />
                                        <span className='text-danger'>Logout</span>
                                    </button>
                                    <Modal show={show} onClick={() => setShow(false)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Logout</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body><h5>Confirm to Delete Your Account</h5></Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => setShow(false)}>
                                                Close
                                            </Button>
                                            <Button variant="danger" onClick={handleClose}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                :
                                <NavLink className='position-relative profile-drop d-sm-none d-lg-block'>
                                    <FaRegUserCircle /><br />
                                    <span>Profile <IoMdArrowDropdown /></span>
                                    <div className='dropdown'>
                                        <h6 className='mt-3'><b>Welcome</b></h6>
                                        <span className='d-inline-block mb-2'>To access account and manage orders</span><br />
                                        <NavLink to={'/login'}><button className='btn text-danger border'>LOGIN / SIGNUP</button></NavLink><hr />
                                        <NavLink to={'/login'}>Orders</NavLink><br />
                                        <NavLink to={'/wishlist'}>Wishlist</NavLink>
                                        <hr />
                                        <NavLink>Gift Cards</NavLink><br />
                                        <NavLink>Contact Us</NavLink><br />
                                        <NavLink>Myntra Insider</NavLink> <hr />
                                        <NavLink>Myntra credits</NavLink><br />
                                        <NavLink>Coupon</NavLink><br />
                                        <NavLink>Saved Cards</NavLink><br />
                                        <NavLink>Saved VPA</NavLink><br />
                                        <NavLink>Saved Addresses</NavLink>
                                    </div>
                                </NavLink>
                            }
                            <NavLink className='ms-3' to={'/wishlist'}>
                                <FaRegHeart /><br />
                                WishList
                            </NavLink>
                            {/* <NavLink to={'/bag/:id'} className='m-0 p-0'>
                                <FaShoppingBag /><br />
                                Bag
                            </NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>)
}



export default Navbarnav