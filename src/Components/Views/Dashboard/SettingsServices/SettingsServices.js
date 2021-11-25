import React,{useState} from 'react';
import './SettingsServices.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import arrowSide from "../../../Software/assets/arrowSide.png"
import Sidebar from '../Sidebar';
import { useHistory } from 'react-router-dom';

const SettingsServices = () => {

    const [SettingsTab, setSettingsTab] = useState(1);

    let history = useHistory();
    return(
        <div class="settingsServices-section">
            <Sidebar/>
            <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                    <p className="header-subname">Services and Fees Setup</p>
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
            {SettingsTab == 1 &&
                <div className="body-wrapper">
                <div className="body-header">
                    <p>You haven't set up any services yet. Add one below:</p>
                </div>
                <div className="body-content">
                    <button className="button-one" onClick={() => setSettingsTab(2)}>Add Services</button>
                    <button className="button-two">Undelete Services</button>
                </div>
                </div>
            }
            {SettingsTab == 2 &&
                <div className="body-wrapper">
                <div className="body-header-one">
                    <img src={arrowSide} onClick={() => setSettingsTab(3)}></img>
                    <p>New Services</p>
                </div>
                <div className="body-content">
                    <button className="button-one">Add Services</button>
                    <button className="button-two">Undelete Services</button>
                </div>
                </div>
            }
            {SettingsTab == 3 &&
                <div className="body-wrapper">
                <div className="body-header-one">
                    <img src={arrowSide}></img>
                    <p>New Services</p>
                </div>
                <div className="body-content-two">
                    <div className="details-section">
                        <p>Details</p>
                        <div class="row-one">
                            <div>
                                <label>Name:</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Description:</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label>Base Cost:</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div class="row-two">
                            <div>
                                <label>Duration:</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div class="row-three">
                            <div>
                                <label>Templates:</label>
                                <select name="selectList" id="selectList">
                                    <option value="option 1">Select</option>
                                    <option value="option 2">state names</option>
                                </select>
                            </div>
                            <div>
                                <label>Agreements:</label>
                                <select name="selectList" id="selectList">
                                    <option value="option 1">Select</option>
                                    <option value="option 2">state names</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modifiers-section">
                        <p className="header">Modifiers</p>
                        <p className="body">Add additional fees & hours to your service when the property matches certain criteria like square footage or age.</p>
                        <div className="button">
                            <button>Add Modifiers</button>
                        </div>
                    </div>
                    <div className="addons-section">
                        <p className="header">Add-Ons</p>
                        <p className="body">Give your client options to add additional services and upsells.</p>
                        <div className="button">
                            <button>Add On</button>
                        </div>
                    </div>
                    <div className="taxes-section">
                        <p className="header">Taxes</p>
                        <p className="body">Add a percentage to the total for this service. Taxes are calculated after all modifiers and add-ons are processed.</p>
                        <div className="button">
                            <button>Add On</button>
                        </div>
                    </div>
                </div>
                <div className="body-content">
                    <button className="button-one" onClick={() => history.push('/SettingsAvailability')}>Add Services</button>
                    <button className="button-two">Undelete Services</button>
                </div>
                </div>
            }
            </section>
        </div>
    )
}

export default SettingsServices;