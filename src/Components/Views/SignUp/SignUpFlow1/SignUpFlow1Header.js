import React from 'react'
import Logo from '../../../../Assets/images/Aurora_logo.png'
import './SignUpFlow1Header.css' 
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function SignUpFlow1Header() {
    return (
        <div
        className="signup-home-header align-header"
      >
        <span >
          <img
            src={Logo}
            alt="logo"
            className="signup-header-logo"
          />
        </span>
        <div
          className="contact disable"
        >
           <PhoneEnabledIcon /> Have a question? Reach us at:(770)-780-5532
        </div>
      </div>
    )
}

export default SignUpFlow1Header
