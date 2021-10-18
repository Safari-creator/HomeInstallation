import './SignIn.css';
import React from 'react';
import signUpImage from '../assets/signin-image.jpg';
import { Button } from 'react-bootstrap';
import GoogleLogin from "react-google-login";

const SignIn = () => {

    return (
        <center class="signin-section">
            <div class="container">
                <div class="signin-wrapper">
                    <div class="signin-form">
                        {/* <div class="signup-heading"> */}
                            <p>Welcome back</p>
                            <h3>Login to your account</h3>
                        {/* </div> */}
                        {/* <p>Welcome back</p>
                        <h2>Login to your account</h2> */}
                        <form>
                            <label>Email</label><br/>
                            <input className="form-input" type="text" placeholder="john.snow@gmail.com"></input><br/>
                            <label>Password</label><br/>
                            <input className="form-input" type="text" placeholder="*******"></input><br/>
                            {/* <label>Email</label><br/>
                            <input className="form-input" type="text"></input><br/>
                            <label>Password</label><br/>
                            <input className="form-input" type="password"></input><br/> */}
                            <button>Login now</button>
                            {/* <Button variant="secondary" className="btn btn-dark mt-3 w-50" type="button">Login now</Button> */}
                            <GoogleLogin 
                    // clientId={clientId}
                    // onSuccess={responseGoogle}
                    // onFailure={responseGoogle}
                    // cookiePolicy={"single_host_origin"}
                    >Or Sign-in with google</GoogleLogin>
                        {/* <GoogleLogin className="mt-3"
                    clientId={clientId}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}></GoogleLogin> */}
                        </form>
                    </div>
                    <div class="signin-image">
                        <div class="image-wrapper">
                            <img src={signUpImage} alt="signInImage"></img>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
}

export default SignIn;