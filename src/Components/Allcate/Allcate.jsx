import React from "react";
import "./Allcate.css"
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "../Header/Header";
import data, { cdata, ldata } from "../Data/Data";
import { Navigation } from 'swiper';
import Footer from "../Footer/Footer";



const Allcate = () => {
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
      <><SwiperSlide>
        <div className="container con" onClick={() => select(value)}>
          <div className="container-texts">
            <h3 className="name">{value.name}</h3>
            <h5>{value.Sd} | {value.battery}</h5>
            <h3 className="name">From Rs {value.rs}* </h3>
            <h5 className="line">Rs {value.frs}</h5>
          </div>
          <img src={value.img} alt="ankit" className="image-1"></img>
        </div>
      </SwiperSlide>
      </>
    )
  }
  const lcard = (value) => {
    return (
      <><SwiperSlide>
        <div className="container1 con" onClick={() => select(value)}>
          <div className="container-textss">
            <h3 className="name">{value.name}</h3>
            <h5>{value.Sd} | {value.battery}</h5>
            <h3 className="name">From Rs {value.rs}* </h3>
            <h5 className="line">Rs {value.frs}</h5>
          </div>
          <img src={value.img} alt="ankit" className="image-2"></img>
        </div>
      </SwiperSlide>
      </>
    )
  }
  const ccard = (value) => {
    return (
      <><SwiperSlide>
        <div className="container3 con" onClick={() => select(value)}>
          <div className="container-textsss">
            <h3 className="name">{value.name}</h3>
            <h5>{value.Sd} | {value.battery}</h5>
            <h3 className="name">From Rs {value.rs}* </h3>
            <h5 className="line">Rs {value.frs}</h5>
          </div>
          <img src={value.img} alt="ankit" className="image-2"></img>
        </div>
      </SwiperSlide>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="gradient">
        <div className="mo">
          <h3 className="mobi">Mobiles</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{

            200: {
              slidesPerView: 2,
            },

            600: {
              slidesPerView: 3,
            },

          }}
          navigation
        >
          {data.map(ncard)}
        </Swiper>
        <div className="mo">
          <h3 className="mobi">Laptop</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{

            200: {
              slidesPerView: 2,
            },

            770: {
              slidesPerView: 3,
            },

          }}
          navigation
        >
          {ldata.map(lcard)}
        </Swiper>
        <div className="mo">
          <h3 className="mobi">Computer</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{

            200: {
              slidesPerView: 2,
            },

            770: {
              slidesPerView: 3,
            },

          }}
          navigation
        >
          {cdata.map(ccard)}
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export default Allcate