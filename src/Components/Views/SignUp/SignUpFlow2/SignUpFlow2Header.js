import React from 'react'
import Logo from '../../../../Assets/images/Aurora_logo.png'
import './SignUpFlow2Header.css'

function SignUpFLow2Header() {
    return (
        <div className="signup-home-header flow2">
             {/* <span > */}
          {/* <img
            src={Logo}
            alt="logo"
            className="signup-header-logo"
          /> */}
        {/* </span> */}
        <p className="white-portion"><div className="progress-bar" role="progressbar">Almost Complete...</div></p>
        <div className="flow2-heading"><b className="red-text">WAIT!</b> Special <b className="red-text">ONE TIME ONLY</b> Offer</div>
        <div className="flow2-heading-context">Want the peace of mind knowing that your reports are being stored in real-time on the AWS <br /> cloud securely and indefinitely? <b>Never lose your hard-earned work again!</b></div>
        {/* <div
          className="contact disable"
        >
         Have a question? Reach us at:(770)-780-5532
        </div> */}
        </div>
    )
}

export default SignUpFLow2Header
