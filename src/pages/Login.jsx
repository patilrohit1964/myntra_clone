import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../firebase/firebase'
import Privatecomp from '../private/Privatecomp'
const Login = () => {
    function handlelogin(){
        signInWithPopup(auth, provider).then(e=>{
            console.log(e.auth);
        })
    }
    return (
        <div>
            <GoogleButton
                onClick={handlelogin}
            />
            <Privatecomp/>
        </div>
    )
}

export default Login