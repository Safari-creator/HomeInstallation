import React from 'react'
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import './SignUpFlow3.css'

function SignUpFLow3() {
    let history = useHistory();

    return (
        <div>
            <div className="padd10">
                <h2>Please Watch This Short Presentation From Desmond</h2>
                <h3>Access your order by following the instructions below.</h3>
                <div className="vid100">
                    <div class="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                        <div class="wistia_responsive_wrapper" style={{ height: "100%", left: "0", position: "absolute", top: "0", width: "100%" }}>
                            <div class="wistia_embed wistia_async_s3lqfi0zn7 seo=false videoFoam=true" style={{ height: "100%", width: "100%" }}>&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total-amount-content">
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <hr />
                    <div className="display-row">
                        <p>Aurora Yearly</p>
                        <p >7 Days FREE, then $899 <br />per year</p>
                    </div>
                    <div className="access-button">
                        <Button className="button full-width" onClick={() => history.push('/create-password')} variant="contained">
                            Access The Members Area
                        </Button>
                    </div>
                </div>
            </div>
            <div className="copyright-text height20 border-top">© Copyright 2019 - All Rights Reserved, InspectSource <br />
                185 Bradford Square, Fayetteville, GA 30215 <br />
                Customer Service: (770)-780-5532</div>
        </div>
    )
}

export default SignUpFLow3
