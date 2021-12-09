import React from 'react'
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import './SignUpFlow3.css'

function SignUpFLow3() {
    let history = useHistory();

    return (
        <div>
            <h2>Please Watch This Short Presentation From Desmond</h2>
            <h3>Access your order by following the instructions below.</h3>
            <div className="welcome-video">
                {/* <div className="wistia_embed wistia_async_s3lqfi0zn7" style="height:349px;width:620px">&nbsp;</div> */}
                <iframe src="//fast.wistia.net/embed/iframe/76s5twgvtw" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>
                {/* <iframe src="https://fast.wistia.net/embed/iframe/f10odcssdu?autoplay=0&wmode=transparent" frameborder="0"></iframe> */}
                {/* <img src="https://embed-fastly.wistia.com/deliveries/4c366182f92a3e178c7325bbe6cf561e5d22ed68.webp?image_crop_resized=240x348" alt="Video Thumbnail" srcset="https://embed-fastly.wistia.com/deliveries/4c366182f92a3e178c7325bbe6cf561e5d22ed68.webp?image_crop_resized=240x348 320w, https://embed-fastly.wistia.com/deliveries/4c366182f92a3e178c7325bbe6cf561e5d22ed68.webp?image_crop_resized=240x348 640w, https://embed-fastly.wistia.com/deliveries/4c366182f92a3e178c7325bbe6cf561e5d22ed68.webp?image_crop_resized=240x348 960w, https://embed-fastly.wistia.com/deliveries/4c366182f92a3e178c7325bbe6cf561e5d22ed68.webp?image_crop_resized=240x348 1280w, https://embed-fastly.wistia.com/deliveries/4c366182f92a3e178c7325bbe6cf561e5d22ed68.webp?image_crop_resized=240x348 1920w, https://embed-fastly.wistia.com/deliveries/4c366182f92a3e178c7325bbe6cf561e5d22ed68.webp?image_crop_resized=240x348 3840w" /> */}
            </div>
            <div className="total-amount-content">
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <hr />
                <div className="display-row margin-top">
                    <p>Aurora Yearly</p>
                    <p>7 Days FREE, then $899 <br />per year</p>
                </div>
                <div className="access-button">
                    <Button className="button full-width" onClick={() => history.push('/create-password')} variant="contained">
                        Access The Members Area
                    </Button>
                </div>
            </div>

            <div className="copyright-text height20 border-top">© Copyright 2019 - All Rights Reserved, InspectSource <br />
                185 Bradford Square, Fayetteville, GA 30215 <br />
                Customer Service: (770)-780-5532</div>
        </div>
    )
}

export default SignUpFLow3
