import React from 'react';
import './SettingsTeam.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import sidebarImage from "../../../Software/assets/sidebar-logo.png"
import textbox from "../../../Software/assets/textbox.png"
import tick from "../../../Software/assets/tick.png"
import { useHistory } from 'react-router-dom';

const SettingsTeam = () => {
    return(
        <div class="settingsTeam-section">
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
            <section className="body-part">
                <div className="body-header">
                    <div className="body-header-left">
                        <p>TEAM</p>
                    </div>
                    <div className="body-header-right">
                        <button>SUBSCRIPTIONS</button>
                    </div>
                </div>
                <div className="body-content">
                    <div className="body-one">
                        <p>Ready to start your subscriptions?</p>
                        <button>VIEW PLANS</button>
                    </div>
                    <div className="body-two">
                        <div class="two-left">
                            <p>Show</p>
                            <select name="selectList" id="selectList">
                                <option value="option 1">10</option>
                                <option value="option 2">other numbers</option>
                            </select>
                        </div>
                        <div class="two-right">
                        <p>Search</p>
                        <input type="text" placeholder="Entries"></input>
                        </div>
                    </div>
                    <div className="body-three">
                        <div className="header">
                            <div className="left">
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>Email</p>
                            </div>
                            <div className="right">
                                <p>Phone</p>
                                <p>Schedule?</p>
                                <p>Publish?</p>
                                <p>Add to Template?</p>
                                <p>Edit Template?</p>
                                <p>Can manage contacts?</p>
                                <p>Can manage financial data?</p>
                                <p>Admin?</p>
                            </div>
                        </div>
                        <div className="body">
                        <div className="left">
                                <p>Steve</p>
                                <p>Doe</p>
                                <p>stevedoe@gmail.com</p>
                            </div>
                            <div className="right">
                                {/* <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button>ADD INSPECTION</button>
                    </div>
                    <div className="body-three">
                        <div className="header">
                            <div className="left">
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>Email</p>
                            </div>
                            <div className="right">
                                <p>Phone</p>
                                <p>Schedule?</p>
                                <p>Publish?</p>
                                <p>Add to Template?</p>
                                <p>Edit Template?</p>
                                <p>Can manage contacts?</p>
                                <p>Can manage financial data?</p>
                                <p>Admin?</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="left">
                                <p>Steve</p>
                                <p>Doe</p>
                                <p>stevedoe@gmail.com</p>
                            </div>
                            <div className="right">
                                {/* <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button>ADD STAFF MEMBER</button>
                    </div>
                    <div class="body-four">
                        <div class="header">
                            <p>MULTIPLE LOCATIONS? FRANCHISING?</p>
                        </div>
                        <div class="body">
                            <p>Create an organization with multiple companies, locations or franchises.</p>
                            <p>Our Organization Tools allow you to view metrics across multiple companies and share assets between companies like templates, agreements and automation settings.</p>
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SettingsTeam;