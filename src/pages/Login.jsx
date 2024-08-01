// import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
// import GoogleButton from 'react-google-button'
// import { auth, provider } from '../firebase/firebase'
// import Privatecomp from '../private/Privatecomp'
const Login = () => {
    const [userContact, setContact] = useState('');
    const [valid, setValid] = useState(false);
    const navigate=useNavigate();
    function handlelogin(e) {
        e.preventDefault();
        if (!+userContact || userContact.length <10) {
            setValid(true);
            return 0;
        }else{
            setValid(false);
            localStorage.setItem('number',JSON.stringify(userContact));
            alert('login successfully');
            navigate('/wishlist');
        }
        // signInWithPopup(auth, provider).then(e => {
        //     console.log(e.auth);
        // })
    }
    return (
        <div>
            <form action="" className='mt-5 bg-white' onSubmit={handlelogin}>
                <div className='img-div'><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg" alt="network problem" /></div>
                <div className='form-text p-4'>
                    <h5 className='mb-4'><span><b>Login</b> or <b>Signup</b></span></h5>
                    <Form.Control type='text' placeholder='Mobile Number*' onChange={(e) => setContact(e.target.value)} maxLength={10} />
                    {valid ? <span className='text-danger ps-1'>Please Enter a Valid Mobile Number (10 digit)</span> : ''}
                    <div className='text-center mt-4'>
                        <span className='fs-7'>By Continuing, I agree to the <span className='text-danger'>Terms of Use</span>& <span className='text-danger'>Privacy Policy</span></span>
                    </div>
                </div>
                <button className='bg-danger btn text-white w-75 m-auto d-block'>Continue</button>
                <div className='mt-4 ps-5'>
                    <span>Have trouble logging in ? <span className='text-danger'>Get help</span></span>
                </div>
            </form>
        </div>
    )
}

export default Login