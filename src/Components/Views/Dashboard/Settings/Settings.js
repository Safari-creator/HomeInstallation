import React from 'react';
import './Settings.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import sidebarImage from "../../../Software/assets/sidebar-logo.png"
import textbox from "../../../Software/assets/textbox.png"

const Settings = () => {
    return(
        <div class="settings-section">
             <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                </div>
                <div class="header-part-right">
                    <img className="header-clock" src={headerClock} alt="headerClock"></img>
                    <p className="header-time">14:20 PM Friday April, 21</p>
                    <img className="header-icon-one" src={headerIconOne} alt="headerIconOne"></img>
                    <img className="header-icon-two" src={headerIconTwo} alt="headerIconTwo"></img>
                    <img className="header-icon-profile" src={headerProfile} alt="headerProfile"></img>
                </div>
            </section>
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
                        <button>SAVE PROFILE</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Settings;