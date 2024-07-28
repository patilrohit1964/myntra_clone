import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from '../firebase/firebase';
const Privatecomp = () => {
  const [user, loading, error] = useAuthState(auth, provider);
  // console.log('user',user.displayName,user.email);
  return (
    <div>Privatecomp</div>
  )
}

export default Privatecomp