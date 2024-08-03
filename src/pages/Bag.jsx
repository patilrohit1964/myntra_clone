import React, { useContext } from 'react'
import Footer from '../components/Footer';
import { ContextData } from '../context/ContextApp';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const Bag = () => {
    const auth = localStorage.getItem('number');
    const navigate = useNavigate();
    const { loading, handleLoading } = useContext(ContextData);
    return (
        <div className='bag-comp'>
            {<div className='d-flex justify-content-center mt-5 text-center align-items-center text-secondary'>
                <div>
                    <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" />
                    <h4>Hey, it Feels so Light!</h4>
                    <span>There is Nothing in Your Bag.Let's add some items.</span><br />
                    <button className='btn border-danger text-danger d-inline-block mt-4' onClick={() => navigate('/wishlist')}>ADD ITEMS FROM WISHLIST</button>
                </div>
            </div>}
        </div>
    )
}

export default Bag