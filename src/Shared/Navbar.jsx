import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Navbar = () => {
   const { user, signOutUser } = useContext(AuthContext);


   const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      console.log("signed out user");
    })
    .catch(error=>{
      console.log(error);
    })
   }

    const links=<>
      <li><NavLink to='/'>Home</NavLink></li>
       
    </>
    return (
  <div>
  <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-purple-700">Job-Hunters</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {
            user ? (
              <button onClick={handleSignOut} className="btn">Sign Out</button>
            ) : (
              <>
                <NavLink className="btn" to="/register">Register</NavLink>
                <NavLink className="btn" to="/signIn">Sign In</NavLink>
              </>
            )
          }
  </div>
</div>
        </div>
    );
};

export default Navbar;