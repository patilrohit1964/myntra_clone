import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaShoppingBag, FaBookmark } from "react-icons/fa";
const ProductDetails = () => {

    const [data, setData] = useState('');
    const { id } = useParams();
    async function ProductGetId() {
        let data = axios.get(`http://localhost:3000/beautyProducts/${id}`);
        let result = (await data).data;
        setData(result);
    }

    // add item in wishlist
    async function addItem(){
        let result=axios.post(`http://localhost:3000/cart`,data,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        let finalResult=await result;
        if(finalResult.status==201){
            alert('added successfully');
        }
    }

    useEffect(() => {
        ProductGetId();
    }, []);
    return (
        <div className='prdetail-comp'>
            <div className='d-flex container justify-content-between prdetail-parent mt-5'>
                <div className='prImage border'>
                    <img src={data.image} alt="" />
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