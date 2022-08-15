import React from "react";
import "./Login.css"
import Ima from "../../Image/image.jpg"
const Login = () => {
    return (
        <>
            <div id="id01" className="modal">
                <form class="modal-content animate">
                    <div class="imgcontainer">
                        <img src={Ima} alt="Avatar" class="avatar" />
                    </div>
                    <div className="container5">
                        <label for="uname"><b>Username</b></label>
                        <input className="inu" type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input className="inu" type="password" placeholder="Enter Password" name="psw" required />

                        <button className="ppp" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login