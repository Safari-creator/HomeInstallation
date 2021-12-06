import React from 'react';
import "./SettingsProfile.css";
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import sidebarImage from "../../../Software/assets/sidebar-logo.png"
import textbox from "../../../Software/assets/textbox.png"
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function SettingsProfile() {
    
    let history = useHistory();

    return (
        <div class="settings-section">
            <section class="body-part">
                <div class="body-header">
                    <div class="body-header-left">
                        <p>PROFILE</p>
                    </div>
                    <div class="body-header-right">
                        <button>View Public Profile</button>
                    </div>
                </div>
                <div class="body-content">
                    <div class="body-content-one">
                        <div class="three-columns">
                            <div class="column-one">
                                <div class="company-logo">
                                    <p>COMPANY LOGO</p>
                                    <img src={sidebarImage}></img>
                                </div>
                                <div class="header-logo">
                                    <p>HEADER LOGO</p>
                                    <img src={sidebarImage}></img>
                                </div>
                            </div>
                            <div class="column-two">
                                <p>COMPANY INFORMATION</p>
                                <div className="form-part">
                                    <div>
                                        <label>Name:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Address</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>City</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">Country names</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>State</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">Country names</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Zip</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Phone:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Website:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="column-three">
                                <p>INSPECTOR INFO</p>
                                <div className="form-part">
                                    <div>
                                        <img src={headerProfile}></img>
                                    </div>
                                    <div>
                                        <label>Name:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Address:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Direct Phone (w/SMS):</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Credentials:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body-content-two">
                        <div class="two-columns">
                            <div class="column-one">
                                <img src={textbox}></img>
                            </div>
                            <div class="column-two">
                                <div class="form-part">
                                <div>
                                <label>Video URL (YouTube):</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Service Offered:</label>
                                <input type="text" placeholder="i.e. Residential, Radon, Termite, Mold"></input>
                            </div>
                            <div>
                                <label>Service Area:</label>
                                <input type="text" placeholder="i.e. Denver, Aurora, Boulder, Fort Collins"></input>
                            </div>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div class="button">
                        <button onClick={() => history.push('/SettingsServices')}>SAVE PROFILE</button>
                    </div>
                </div>
            </section>
        </div>



    //     <div className="extrapages-section">
    //     <section className="body-part">
    //         <div class="flex space-between">
    //             <div class="part-one-left flex space-between">
    //                 <select name="selectList" class="select-list">
    //                     <option value="1" >Contract 1</option>
    //                     <option value="2" >Contract 2</option>
    //                     <option value="3" >Contract 3</option>
    //                     <option value="4" >Contract 4</option>
    //                     <option value="5" >Contract 5</option>
    //                     <option value="6" >Contract 6</option>
    //                     <option value="7" >Contract 7</option>
    //                 </select>
    //             </div>
    //             <div class="part-one-left flex space-between">
    //                 <select name="selectList" class="select-list">
    //                     <option value="1" >Contract 1</option>
    //                     <option value="2" >Contract 2</option>
    //                     <option value="3" >Contract 3</option>
    //                     <option value="4" >Contract 4</option>
    //                     <option value="5" >Contract 5</option>
    //                     <option value="6" >Contract 6</option>
    //                     <option value="7" >Contract 7</option>
    //                 </select>
    //             </div>
    //             <div class="part-one-left flex space-between">
    //                 <select name="selectList" class="select-list">
    //                     <option value="1" >Contract 1</option>
    //                     <option value="2" >Contract 2</option>
    //                     <option value="3" >Contract 3</option>
    //                     <option value="4" >Contract 4</option>
    //                     <option value="5" >Contract 5</option>
    //                     <option value="6" >Contract 6</option>
    //                     <option value="7" >Contract 7</option>
    //                 </select>
    //             </div>
    //             <div class="part-one-left flex space-between">
    //                 <select name="selectList" class="select-list">
    //                     <option value="1" >Contract 1</option>
    //                     <option value="2" >Contract 2</option>
    //                     <option value="3" >Contract 3</option>
    //                     <option value="4" >Contract 4</option>
    //                     <option value="5" >Contract 5</option>
    //                     <option value="6" >Contract 6</option>
    //                     <option value="7" >Contract 7</option>
    //                 </select>
    //             </div>
    //         </div>
    //         <div class="body-part-two bot50">
    //             {questionsList.map((section, index1) => {
    //                 return (
    //                     <Accordion key={index1} onChange={handleChange('panel1')} style={{marginBottom: "25px"}}>
    //                         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    //                             <Typography>{section.title}</Typography>
    //                         </AccordionSummary>
    //                         <AccordionDetails>
    //                             <Typography>
    //                                 EMAILS
    //                             </Typography>
    //                             <FormGroup>
    //                                 {console.log(section.emails)}
    //                                 {section?.emails?.map((email, index2) => {
    //                                     return(
    //                                         <FormControlLabel key={index2} control={<BpCheckbox/>} label={email} />
    //                                     )
    //                                 }
    //                                 )}
                                    
    //                             </FormGroup>
    //                             <Typography>
    //                                 TEXT MESSAGES
    //                             </Typography>
    //                             <FormGroup>
    //                             {section?.text_messages?.map((message, index3) => {
    //                                     return(
    //                                         <FormControlLabel key={index3} control={<BpCheckbox/>} label={message} />
    //                                     )
    //                                 }
    //                                 )}
    //                             </FormGroup>
    //                         </AccordionDetails>
    //                     </Accordion>
    //                 )
    //             })}
    //         </div>
    //     </section>
    // </div>
    )
}

export default SettingsProfile
