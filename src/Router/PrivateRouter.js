import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loadding}=useContext(AuthContext)
    const location =useLocation()

    if(loadding){
        return <p>Loadding...........</p>
    }

    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children ;
};

export default PrivateRouter;