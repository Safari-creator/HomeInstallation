import './SignIn.css';
import signUpImage from '../assets/signup-image.png';
import { useHistory } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import React, { useState } from 'react';
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CustomizedSnackbars from '../../Reusable/SnackBar/SnackBar';
import {BASE_API_URL} from '../../../Constats/Constats';

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

    const [tab, setTab] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [showApiResponse, setShowApiResponse] = useState(null);
    const [apiResponseMessage, setApiResponseMessage] = useState(null);
    const [apiResponseStatus, setApiResponseStatus] = useState(null);
    const [url, setUrl] = useState("");
    const [viewPassword, setViewPassword] = useState(false);

    const getAuth = async () => {
        const auth = await localStorage.getItem("auth");
        if (auth !== null) {
            return auth;
        }
        return "none";
    };

    // React.useEffect(() => {
    //     console.log({ showApiResponse })
    //     console.log({ apiResponseMessage })
    //     console.log({ apiResponseStatus })
    //     setTab(3)
    // }, [showApiResponse, apiResponseMessage, apiResponseStatus])

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

    // const setSnackBoxData = (res) => {
    //     setApiResponseMessage(res.data.message)
    //     if (res.data.status == false) {
    //         setApiResponseStatus("error")
    //     } else {
    //         setApiResponseStatus("success")
    //         setTimeout(() => {
    //             history.push('/MainDashboard')
    //         }, 2000)
    //     }
    //     setShowApiResponse(true)
    // }

    const handleChange = (e) => {
        if (e.target.name == "password") {
            setPassword(e.target.value)
        } else if (e.target.name == "email") {
            setEmail(e.target.value)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (event) {
            await axios.post(`${BASE_API_URL}/login`,
                {
                    email: email,
                    password: password
                },
            )
                .then((resp) => {
                    setApiResponseMessage(resp.data.message)
                    if (resp.data.status == false) {
                        setApiResponseStatus("error")
                    } else {
                        setApiResponseStatus("success")
                        setTimeout(() => {
                            history.push('/MainDashboard')
                        }, 2000)
                    }
                    setShowApiResponse(true)
                    setTimeout(() => {
                        setShowApiResponse(false)
                    }, 2000)
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
                            <label>Email</label><br/>
                            <input className="form-input" name="email" onChange={(e) => handleChange(e)} type="text" placeholder="Enter Email..."></input><br />
                            <label>Password</label><br />
                            <div className="password-input">
                                <input className="form-input" name="password" onChange={(e) => handleChange(e)} type={viewPassword ? "text" : "password"} placeholder=" Enter Password..."></input><br />
                                {viewPassword ? <VisibilityOffIcon onClick={() => setViewPassword(false)} /> : <VisibilityIcon onClick={() => setViewPassword(true)} />}
                            </div>
                            <button className={email != null && password != null ? "" : "opacity3"} disabled={email != null && password != null ? false : true} onClick={(e) => handleSubmit(e)}>Login</button>
                            {/* <GoogleLogin
                                clientId={clientId}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            >Or Sign-in with google</GoogleLogin> */}
                        </form>
                        {apiResponseMessage && apiResponseStatus && showApiResponse && <CustomizedSnackbars message={apiResponseMessage} type={apiResponseStatus} show={showApiResponse} />}
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
