import React from "react";
import { Routes, Route } from "react-router-dom";
import Mobile from "../Mobile/Mobile";
import Menu from "../Menu/Menu";
import Allcate from "../Allcate/Allcate";
import Laptop from "../Laptop/Laptop";
import Computer from "../Computer/Computer";
import Mobilede from "../Mobilede/Mobilede";
import Card from "../Card/Card";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";

const All = () => {

    return (
        <>
        <Menu />
         <Routes>
            <Route path="/" element={<Allcate />}/>
            <Route path="mobile" element={<Mobile />} />
            <Route path="laptop"  element={<Laptop />} />
            <Route path="computer" element={<Computer />}/>
            <Route path="mobilede" element={<Mobilede />}/>
            <Route path="cart" element={<Card />}/>
            <Route path="login" element={<Login />}/>
            <Route path="payment" element={<Payment />}/>
         </Routes>
        </>
    )
}

export default All