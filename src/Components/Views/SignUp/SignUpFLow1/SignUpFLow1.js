import React from 'react'
import SignUpFlow1Header from './SignUpFlow1Header';
import './SignUpFlow1.css'
import Desktop from "../../../../Assets/images/Mac2.png"
import YellowTick from "../../../../Assets/images/yellow-tick.png"
import BigLock from "../../../../Assets/images/big-lock.png"
import ReviewImg2 from "../../../../Assets/images/review-img2.jpg"
import ReviewStars from "../../../../Assets/images/review-stars.png"
import PaymentOptions from "../../../../Assets/images/payment-cards.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";




function SignUpFLow1() {
    let history = useHistory();
    const [checkClick1, setCheckClick1] = React.useState(false)
    const [checkClick2, setCheckClick2] = React.useState(true)

    const handleClick = (accordian1, accordian2) => {
        setCheckClick1(accordian1)
        setCheckClick2(accordian2)
    }
    return (
        <div className="flow1">
            <SignUpFlow1Header />
            <div className="content-container">
                <div className="left-container">
                    <h4>Select Your Package:</h4>
                    <div culassName="accordian">
                        <Accordion defaultExpanded={checkClick1} expanded={checkClick1} onClick={() => 
                            handleClick(true, false)}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="accordian-heading1">Aurora Monthly - 7 Day Free Trial (then $89/mo)</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <div className="desktop-image-container">
                                    <img className="desktop-image resize" src={Desktop} alt="desktop pic" width="700" />
                                </div>
                                <Typography>
                                    <h2>Aurora Monthly</h2>
                                    <p>$89/mo</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={checkClick2} onClick={() => handleClick(false, true)}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="accordian-heading2">Aurora Monthly - 7 Day Free Trial (then $89/mo)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="desktop-image-container">
                                    <img className="desktop-image resize" src={Desktop} alt="desktop pic" width="700" />
                                    {/* <img className="desktop-ribbon" src={RedRibbon} alt="desktop pic"/> */}
                                </div>
                                <Typography>
                                    <h2>Aurora Monthly</h2>
                                    <p>$89/mo</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    {/* <hr
                        style={{
                            marginTop: '50px',
                            color: 'color',
                            backgroundColor: 'color',
                            height: 5
                        }}
                    /> */}
                    <div>
                        <hr className="line" />
                    </div>

                    <div className="secured-content">
                        <div ><img src={YellowTick} className="secured-image" alt="yellow-ribbon" /></div>
                        <div className="secured-content-text"><b> INDUSTRY LEADING GUARANTEE</b><br />
                            <p className="web-align mob-align">If you choose Aurora today and you don't feel it significantly reduces your time during home inspections, we will give you a complete refund, no questions asked.</p>
                        </div>
                    </div>
                    <div className="secured-content">
                        <img src={BigLock} className="secured-image" alt="big-lock" />
                        <div className="secured-content-text"><b> SECURE PROCESSING</b><br />
                           <p className="web-align mob-align">Each order is processed through a secure, 256-bit encrypted payment processing gateway to ensure your privacy.</p> 
                        </div>
                    </div>

                    <div className="review-container review-top">
                        <div className="review-image-container">
                            <img className="review-image" src={ReviewImg2} alt="image" width="125" />
                        </div>
                        <div className="align-review-container">
                            <div><img className="review-stars" src={ReviewStars} alt="stars" width="150" /></div>
                            <div className="review-text text-color">
                                "This inspection software is a BIG improvement from the one I had before! It takes me much less time to complete my inspection reports! Thank you." <br />
                                <p><b className="review-name">~~F. Menesis</b></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-container">
                    <div className="overview-middle-title form-heading">
                        <h5 className="overview-middle-title-text form-heading-text">---------------- Billing Address ----------------</h5>
                    </div>
                    <div className="input-tags form-input-right left-align">
                        <label>Full Address*</label>
                        <div className="input-field"><TextField className="input-design" placeholder="Enter Full Address.." fullWidth id="fullWidth" /></div>
                        <label>City Name*</label>
                        <div className="input-field"><TextField className="input-design" placeholder="City Name.." fullWidth id="fullWidth" /></div>
                        <div className="inline-input">

                            <div className="input-field"><label>State / Province*</label><TextField className="input-design" placeholder="Enter State/Province.." fullWidth id="fullWidth" /></div>

                            <div className="input-field zip"><label>Zip*</label><TextField className="input-design MuiInputBase-fullwidth" placeholder="Enter Zip.." fullWidth id="fullWidth" /></div>
                        </div>
                        <label>Country*</label>
                        <div className="input-field"><TextField className="input-design" placeholder="Enter Country.." fullWidth id="fullWidth" /></div>
                    </div>
                    <div className="overview-middle-title form-heading">
                        <h5 className="overview-middle-title-text form-heading-text">------------- Credit Card Inforamtion -------------</h5>
                    </div>
                    <div className="input-tags form-input-right left-align">
                        <label>Card Number*</label>
                        <div className="input-field"><TextField className="input-design" placeholder="Enter Card Number" fullWidth id="fullWidth" /></div>
                        {/* <label>City Name*</label>
                        <div className="input-field"><TextField className="input-design" fullWidth id="fullWidth" /></div> */}
                        <div className="inline-input">

                            <div className="input-field"><label>Expiry Date*</label><TextField className="input-design" placeholder="MM/YY" fullWidth id="fullWidth" /></div>

                            <div className="input-field zip"><label>Cvv*</label><TextField className="input-design MuiInputBase-fullwidth" placeholder="Enter CVV" fullWidth id="fullWidth" /></div>
                        </div>
                        {/* <label>Country*</label>
                        <div className="input-field"><TextField className="input-design" fullWidth id="fullWidth" /></div> */}
                    </div>
                    <div className="total-amount">
                        <div className="display-row margin-bottom">
                            <p><b>Item</b></p>
                            <p><b>Amount</b></p>
                        </div>
                        <hr />
                        <div className="display-row margin-top">
                            <p>Aurora Yearly</p>
                            <p>7 Days FREE, then $899 <br />per year</p>
                        </div>
                    </div>
                    <Button className="button full-width" onClick={() => history.push('/upsell-1')} variant="contained">
                        Complete Order & Get Instant Access
                    </Button>

                    <div className="payment-options">
                        <img src={PaymentOptions} alt="payment-options" width="500px" />
                    </div>
                </div>

            </div>
            <hr />
            <p className="copyright-text">© Copyright 2019 - All Rights Reserved, InspectSource <br />
                185 Bradford Square, Fayetteville, GA 30215 <br />
                Customer Service: (770)-780-5532</p> <br />

        </div>
    )
}

export default SignUpFLow1
