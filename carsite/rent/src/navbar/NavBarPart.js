import React, { useContext, useState } from 'react';
import navlogo from './navimgs/logo.svg'
import Signinpage from './Signinpage';
import { Link } from 'react-router-dom';
import { Addcar } from '../App';
import {FaShoppingCart} from 'react-icons/fa'


function NavBarPart() {
const [show,setshow] =  useState(false)
const {cartdata} = useContext(Addcar)
const  handleclick = ()=>{
    setshow(!show)
  }
  return (
    <div>
      <nav>
        <div className='navbar'>
            <div className='logo-btn'>
                <div className='navbtn' onClick={handleclick}> <i className='bx bx-list-ul'></i></div>
                <div className='navlogo'><img src={navlogo}/></div>
            </div>

            <div className='navsec'>
                <ul id='nav' className={(show) ? "#nav active" : "#nav"}>
                    <li id='nav-close-btn' onClick={handleclick}> <img src={navlogo} height={30} onClick={()=>{window.location.reload()}}/> <span><i className='bx bx-x'></i></span></li>
                    <li><Link to={'/'} className='Link_tag_text nav_link_text'>Home</Link> </li>
                    <li className='Listing'>Listing <i className='bx bx-chevron-down'></i>
                     
                     <div className='Listing-list'>
                        <div> <Link to={'/listing/listinggrid'} className='Link_tag_text'>Listing Grid</Link></div>
                        <div> <Link to={'/listing/listinglist'} className='Link_tag_text'>Listing List</Link></div>
                         {/* <div> <Link to={'/listing/listingdetails'} className='Link_tag_text'>Listing Details</Link></div> */}
                     </div>
                     
                    </li>

                    <li>Pages <i className='bx bx-chevron-down'></i></li>
                    <li>Blog <i className='bx bx-chevron-down'></i></li>
                    <li>Contact</li>
                    <ul className="navsec_signbtn">
                     <li className='sign_in'><Link to={'/signin'} className='Link_tag'> <i className='bx bx-lock'></i>Sign-in</Link></li>
                     <li className='sign_up'><Link to={'/signup'}  className='Link_tag'><i className='bx bx-lock'></i>Sign-up</Link></li>
                    </ul>
                    <li> <Link to={'/addcart'} className='Addcart-product'> <FaShoppingCart/> {cartdata.length > 0 ? <span className='addcart-qua-number'>{cartdata.length}</span>  : '' }</Link> </li>
                </ul>
            </div>

            <div className='Sign_in_up_btn'>
               <button className='sign_in'> <Link to={'/signin'}  className='Link_tag'> <i className='bx bx-user'></i>  Sign-in  </Link></button>
               <button className='sign_up'> <Link to={'/signup'} className='Link_tag'> <i className='bx bx-lock'></i>Sign-up</Link></button>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarPart;



