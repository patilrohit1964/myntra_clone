import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Loading from '../components/Loading';
import { ContextData } from '../context/ContextApp';

const WishList = () => {

    // context data
    const { handleLoading, loading } = useContext(ContextData);
    // -------------------------------------------
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = (id) => {
        // console.log(id);
        setShow(false);
    };
    const handleShow = (id) => {
        setShow(true);
        console.log(id);
    };
    // fetch wisht list data
    async function fetchWishlistData() {
        let fetchData = axios.get('https://myntra-backend-5dfe.onrender.com/cart');
        let result = (await fetchData).data;
        setData(result);
        handleLoading(false);
    }

    // delete item from wishlist
    async function deleteCard(id) {
        let fetchData = axios.delete(`https://myntra-backend-5dfe.onrender.com/cart/${id}`);
        let result = await fetchData;
        // if (result.statusText) {
        alert("Remove Data From Wishlist Successfully");
        fetchWishlistData();
        // }
    }
    // ------------------------------------------------
    useEffect(() => {
        fetchWishlistData();
    }, [])
    // ------------------------------------------------
    return loading ? <Loading /> : (
        <div className='wishlist-comp'>
            {data.length == 0 ?
                <div className='text-center'>
                    <img src="/wishlist-removebg-preview.png" alt="" height={550} width={500} /><br />
                    <h5 className='text-secondary'>You haven't Saved Anything yet.</h5>
                </div>
                :
                <div>
                    <h4 className='container mt-4'>My Wishlist <span className='text-secondary'>{data.length} Item</span></h4>
                    <div className='d-flex justify-content-center flex-wrap mt-5'>
                        {data.length > 0 ? data.map((e, index) => (
                            <Card style={{ width: '15rem' }} className='mb-3 text-center me-3' key={index}>
                                <Card.Img src={e.image} alt={e.description} />
                                <Card.Body>
                                    <span>{e.rating} <FaStar className='text-primary' /> | {e.ratingCount}</span>
                                    <Card.Title className='pt-2'>{e.title}</Card.Title>
                                    <Card.Text className='text-secondary m-0'>{e.description}</Card.Text><br />
                                    <Card.Text><b>{e.price}</b></Card.Text>
                                    <div className='d-flex justify-content-between'>
                                        <Button variant="danger" onClick={() => handleShow(e.id)}>
                                            Move to Bag
                                        </Button>
                                        <Button variant="danger" onClick={() => deleteCard(e.id)}>
                                            Delete
                                        </Button>
                                    </div>
                                    <Modal show={show} onClick={() => setShow(false)} className='h-50'>
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
                                            <Button variant='danger w-75 ms-5' onClick={() => handleClose(e.id)}>Done</Button>
                                        </Modal.Body>
                                    </Modal>
                                </Card.Body>
                            </Card>
                        )) : <h1 className='text-center mt-5 ps-5'>Sorry Your Wishlist is Empty !!!</h1>}
                    </div>
                </div>
            }

        </div>
    )
}

export default WishList