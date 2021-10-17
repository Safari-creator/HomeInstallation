import React from "react";
import Logo from "../../../Assets/images/Aurora_logo.png";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div
      className="home-header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
      }}
    >
      {/* hoiodsfmdf sdfknsfip sdkjfnrjg;lksadfn   */}
      <span>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "150px", marginLeft: "30px" }}
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
      >
        <span>
          <Button className="home-header-navlink" variant="text">
            <h4>Features</h4>
          </Button>
        </span>
        <span>
          <Button className="home-header-navlink" variant="text">
            <h4>Pricing</h4>
          </Button>
        </span>
        <span>
          <Button className="home-header-navlink" variant="text">
            <h4>Support</h4>
          </Button>
        </span>
        <span>
          <Button className="home-header-navlink" variant="text">
            <h4>Free Trial</h4>
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
