import React, { useState } from 'react';
import signUpImage from '../assets/signup-image.png';
import './SignUp.css';
import GoogleLogin from "react-google-login";
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import SignIn from '../../Software/SignIn/SignIn';

const SignUp = () => {

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
        <center className="signup-section">
            <div className="container">
                <div className="signup-wrapper" setTab={setTab}>
                    {tab === 0 &&
                        <div className="signup-form">
                            <div className="signup-heading">
                                <p>Step 01/03</p>
                                <h5>Personal Info.</h5>
                            </div>
                            <h3>Register Individual Account!</h3>
                            <p className="sub-heading">For the purpose of industry regulation, your details are required.</p>
                            <form className="signup-form-body">
                                <label>Your fullname*</label><br />
                                <input className="form-input" type="text" placeholder="Enter full name"></input><br />
                                <label>Email address*</label><br />
                                <input className="form-input" type="text" placeholder="Enter email address"></input><br />
                                <label>Create password*</label><br />
                                <input className="form-input" type="text" placeholder="Enter password"></input><br />
                                <label className="tnc"><input type="checkbox" style={{ cursor: 'pointer' }}></input><span>I agree to terms and conditions.</span></label>
                                <button onClick={() => setTab(1)}>Next</button>
                                {/* <p style={{ color: '#787878', fontSize: 12, fontWeight: 400 }}>or</p>
                                <GoogleLogin
                                    style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', borderRadius: 6, fontWeight: 500, fontSize: 16, textAlign: 'center' }}
                                    clientId={clientId}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                >Register with google</GoogleLogin> */}
                            </form>
                            <div className="signup-footer"><p>Already have an Account? <button className="signup-button" style={{ cursor: 'pointer' }} onClick={() => history.push("/Sign-In")}>Sign In</button></p></div>
                        </div>}
                    {tab === 1 &&
                        <div className="signup-form">
                            <div className="signup-heading">
                                <p>Step 02/03</p>
                                <h5>Residency Info.</h5>
                            </div>
                            <h3>Complete Your Profile!</h3>
                            <p className="sub-heading">For the purpose of industry regulation, your details are required.</p>
                            <form className="signup-form-body">
                                <label>Phone number</label><br />
                                <input className="form-input" type="text" placeholder="Enter full name"></input><br />
                                <label>Your address</label><br />
                                <input className="form-input" type="text" placeholder="Please enter address"></input><br />
                                <label>Country of residence</label><br />
                                <select className="form-input">
                                    <option selected disabled>Please select</option>
                                </select>
                                <button onClick={() => setTab(2)}>Save & Continue</button>
                                <p>Your info is safely secured.</p>
                            </form>
                        </div>}
                    {tab === 2 &&
                        <div className="signup-form">
                            <div className="signup-heading">
                                <p>Step 03/03</p>
                                <h5>Profile Verification.</h5>
                            </div>
                            <h3>Complete Your Profile!</h3>
                            <p className="sub-heading">For the purpose of industry regulation, your details are required.</p>
                            <form className="signup-form-body">
                                <label>Add Profile Photo</label><br />
                                <input className="form-input" type="text" placeholder="Browse"></input><br />
                                <label>Add Profile Destination</label><br />
                                <input className="form-input" type="text" placeholder="Example"></input><br />
                                <button onClick={() => history.push('/Sign-In')}>Save & Continue</button>
                                <p>Your info is safely secured.</p>
                            </form>
                        </div>}
                    <div className="signup-image">
                        <div className="image-wrapper">
                            <img src={signUpImage} alt="signUpImage"></img>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
}

export default SignUp;