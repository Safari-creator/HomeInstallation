import './SignIn.css';
import signUpImage from '../assets/signup-image.png';
import { useHistory } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import React, { useState } from 'react';
import axios from "axios";


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

    const getAuth = async () => {
        const auth = await localStorage.getItem("auth");
        if (auth !== null) {
            return auth;
        }
        return "none";
    };

    // const checkAuth = async (path, body) => {
    //     try {
    //         const auth = await getAuth();
    //         let res;
    //         console.log("post BODY", path, body);
    //         res = await axios({
    //             method: "post",
    //             url: url(path),
    //             data: body,
    //             headers: {
    //                 crossorigin: true,
    //                 authorization: auth,
    //             },
    //         });
    //         console.log("post DATA", path, res.data);
    //         return res;
    //     } catch (e) {
    //         console.log("post error", e);
    //         return {
    //             data: {
    //                 success: false,
    //                 message: e.response ? e.response.data : "server crashed",
    //                 status: e.response ? e.response.status : -1,
    //             },
    //         };
    //     }
    // };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (event) {
            axios.post("http://34.229.16.173:8000/login",
                {
                    email:"aaryan+5@punchh.com",
                    password:"0987"
                },
                )
                .then((resp) => {
                    console.log("******",resp.message)
                    console.log(">>>>>>",resp.data)
                    history.push('/MainDashboard')
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            alert("Passwords do not match");
        }
    }

    return (
        <center className="signin-section">
            <div className="container">
                <div className="signin-wrapper">
                    <div className="signin-form">
                        <p>Welcome Back!</p>
                        <h3>Login to your account</h3>
                        <form className="signin-form-body">
                            <label>Email</label><br />
                            <input className="form-input" type="text" placeholder="Enter Email..."></input><br />
                            <label>Password</label><br />
                            <input className="form-input" type="text" placeholder=" Enter Password..."></input><br />
                            <button onClick={(e) => handleSubmit(e)}>Login</button>
                            {/* <button onClick={() => history.push('/MainDashboard')}>Login</button> */}
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
