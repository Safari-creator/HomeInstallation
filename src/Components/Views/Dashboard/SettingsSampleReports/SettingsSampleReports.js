import React,{useState} from 'react';
import './SettingsSampleReports.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import arrowSide from "../../../Software/assets/arrowSide.png"
import threeDots from "../../../Software/assets/threeDots.png"
import Sidebar from '../Sidebar';
import { useHistory } from 'react-router-dom';

const SettingsSampleReports = () => {

    const [SettingsTab, setSettingsTab] = useState(1);
    const [Switch, setSwitch] = useState(false);

    const handlePoints = () => {
        console.log('pooja');      
    }
  

    let history = useHistory();
    return(
        <div class="settingsSampleReports-section">
            <Sidebar/>
            <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                    <p className="header-subname">Sample Reports</p>
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
                    <div className="body-para">
                        <p>Sample reports will be available to anyone who views your company's profile. Choose the Reports that best show off the services you provide to your clients.</p>
                    </div>
                    <div className="body-content">
                        <p>It looks like you don't have any Sample Reports created.</p>
                        <p>Head over to your Inspections and find Reports you'd like to show off to the world.</p>
                    </div>
                    <div className="button">
                        <button onClick={() => setSettingsTab(2)}>Inspections</button>
                    </div>
                </div>
            }
            {SettingsTab == 2 &&
                <div className="body-wrapper-two">
                    <div className="body-one">
                        <div className="left">
                            <p>INSPECTIONS</p>
                        </div>
                        <div className="right">
                            <button>Export</button>
                            <img src={threeDots}></img>
                        </div>
                    </div>
                    <div className="body-two">
                        <div className="one">
                            <div className="left">
                                <p>Show</p>
                                <select name="selectList" id="selectList">
                                    <option value="option 1">10</option>
                                    <option value="option 2">25</option>
                                </select>
                            </div>
                            <div className="right">
                                <p>Search</p>
                                <input type="text" placeholder="Entries"></input>
                            </div>
                        </div>
                        <div className="two">
                            <div className="two-header">
                                <p>Date</p>
                                <p>Inspector</p>
                                <p>Order ID</p>
                                <p>Desc</p>
                                <p>Address</p>
                                <p>City</p>
                                <p>State</p>
                                <p>Zip</p>
                                <p>Client</p>
                                <p>Agent</p>
                                <p>Listing</p>
                                <p>Price</p>
                                <p>Agreement Signed?</p>
                                <p>Paid</p>
                                <p>Updated</p>
                                <div><img src={threeDots}></img></div>
                            </div>
                            <div className="two-body">
                                <p>No matching records found</p>
                            </div>
                        </div>
                        <div class="three">
                            <div class="left">
                                <p>Showing 5 to 5 of 5 entries (filtered from 42 total entries)</p>
                            </div>
                            <div class="right">
                                <button>Previous</button>
                                <p>1/10</p>
                                <button onClick={() => setSettingsTab(3)}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {SettingsTab == 3  &&
                <div className="body-wrapper-two">
                    <div className="body-one">
                        <div className="left">
                            <p>INSPECTIONS</p>
                        </div>
                        <div className="right">
                            <button>Export</button>
                            <img src={threeDots}></img>
                        </div>
                    </div>
                    <div className="body-three">
                        <div className="one">
                            <p>From:</p>
                            <button>Select</button>
                            <p>To:</p>
                            <button>Select</button>
                        </div>
                        <div className="two">
                            <p>All Inspectors:</p>
                            <select name="selectList" id="selectList">
                                <option value="option 1">Select</option>
                                <option value="option 2">25</option>
                            </select>
                        </div>
                        <div className="three">
                            <button onClick={() => history.push('/SettingsDiscountCodes')}>Start Export</button>
                        </div>
                    </div>
                </div>
            }
            </section>
        </div>
    )
}

export default SettingsSampleReports;