import React from "react";
import "./Payment.css"
import { useLocation } from "react-router-dom";

const Payment = () => {
    const params = useLocation();
    const rs=params.state.page

    return (
        <><div className="rrr">
            <div className="row" style={{marginTop:"130px"}}>
                <div className="col-75">
                    <div className="container7">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-50">
                                    <h3>Address</h3>
                                    <label for="fname"> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Enter your name" className="inpu" />
                                    <label for="email"> Email</label>
                                    <input type="text" id="email" name="email" placeholder="email@example.com" className="inpu"/>
                                    <label for="adr">Address</label>
                                    <input type="text" id="adr" name="address" placeholder="Address" className="inpu"/>
                                    <label for="city"> City</label>
                                    <input type="text" id="city" name="city" placeholder="City" className="inpu"/>

                                    <div className="row">
                                        <div>
                                          <h1>Rs {rs}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label for="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="Card" className="inpu"/>
                                    <label for="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className="inpu"/>
                                    <label for="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September" className="inpu"/>
                                    <div className="row">
                                        <div className="col-50">
                                            <label for="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2022" className="inpu"/>
                                        </div>
                                        <div className="col-50">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" className="inpu"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <input type="submit" value="Continue to checkout"  className="inpu btnl"/>
                        </form>
                    </div>
                </div>
            
            </div>
            </div>
        </>
    )
}

export default Payment