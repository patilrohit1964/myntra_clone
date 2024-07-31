import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, provider } from '../firebase/firebase';
const Privatecomp = () => {
  // const [user, loading, error] = useAuthState(auth, provider);
  // console.log('user',user.displayName,user.email);
  const auth=localStorage.getItem('number');
  return auth ? <Outlet/> : <Navigate to='/login'/>
}

export default Privatecomp