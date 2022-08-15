import React from "react";
import { cdata } from "../Data/Data";
import "./Computer.css"
import { useNavigate } from "react-router-dom";


const Computer = () => {

    let navigate = useNavigate();
    const select = (value) => {
        const page = value
        let path = "/mobilede";
        navigate(path, {
            state: {
                page
            },
        });
    }
    const ncard = (value) => {
        return (
            <>
                <div className="container3" onClick={() => select(value)}>
                    <div className="container-textsss">
                        <h3 className="name">{value.name}</h3>
                        <h5>{value.Sd} | {value.battery}</h5>
                        <h3 className="name">From Rs {value.rs}* </h3>
                        <h5 className="line">Rs {value.frs}</h5>
                    </div>
                    <img src={value.img} alt="ankit" className="image-2"></img>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="all">
                {cdata.map(ncard)}
            </div>
        </>
    )
}

export default Computer