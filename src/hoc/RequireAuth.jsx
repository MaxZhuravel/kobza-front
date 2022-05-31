import { useLocation, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {isAuth}=useContext(AuthContext);

    if(!isAuth){
        return <Navigate to='/invitation' state={{from: location}}/>
    }
  return children;
}

export default RequireAuth