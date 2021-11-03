import './SignIn.css';
import signUpImage from '../assets/signin-image.jpg';
import { useHistory } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import {React , useState} from 'react';

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
                            <p>Welcome back</p>
                            <h3>Login to your account</h3>
                        <form>
                            <label>Email</label><br/>
                            <input className="form-input" type="text" placeholder="john.snow@gmail.com"></input><br/>
                            <label>Password</label><br/>
                            <input className="form-input" type="text" placeholder="*******"></input><br/>
                            <button onClick={() => history.push('/MainDashboard')}>Login</button>
                            <GoogleLogin 
                    clientId={clientId}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    >Or Sign-in with google</GoogleLogin>
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