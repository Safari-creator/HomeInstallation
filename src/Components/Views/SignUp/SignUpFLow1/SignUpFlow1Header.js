import React from 'react'
import Logo from '../../../../Assets/images/Aurora_logo.png'
import './SignUpFLow1Header.css' 
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function SignUpFlow1Header() {
    return (
        <div
        className="signup-home-header"
      >
        <span >
          <img
            src={Logo}
            alt="logo"
            className="signup-header-logo"
          />
        </span>
        <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     width: "55%",
        //     marginRight: "-110px",
        //   }}
          className="contact disable"
        >
           <PhoneEnabledIcon /> Have a question? Reach us at:(770)-780-5532
          {/* <span>
          <a href="#features" className="decoration-none"> <Button className="home-header-navlink" variant="text">
             <h4>Features</h4>
            </Button></a>
          </span>
          <span>
          <a href="#pricing" className="decoration-none"><Button className="home-header-navlink" variant="text">
             <h4>Pricing</h4>
            </Button></a>
          </span>
          <span>
            <Button className="home-header-navlink" variant="text">
              <h4>Support</h4>
            </Button>
          </span>
          <span>
            <Button className="home-header-navlink" variant="text">
              <h4 onClick={() => handleOpen()}>Free Trial</h4>
            </Button>
          </span>
          <span>
            <Button className="home-header-button" variant="contained">
              Members
            </Button>
          </span> */}
        </div>
      </div>
    )
}

export default SignUpFlow1Header
