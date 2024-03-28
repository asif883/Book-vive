import { NavLink } from "react-router-dom";
import './nav.css'


const Nav = () => {

   
    return (
        <div className="mt-4">
           <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-start">
                <li><NavLink className="text-xl mr-6">Home</NavLink></li>
                <li><NavLink className="text-xl mr-6">Listed Books</NavLink></li>
                <li><NavLink className="text-xl">Pages to Read</NavLink></li>
                </ul>
                </div>
                <a className="font-bold text-4xl">Book-Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-medium text-[#131313CC] px-1">
                <NavLink to="/" className="text-xl mr-6">Home</NavLink>
                <NavLink to="/listed books" className="text-xl mr-6">Listed Books</NavLink>
               <NavLink to="/read pages" className="text-xl mr-6">Pages to Read</NavLink>
               <NavLink to="/blog" className="text-xl ">Blogs</NavLink>
                
               
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#23BE0A] text-white mr-3">Sing In</a>
                <a className="btn bg-[#59C6D2] text-white">Sing Up</a>
            </div>
            </div>
     </div>
    );
};

export default Nav;