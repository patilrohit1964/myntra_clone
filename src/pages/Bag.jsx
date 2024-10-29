import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FaStar } from 'react-icons/fa';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { ContextData } from '../context/ContextApp';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromBag } from '../redux/actions/productAction';
const Bag = () => {

    // redux
    const dispatch = useDispatch();
    const { isloading, getWithId } = useSelector((state) => state.productReducer);
    const { auth } = useSelector((state) => state.authReducer);
    const [confirmOrder, setOrder] = useState(true);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDataFromBag(id));
    }, []);
    return isloading ? <Loading /> : (
        <div className='bag-comp'>
            {confirmOrder ? <Card style={{ width: '20rem' }} className='mt-3 text-center container'>
                <Card.Img src={getWithId.image} alt={getWithId.description} />
                <Card.Body>
                    <span>{getWithId.rating} <FaStar className='text-primary' /> | {getWithId.ratingCount}</span>
                    <Card.Title className='pt-2'>{getWithId.title}</Card.Title>
                    <Card.Text className='text-secondary m-0'>{getWithId.description}</Card.Text><br />
                    <Card.Text><b>{getWithId.price}</b></Card.Text>
                    <Button variant="danger" className='text-white'>
                        <NavLink to={'/orderComp'} className='text-white'>Place Order Now</NavLink>
                        {/* Place Order Now */}
                    </Button>
                </Card.Body>
            </Card> :
                <div className='d-flex justify-content-center mt-5 text-center align-items-center text-secondary'>
                    <div>
                        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" />
                        <h4>Hey, it Feels so Light!</h4>
                        <span>There is Nothing in Your Bag.Let's add some items.</span><br />
                        <button className='btn border-danger text-danger d-inline-block mt-4' onClick={() => navigate('/wishlist')}>ADD ITEMS FROM WISHLIST</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Bag