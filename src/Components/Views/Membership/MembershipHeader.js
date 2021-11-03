import React from 'react'
import './MembershipHeader.css'

import Logo from "../../../Assets/images/Aurora_logo.png";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useHistory } from "react-router-dom";

function MembershipHeader() {
    return (
        <div
      className="home-header"
    >
      <span >
        <img
          src={Logo}
          alt="logo"
          className="header-logo"
        />
      </span>
      <div
        style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "38%",
            marginRight: "79px",
            height: "95px",
        }}
        className="disable"
      >
        {/* <span>
        <a href="#features" className="decoration-none"> <Button className="home-header-navlink" variant="text">
           <h4>Features</h4>
          </Button></a>
        </span> */}
        {/* <span>
        <a href="#pricing" className="decoration-none"><Button className="home-header-navlink" variant="text">
           <h4>Pricing</h4>
          </Button></a>
        </span> */}
        <span>
          <Button className="home-header-navlink  margin-left20" variant="text">
            <h4>Support</h4>
          </Button>
        </span>
        <span>
          <Button className="home-header-navlink margin-left20" variant="text">
            <h4>LOGOUT</h4>
          </Button>
        </span>
        {/* <span>
          <Button className="home-header-button" variant="contained">
            Members
          </Button>
        </span> */}
      </div>
    </div>
    )
}

export default MembershipHeader
