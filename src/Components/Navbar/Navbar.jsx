import React from "react";
import "./Navbar.css"
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {  NavLink } from "react-router-dom";



const Navbar = () => {

  return (
    <>
      <div className="nav">
        <div className="logo">Ankit</div>
        <div className="select-search">
          <input type="text" placeholder="Search"></input>
          <div className="search">
            <AiOutlineSearch size="30" />
          </div>
        </div>
       <div className="card-sign">
        <NavLink to="cart" className="card-de"><div className="card">
            <AiOutlineShoppingCart size="30" />
          </div></NavLink>
          <NavLink to="login"><div className="sign">Sign in</div></NavLink>
        </div>
      </div>
    </>
  )
}
export default Navbar