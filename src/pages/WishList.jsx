import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loading from '../components/Loading';
import { deleteCard, fetchWishlistData } from '../redux/actions/productAction';
const WishList = () => {

    // react redux data
    const dispatch = useDispatch();
    const { isLoading, cartProducts } = useSelector(state => state.productReducer);

    // ------------------------------------------------
    useEffect(() => {
        dispatch(fetchWishlistData());
    }, [])
    // ------------------------------------------------
    return isLoading ? <Loading /> : (
        <div className='wishlist-comp'>
            {cartProducts.length == 0 ?
                <div className='text-center'>
                    <img src="/wishlist-removebg-preview.png" alt="" height={550} width={500} /><br />
                    <h5 className='text-secondary'>You haven't Saved Anything yet.</h5>
                </div>
                :
                <div>
                    <h4 className='container mt-4'>My Wishlist <span className='text-secondary'>{cartProducts.length} Item</span></h4>
                    <div className='d-flex justify-content-center flex-wrap mt-5'>
                        {cartProducts.length > 0 ? cartProducts.map((e, index) => (
                            <Card style={{ width: '15rem' }} className='mb-3 text-center me-3' key={index}>
                                <Card.Img src={e.image} alt={e.description} />
                                <Card.Body>
                                    <span>{e.rating} <FaStar className='text-primary' /> | {e.ratingCount}</span>
                                    <Card.Title className='pt-2'>{e.title}</Card.Title>
                                    <Card.Text className='text-secondary m-0'>{e.description}</Card.Text><br />
                                    <Card.Text><b>{e.price}</b></Card.Text>
                                    <div className='d-flex justify-content-between'>
                                        <Button variant="danger">
                                            <NavLink to={`/bag/${e.id}`} className='text-white'>Move To Bag</NavLink>
                                        </Button>
                                        <Button variant="danger" onClick={() => dispatch(deleteCard(e.id))}>
                                            Delete
                                        </Button>
                                    </div>
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