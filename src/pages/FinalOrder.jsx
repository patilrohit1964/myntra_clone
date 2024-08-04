import React, { useEffect, useState } from 'react'

const FinalOrder = () => {
    const [image, setImage] = useState('https://www.drupal.org/files/project-images/drupal-project-barcodes.png');
    const [tp, setTp] = useState(true);
    function doneOrder() {
        alert('Order has been successfully completed!');
        setTimeout(() => {
            setImage('https://www.sendx.io/hubfs/Email-Messages-for-Order-Confirmation-Page-v3.png');
            setTp(false);
        }, 3000);
        setImage('done order')
    }
    return (
        <div className='text-center'>
            {tp ?
                <div className='container m-auto mt-5 text-center'>
                    <img src={image} alt="" />
                    <button className='btn btn-danger d-block m-auto mt-3' onClick={doneOrder}>Pay Now</button>
                </div> 
                :
                <img src={image} alt="" height={550} width={1000} />
            }
        </div>
    )
}

export default FinalOrder