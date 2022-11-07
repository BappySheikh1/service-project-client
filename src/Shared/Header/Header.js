import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
    const {user,userLogOut}=useContext(AuthContext)
   const handleLogOut=()=>{
    userLogOut()
    .then(()=>{

    })
    .catch(err =>{
       console.log(err);
    })
   }

    return (
        <div>
            <h1>I Am Nav</h1>
        </div>
    );
};

export default Header;