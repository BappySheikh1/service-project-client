import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
    const {user,userLogOut}=useContext(AuthContext)
   const handleLogOut=()=>{
    userLogOut()
    .then(()=>{
      toast.success('Log Out Successfully',{autoClose: 500})
    })
    .catch(err =>{
       console.log(err);
    })
   }
   
   const menuItems=<>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
    
    {
      user?.uid ? 
      <>
      <li className='font-semibold'><Link to='/myreview'>My Review</Link></li>
      <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
      <li className='font-semibold'><button onClick={handleLogOut}>Log Out</button></li> 
      </>
      :
      <li className='font-semibold'><Link to='/login'>Log in</Link></li>

    }

    </>
    return (
        <div>
        <div  className="navbar bg-gray-300 h-20 px-10">
<div className="navbar-start">
 <div className="dropdown">
   <label tabIndex={0} className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     <p></p>
   </label>
   <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     {menuItems}
   </ul>
 </div>
 <Link to='/' className='btn btn-ghost normal-case text-xl'> 
 <h5 className='text-3xl font-bold text-red-800'>Wildzy</h5>
 </Link>
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal p-0">
   {menuItems}
 </ul>
</div>
<div className="navbar-end">
    
     {
      user?.uid ? <>
       <figure>
      <img style={{borderRadius:'50%',width:'40px'}} src={user?.photoURL} alt="" />
    </figure>
      </>
      : 
      <> <FaUser /></>
     }
   

</div>
</div>
     </div>
    );
};

export default Header;