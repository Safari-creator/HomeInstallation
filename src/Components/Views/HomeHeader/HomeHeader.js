import React from "react";
import Logo from "../../../Assets/images/Aurora_logo.png";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./HomeHeader.css";

function HomeHeader({handleOpen}) {
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
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "55%",
          marginRight: "30px",
        }}
        className="disable"
      >
        <span>
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
          {/* <NotificationsIcon /> */}
        </span>
      </div>
    </div>
  );
}

export default HomeHeader;
