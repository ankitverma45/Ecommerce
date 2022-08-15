import React from "react";
import Image from "../../Image/pngwing.com.png"
import "./Header.css"

const Header = () => {

    return (
        <>
        <div className="header">
            <div className="header-item">
                <div className="header-text">
                    <h1>Flat 10 % Cashback</h1>
                    <h3>On your First Purchase</h3>
                    <div className="sbi">
                        <div className="sbi-color">
                            <span className="Sbi-white">SBI <span className="sbi-blue">Card</span></span>
                        </div>
                        <div>
                            <div className="instant">10 % Instant Discount*</div>
                            <div className="credit">With SBI Credit Card</div>
                        </div>
                    </div>
                </div>
                <img src={Image} alt="ankit" className="img-1"></img>
            </div>
        </div>
        </>
    )
}

export default Header