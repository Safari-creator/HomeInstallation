import React,{useState} from 'react';
import './SettingsAvailability.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import arrowSide from "../../../Software/assets/arrowSide.png"
import threeDots from "../../../Software/assets/threeDots.png"
import Sidebar from '../Sidebar';
import { useHistory } from 'react-router-dom';
import Switch from "react-switch";
import { handleBreakpoints } from '@mui/system';
// import { Switch } from '@mui/material';

const SettingsAvailability = () => {

    const [SettingsTab, setSettingsTab] = useState(1);
    const [Switch, setSwitch] = useState(false);

    const handlePoints = () => {
        // console.log(event.prevent.value);
        console.log('pooja');
        
        
    }
    // const handleSwitch = (Switch) => {
    //     setSwitch({checked});
    // }

    let history = useHistory();
    return(
        <div class="settingsAvailability-section">
            <Sidebar/>
            <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                    <p className="header-subname">Availability</p>
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
                        <div className="para">
                            <p>Add the available hours for each inspector for each day of the week. Your Online Scheduler will allow anytime within this range as long as there is sufficient time to complete the inspection (based on durations specified in Service Types).</p>
                        </div>
                        <div className="open-schedule">
                            <p>Open Schedule</p>
                        </div>
                        <div>
                            {/* <Switch onChange={this.handleChange} checked={this.state.checked}></Switch> */}
                            {/* <Switch></Switch> */}
                        </div>
                        <div></div>
                        <div className="time-slots">
                            <p>Time Slots</p>
                        </div>
                    </div>
                    <div className="body-content">
                    <img src={arrowSide} onClick={() => setSettingsTab(2)}></img>
                    <p>Rebecca Huffine’s Schedule</p>
                </div>
                </div>
            }
            {SettingsTab == 2 &&
                <div className="body-wrapper">
                    <div className="body-one">
                        <div className="para">
                            <p>Add the available hours for each inspector for each day of the week. Your Online Scheduler will allow anytime within this range as long as there is sufficient time to complete the inspection (based on durations specified in Service Types).</p>
                        </div>
                        <div className="open-schedule">
                            <p>Open Schedule</p>
                        </div>
                        <div>
                            <switch></switch>
                        </div>
                        <div></div>
                        <div className="time-slots">
                            <p>Time Slots</p>
                        </div>
                    </div>
                    <div className="body-content">
                        <img src={arrowSide}></img>
                        <p>Rebecca Huffine’s Schedule</p>
                    </div>
                    <div className="body-points">
                        <div className="points">
                            <img className="arrow" src={arrowSide} onClick={() => setSettingsTab(3)}></img>
                            <p>Sunday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Monday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Tuesday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Wednesday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Thursday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Friday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Saturday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                    </div>
                </div>
            }
            {SettingsTab == 3  &&
                <div className="body-wrapper">
                    <div className="body-one">
                        <div className="para">
                            <p>Add the available hours for each inspector for each day of the week. Your Online Scheduler will allow anytime within this range as long as there is sufficient time to complete the inspection (based on durations specified in Service Types).</p>
                        </div>
                        <div className="open-schedule">
                            <p>Open Schedule</p>
                        </div>
                        <div>
                        </div>
                        <div></div>
                        <div className="time-slots">
                            <p>Time Slots</p>
                        </div>
                    </div>
                    <div className="body-content">
                        <img src={arrowSide}></img>
                        <p>Rebecca Huffine’s Schedule</p>
                    </div>
                    <div className="body-points">
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <div className="button-added">
                            <p>Sunday</p>
                            <button onClick={() => history.push('/SettingsTeam')}>Add Block</button>
                            </div>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points-space"></div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Monday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Tuesday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Wednesday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Thursday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Friday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                        <div className="points">
                            <img className="arrow" src={arrowSide}></img>
                            <p>Saturday</p>
                            <img className="dots" src={threeDots}></img>
                        </div>
                    </div>
                </div>
                // </div>
            }
            </section>
        </div>
    )
}

export default SettingsAvailability;