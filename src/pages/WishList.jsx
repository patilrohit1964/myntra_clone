import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
const WishList = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // fetch wisht list data
    async function fetchData() {
        let fetchData = axios.get('http://localhost:3000/cart');
        let result = (await fetchData).data;
        setData(result);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {data.length > 0 ? data.map((e, index) => (
                <Card style={{ width: '15rem' }} className='mb-3 text-center me-3' key={index}>
                    <Card.Img src={e.image} alt={e.description} />
                    <Card.Body>
                        <span>{e.rating} <FaStar className='text-primary' /> | {e.ratingCount}</span>
                        <Card.Title className='pt-2'>{e.title}</Card.Title>
                        <Card.Text className='text-secondary m-0'>{e.description}</Card.Text><br />
                        <Card.Text><b>{e.price}</b></Card.Text>
                        <Button variant="danger" onClick={handleShow}>
                            Move to Bag
                        </Button>
                        <Modal show={show} onHide={handleClose} className='h-50'>
                            <Modal.Header closeButton>
                                <div className='d-flex justify-content-between w-75'>
                                    <img src={e.image} alt="" height={80} width={80} />
                                    <div>
                                        <h5>{e.description}</h5>
                                        <h6>{e.price} <span className='text-danger'>{e.discountPercentage}</span></h6>
                                    </div>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <Button variant='danger w-75 ms-5' onClick={handleClose}>Done</Button>
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
            )) : <h1 className='text-center mt-5 ps-5'>Sorry Products Not available!!!</h1>}
        </div>
    )
}

export default WishList