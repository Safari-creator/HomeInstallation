import React from 'react'
import SignUpFlow2Header from './SignUpFlow2Header'
import PaymentOptionsImage from '../../../../Assets/images/payment-options.png'
import Button from "@mui/material/Button";
import './SignUpFlow2.css'
import { useHistory } from "react-router-dom";


function SignUpFLow2() {
    let history = useHistory();

    return (
        <div>
            <SignUpFlow2Header />
            <div className="home-background1">
                <div >
                    <div style={{marginTop: "-114px"}} className="video1">
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/493370943?h=3f98cb151a" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <h3 className="home-heading">
                        Hurry, this SPECIAL offer won't last long!
                    </h3>
                </div>
                <div>
                    <div className="timer">
                       <div><div className="minute circle"><span className="font30">00</span></div><div className="light-grey timer-title">Hours</div> </div>
                       <div><div className="hours circle"><span className="font30">00</span></div><div className="light-grey timer-title">minute</div> </div>
                       <div><div className="second circle"><span className="font30">00</span></div><div className="light-grey timer-title">seconds</div></div>
                    </div>
                </div>
                <Button className="home-button1 offer-button" onClick={() => history.push('/confirmed')} variant="contained">
                    <span className="highlight-text"><b>Yes! I Want Instant Access To The Cloud Storage!</b></span>
                    <span className="blur-text">By Clicking This Button You Will Be Charged $10 Today, Then $10 Per Month After 30 Days</span>
                </Button>
                <div >
                    <img src={PaymentOptionsImage} className="payment-image" alt="payment-options" />
                </div>
                <div className="redirect-links">
                    <a href="" className="white-text"><h2>Add To Order - Just $10/mo</h2>
                    </a>
                    <a href="" className="light-grey margin20">No Thanks, I Don't Want To Protect My Work With Cloud Storage</a>
                </div>
            </div>
            {/* <hr /> */}
            <div className="copyright-text height20 border-top">© Copyright 2019 - All Rights Reserved, InspectSource <br />
                185 Bradford Square, Fayetteville, GA 30215 <br />
                Customer Service: (770)-780-5532</div>
        </div>
    )
}

export default SignUpFLow2
