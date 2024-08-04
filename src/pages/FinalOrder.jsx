import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FinalOrder = () => {
    const [image, setImage] = useState('https://www.drupal.org/files/project-images/drupal-project-barcodes.png');
    const [check,setCheck]=useState('Pay Now');
    const [waiting, setWaiting] = useState(true);
    const navigate=useNavigate();
    function doneOrder() {
        alert('Order has been successfully completed!');
        setCheck('Please Waiting for Confirmation...')
        setTimeout(() => {
            setImage('https://www.sendx.io/hubfs/Email-Messages-for-Order-Confirmation-Page-v3.png');
            setWaiting(false);
            
        },2000);
    }
    return (
        <div className='text-center'>
            {waiting ?
                <div className='container m-auto mt-5 text-center'>
                    <img src={image} alt="" />
                    <button className='btn btn-danger d-block m-auto mt-3' onClick={doneOrder}>{check}</button>
                </div> 
                :
                <div>
                    <img src={image} alt="" height={550} width={1000} /><br />
                    <button className='btn btn-danger d-inline-block mt-3' onClick={()=>navigate('/')}>Go To Wishlist</button>
                </div>
            }
        </div>
    )
}

export default FinalOrder