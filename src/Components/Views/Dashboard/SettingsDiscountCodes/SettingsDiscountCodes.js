import React,{useState} from 'react';
import './SettingsDiscountCodes.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import arrowSide from "../../../Software/assets/arrowSide.png"
import threeDots from "../../../Software/assets/threeDots.png"
import Sidebar from '../Sidebar';
import { useHistory } from 'react-router-dom';

const SettingsDiscountCodes = () => {

    const [SettingsTab, setSettingsTab] = useState(1);
    const [Switch, setSwitch] = useState(false);

    const handlePoints = () => {
        console.log('pooja');      
    }
  
    let history = useHistory();
    return(
        <div class="settingsDiscountCodes-section">
            <Sidebar/>
            <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                    <p className="header-subname">Discount Codes</p>
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
                    <div className="body-one">
                        <div className="left">
                            <p>DISCOUNT CODES</p>
                        </div>
                        <div className="right">
                            <button>Services</button>
                            <img src={threeDots}></img>
                        </div>
                    </div>
                    <div className="body-two">
                        <div className="body-content">
                            <p>No Discount Resolved.</p>
                        </div>
                        <div className="button">
                            <button onClick={() => setSettingsTab(2)}>Add Discounts</button>
                        </div>
                    </div>
                </div>
            }
            {SettingsTab == 2  &&
                <div className="body-wrapper">
                    <div className="body-one">
                        <div className="left">
                            <p>DISCOUNT CODES</p>
                        </div>
                        <div className="right">
                            <button>Services</button>
                            <img src={threeDots}></img>
                        </div>
                    </div>
                    <div className="body-three">
                        <div className="one">
                            <div className="left">
                                <img className="arrowside" src={arrowSide} onClick={() => setSettingsTab(3)}></img>
                                <p className="main">New Coupon</p>
                                <p className="sub1">(10% off) 0 Uses</p>
                                <p className="sub2">0 Uses</p>
                                
                            </div>
                            <div className="right">
                                <switch></switch>
                                <img className="threedots" src={threeDots}></img>
                            </div>
                        </div>
                        <div className="button">
                            <button>Add Services</button>
                        </div>
                    </div>
                </div>
            }
            {SettingsTab == 3  &&
                <div className="body-wrapper">
                    <div className="body-one">
                        <div className="left">
                            <p>DISCOUNT CODES</p>
                        </div>
                        <div className="right">
                            <button>Services</button>
                            <img src={threeDots}></img>
                        </div>
                    </div>
                    <div className="body-three">
                        <div className="one">
                            <div className="left">
                                <img className="arrowside" src={arrowSide}></img>
                                <p className="main">New Coupon</p>
                                <p className="sub1">(10% off) 0 Uses</p>
                                <p className="sub2">0 Uses</p>
                                
                            </div>
                            <div className="right">
                                <switch></switch>
                                <img className="threedots" src={threeDots}></img>
                            </div>
                        </div>
                        <div className="two">
                            <div className="arrowdown">
                                <p>Details</p>
                                <div className="row-one">
                                    <label>Code:</label>
                                    <input type="text"></input>
                                    <label>Type:</label>
                                    <input type="text"></input>
                                    <label>Amount/Percentage:</label>
                                    <input type="text"></input>
                                </div>
                                <div className="row-two">
                                    <label>Description (Client Facing):</label>
                                    <input type="text"></input>
                                    <label>Notes (Internal): </label>
                                    <input type="text"></input>
                                </div>
                                <div className="row-three">
                                    <label>Applied To Services</label>
                                    <select name="selectList" id="selectList">
                                        <option value="option 1">Select</option>
                                        <option value="option 2">other numbers</option>
                                    </select>
                                    <label>Applied to Add Ons:</label>
                                    <select name="selectList" id="selectList">
                                        <option value="option 1">Select</option>
                                        <option value="option 2">other numbers</option>
                                    </select>
                                </div>
                                <div className="row-four">
                                   <label>Max Uses (Blank for Unlimited)</label>
                                    <select name="selectList" id="selectList">
                                        <option value="option 1">Select</option>
                                        <option value="option 2">other numbers</option>
                                    </select>
                                </div>
                                <div className="row-five">
                                    <label>Expiration Date (Blank for Unlimited):</label>
                                    <select name="selectList" id="selectList">
                                        <option value="option 1">Select</option>
                                        <option value="option 2">other numbers</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button">
                                <button>Add Services</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            }
            </section>
        </div>
    )
}

export default SettingsDiscountCodes;