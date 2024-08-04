import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { ContextData } from '../context/ContextApp';
import Loading from '../components/Loading';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Form from 'react-bootstrap/Form';
import { FaStar } from 'react-icons/fa';
const Bag = () => {
    const [dataId, setIdData] = useState({});
    const [confirmOrder, setOrder] = useState(true);
    const auth = localStorage.getItem('number');
    const navigate = useNavigate();
    const { id } = useParams();
    const { loading, handleLoading } = useContext(ContextData);
    async function getDataFromBag() {
        const fetchBagData = axios.get(`https://myntra-backend-5dfe.onrender.com/beautyProducts/${id}`)
        const result = (await fetchBagData).data;
        setIdData(result);
    }
    useEffect(() => {
        getDataFromBag();
    }, []);
    return (
        <div className='bag-comp'>
            {confirmOrder ? <Card style={{ width: '20rem' }} className='mt-3 text-center container'>
                <Card.Img src={dataId.image} alt={dataId.description} />
                <Card.Body>
                    <span>{dataId.rating} <FaStar className='text-primary' /> | {dataId.ratingCount}</span>
                    <Card.Title className='pt-2'>{dataId.title}</Card.Title>
                    <Card.Text className='text-secondary m-0'>{dataId.description}</Card.Text><br />
                    <Card.Text><b>{dataId.price}</b></Card.Text>
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