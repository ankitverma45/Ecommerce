import React, { useState } from "react";
import { GrAddCircle } from 'react-icons/gr';
import { GrSubtractCircle } from 'react-icons/gr';
import { myData } from "../util";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Select = (value) => {
    const [count, setcount] = useState(1)
    let inc = (value, sss, ddd) => {
        setcount(count + 1)
        sss(ddd + value.rs)

    }
    let dec = (value, sss, ddd) => {
        if (count > 1) {
            setcount(count - 1)
            sss(ddd - value.rs)

        } else {
            alert("one is limited")
        }
    }

    const del = (vale, ccc, pp, ddd, sss, rs) => {
        let newMyData = pp.filter(value => value.name !== vale)
        myData.updateData(newMyData)
        ccc(myData.getData())
        const ooo = count * rs
        sss(ddd - ooo)

        toast.success(`Removed ${vale}`, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const imgg = value.data.img
    return (
        <>
            <div className="cartt">
                <div >
                    <img src={imgg} className="imgg" alt="ankit"></img>
                    <div className="add-sub">
                        <div><GrSubtractCircle size="25" onClick={() => dec(value.data, value.name, value.add)} /></div>
                        <input className="item" value={count}  ></input>
                        <div><GrAddCircle size="25" onClick={() => inc(value.data, value.name, value.add)} /></div>
                    </div>
                </div>
                <div className="cart-name">
                    <div>{value.data.name}</div>
                    <div >Rs. {value.data.rs}</div>
                    <button className="remove" onClick={() => del(value.data.name, value.ppp, value.lll, value.add, value.name, value.data.rs)}>REMOVE</button>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}



export { Select }