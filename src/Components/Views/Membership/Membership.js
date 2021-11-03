import React from 'react'
import './Membership.css'
import MembershipHeader from "./MembershipHeader";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';




function Membership() {
    return (
        <div>
            <MembershipHeader />
            <div className="lesson-1">
                <div className="left-accordian">
                    <div className="bg-color">
                        First Section<ArrowDropDownIcon style={{ color: "white" }} />
                    </div>
                    <div className="bg-color2">

                        <div>First Lesson<CheckIcon style={{ color: "#6E757F" }} /></div>
                        <div><KeyboardArrowRightIcon style={{ color: "#bbb" }} /></div>
                    </div>


                    <div className="width74">
                        <div className="input-field"><TextField className="input-design margin10" placeholder="Enter Full Address.." fullWidth id="fullWidth" /></div>
                    </div>
                    <Button className="blue-button" variant="contained">
                        Click to Sign Up
                    </Button>
                </div>
                <div className="right-vid-lesson">
                    <div className="card">
                        <div className="light-bg">
                            <h1 className="margin0">[First Lesson Title]</h1>
                        </div>
                        <div className="welcome-video">
                            {/* <iframe src="//fast.wistia.net/embed/iframe/76s5twgvtw" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe> */}
                            {/* <iframe src="//fast.wistia.net/embed/iframe/76s5twgvtw" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe> */}
                            <div class="wistia_responsive_padding" style={{padding:"56.25% 0 0 0",position:"relative"}}>
                                <div class="wistia_responsive_wrapper" style={{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}>
                                    <div class="wistia_embed wistia_async_s3lqfi0zn7 seo=false videoFoam=true" style={{height:"100%",width:"100%"}}>&nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="light-bg2">
                            <h1 className="margin0">[First Lesson Description]</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-text height20 border-top">© Copyright 2019 - All Rights Reserved, InspectSource <br />
                185 Bradford Square, Fayetteville, GA 30215 <br />
                Customer Service: (770)-780-5532</div>


        </div>
    )
}

export default Membership
