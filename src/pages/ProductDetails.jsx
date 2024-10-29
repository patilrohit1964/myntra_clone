import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaBookmark, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { addItem, ProductGetId } from '../redux/actions/productAction';
const ProductDetails = () => {

    // redux data
    const dispatch = useDispatch();
    const { isLoading, getWithId } = useSelector((state) => state.productReducer);
    const auth = localStorage.getItem("number");

    // --------------------------------------------------
    const { id } = useParams();
    // --------------------------------------
    useEffect(() => {
        dispatch(ProductGetId(id));
    }, []);
    // -------------------------------------
    return isLoading ? <Loading /> : (
        <div className='prdetail-comp'>
            <div className='d-flex container justify-content-around prdetail-parent mt-5 flex-wrap overflow-hidden'>
                <div className='prImage border'>
                    <img src={getWithId.image} alt={getWithId.description} />
                </div>
                <div className='prDetails text-center pt-5 border'>
                    <h3>{getWithId.title}</h3>
                    <h4 className='text-secondary pt-2'>{getWithId.description}</h4>
                    <h6 className='mt-4'>{getWithId.price}</h6>
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
                    <button className="btn border-secondary" onClick={() => {
                        if (auth) {
                            dispatch(addItem(getWithId));
                        } else {
                            toast.error("please Login to add");
                        }
                    }
                    }><FaBookmark /> WISHLIST</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails