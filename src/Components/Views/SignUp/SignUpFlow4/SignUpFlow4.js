import React from 'react'
import MainLogo from '../../../../Assets/images/aurora-big-logo.png'
import './SignUpFlow4.css'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


function SignUpFlow4() {
    let history = useHistory();

    return (
        <div className="create-password-page">
            <div className="aurora-main-logo-container">
                <img src={MainLogo} className="aurora-main-logo" alt="Main Logo" />
                <h2 className="page-heading">Create Your Account :</h2>
            </div>
            <hr className="width48" />
            <div className="form-input-right left-align align-center">
                <div className="form-input">
                    <label>Email:</label>
                    <div className="input-field"><TextField className="input-design margin10" placeholder="Enter Full Address.." fullWidth id="fullWidth" /></div>
                    <label>Password:</label>
                    <div className="input-field"><TextField className="input-design margin10" placeholder="Enter Full Address.." fullWidth id="fullWidth" /></div>
                    <label>Confirm Password:</label>
                    <div className="input-field"><TextField className="input-design margin10" placeholder="Enter Full Address.." fullWidth id="fullWidth" /></div>
                    <div className="align-center">
                        <Button className="create-button width100" onClick={() => history.push('/membership')} variant="contained">
                            CREATE YOUR ACCOUNT
                        </Button>
                        <Link to="/Sign-In" className="margin-bottom10px"><div>Already a member? Login Now!</div></Link>
                    </div>
                </div>
            </div>
            <div className="copyright-text height20 border-top">© Copyright 2019 - All Rights Reserved, InspectSource <br />
                185 Bradford Square, Fayetteville, GA 30215 <br />
                Customer Service: (770)-780-5532</div>
        </div>
    )
}

export default SignUpFlow4
