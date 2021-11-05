import './SignIn.css';
import signUpImage from '../assets/signup-image.png';
import { useHistory } from 'react-router-dom';
import GoogleLogin from "react-google-login";
<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 7a0d62aed60436483db8bb5db6fb8355c8553e5c

const SignIn = () => {

    let history = useHistory();
    const clientId = "382147708211-8rgvf7ca8b4p1nqe433pvp604sg0q2na.apps.googleusercontent.com";
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    }
    const responseGoogle = response => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    };

    // const [checked,setChecked] = useState(false);
    const [tab, setTab] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

    return (
        <center className="signin-section">
            <div className="container">
                <div className="signin-wrapper">
                    <div className="signin-form">
                        <p>Welcome Back!</p>
                        <h3>Login to your account</h3>
                        <form className="signin-form-body">
                            <label>Email</label><br />
                            <input className="form-input" type="text" placeholder="john.snow@gmail.com"></input><br />
                            <label>Password</label><br />
                            <input className="form-input" type="text" placeholder="*******"></input><br />
                            <button onClick={() => history.push('/MainDashboard')}>Login</button>
                            {/* <GoogleLogin
                                clientId={clientId}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            >Or Sign-in with google</GoogleLogin> */}
                        </form>
                    </div>
                    <div className="signin-image">
                        <div className="image-wrapper">
                            <img src={signUpImage} alt="signInImage"></img>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
}

export default SignIn;