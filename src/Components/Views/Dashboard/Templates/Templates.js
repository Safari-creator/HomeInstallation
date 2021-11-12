import React from 'react';
import './Templates.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import arrowDown from "../../../Software/assets/arrowDown.png"
import arrowSide from "../../../Software/assets/arrowSide.png"
import threeDots from "../../../Software/assets/threeDots.png"


const Templates = () => {
    return(
        <div class="templates-section">
             <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Templates</p>
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
                <div class="body-part-one">
                    <div class="part-one-left">
                        <p>RESIDENTAL TEMPLATE</p>
                    </div>
                    <div class="part-one-right">
                        <button class="my-templates">
                            <p>My Templates</p><img src={arrowDown}></img></button>
                            <button class="templates">Templates</button>
                            <img class="image-dots" src={threeDots}></img>
                    </div>
                </div>
                <div class="body-part-two">
                    <div class="three-columns">
                        <div class="column-one">
                            <div class="column-one-header">
                                <p>SECTION</p>
                            </div>
                            <div class="column-one-body">
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Inspection Details</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Roof</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Exterior</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Heating</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Cooling</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Plumbing</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Electrical</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Fireplace</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Interior</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Built-in Appliances</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Garrage</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="section-button">
                                     <button>Add Section</button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="column-two">
                            <div class="items">
                                <div class="items-header">
                                    <p>ITEMS</p>
                                </div>
                                <div class="items-body">
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>General</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="items-button">
                                     <button>Add Item</button>
                                </div>
                            </div>
                            </div>
                            <div class="attachments">
                                <div class="attachments-header">
                                    <p>ATTACHMENTS</p>
                                </div>
                                <div class="attachments-body">
                                    <p>No attachments yet</p>
                                    <div class="attachments-button">
                                     <button>Add Section</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column-three">
                            <div class="informational">
                                    <div class="informational-header">
                                        <p>INFORMATIONAL</p>
                                    </div>
                                    <div class="informational-body">
                                    <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>In Attendance</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Occupacy</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Style</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Temperature</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Type of building</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                <div class="row">
                                    <img class="image-arrow" src={arrowSide}></img>
                                    <p>Weather Conditions</p>
                                    <img class="image-dots" src={threeDots}></img>
                                </div>
                                    </div>
                            </div>
                            <div class="limitations">
                                <div class="limitations-header">
                                        <p>LIMITATIONS</p>
                                    </div>
                                    <div class="limitations-body">
                                        <p>No records yet.</p>
                                        <div class="limitations-button">
                                     <button>Add Records</button>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>
        </div>
    );
}

export default Templates;