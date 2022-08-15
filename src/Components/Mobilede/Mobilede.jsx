import React from "react";
import "./Mobilede.css"
import { useLocation } from "react-router-dom";
import { myData } from "../../util";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Mobilede = () => {
  const params = useLocation();
  const name = params.state.page.name
  const img = params.state.page.img
  const sd = params.state.page.Sd
  const frs = params.state.page.frs
  const rs = params.state.page.rs
  const battery = params.state.page.battery

  let navigate = useNavigate();
  const buys = (value) => {
    const page = value
    let path = "/payment";
    navigate(path, {
      state: {
        page
      },
    });
  }

  const cards = () => {
    myData.addData(params.state.page)
    toast.success("Added to Cart", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }
  return (
    <>
      <div className="details">
        <div className="details-img">
          <img className="de-img" src={img} alt="ankit" />
          <div className="buy-add">
            <button className="buy" onClick={() => buys(rs)}>Buy</button>
            <button className="add-card" onClick={cards}>Add to Cart</button>
          </div>
        </div>
        <div className="details-text">
          <div className="det-name">{name}</div>
          <div className="sd-bt">
            <span className="det-sd">{sd}  |</span>
            <span className="det-battery">{battery}</span>
          </div>
          <div className="rs-frs">
            <span className="rs">From Rs {rs}*</span>
            <span className="frs">Rs {frs}</span>
          </div>
          <p className="paraa">Great Freedom Festival Sale 2022 brought some of the best offers and irresistible discounts on a wide range of products including smartphones, tablets, laptops, wearables, and many other electronics. Now, we are entering the last day of the Amazon Great Freedom Festival Sale. This is the last chance to grab the best products on offer as the sale ends on August 10th at midnight. To make things easier for you, we have rounded up some of the best products on the sale to help you grab the deals before the big sale events ends in just a few hours. That said, here are the best deals you can grab currently.</p>
        </div>
      </div>
      <ToastContainer />

    </>
  )
}

export default Mobilede