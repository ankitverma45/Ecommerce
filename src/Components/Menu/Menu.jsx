import React from "react";
import "./Menu.css"
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="navlist">
                <NavLink  to="/" ><div className="navlist-item item1">All Categories</div></NavLink>
                <NavLink  to="mobile"><div className="navlist-item item1">Mobiles</div></NavLink>
                <NavLink  to="laptop"><div className="navlist-item item1">Laptops</div></NavLink>
                <NavLink  to="computer"><div className="navlist-item item1">Computer</div></NavLink>
            </div>
        </>
    )
}

export default Menu