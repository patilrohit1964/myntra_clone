import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaShoppingBag, FaBookmark } from "react-icons/fa";
import Loading from '../components/Loading';
import { ContextData } from '../context/ContextApp';
import toast from 'react-hot-toast';
const ProductDetails = () => {

    // context data
    const { handleLoading, loading } = useContext(ContextData);
    // --------------------------------------------------
    const [data, setData] = useState('');
    const { id } = useParams();
    const auth = localStorage.getItem('number');
    // -----------------------------------------------
    async function ProductGetId() {
        let data = axios.get(`https://myntra-backend-5dfe.onrender.com/beautyProducts/${id}`);
        let result = (await data).data;
        setData(result);
        handleLoading(false);
    }

    // add item in wishlist
    async function addItem() {
        if (auth) {
            let result = axios.post(`https://myntra-backend-5dfe.onrender.com/cart`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let finalResult = await result;
            if (finalResult.status == 201) {
                toast.success('added successfully');
            } else {
                toast.error('some error try after few minutes');
            }
        } else {
            toast.error('Please login first for add to wishlist');
        }
    }
    // --------------------------------------
    useEffect(() => {
        ProductGetId();
    }, []);
    // -------------------------------------
    return loading ? <Loading /> : (
        <div className='prdetail-comp'>
            <div className='d-flex container justify-content-around prdetail-parent mt-5 flex-wrap overflow-hidden'>
                <div className='prImage border'>
                    <img src={data.image} alt={data.description} />
                </div>
                <div className='prDetails text-center pt-5 border'>
                    <h3>{data.title}</h3>
                    <h4 className='text-secondary pt-2'>{data.description}</h4>
                    <h6 className='mt-4'>{data.price}</h6>
                    <div className='m-auto mt-3'>
                        <span>Select Size</span>
                        <ul className='d-flex justify-content-between list-unstyled mt-3 mb-5'>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                    <button className="btn btn-danger text-white me-4"><FaShoppingBag /> ADD TO BAG</button>
                    <button className="btn border-secondary" onClick={addItem}><FaBookmark /> WISHLIST</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails