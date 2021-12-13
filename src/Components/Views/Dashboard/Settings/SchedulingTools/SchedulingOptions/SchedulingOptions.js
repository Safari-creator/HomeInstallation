import React from 'react';
import './SchedulingOptions.css';

const SchedulingOptions = () => {
    return(
        <div className="schedulingOptions-section">
            <div className="schedulingOptions-wrapper">
                <div className="section-one">
                    <div className="one">
                        <input type="checkbox" value="checkbox" />
                        <p className="content">In-Progress bookings schedule</p>
                        <p className="sub-content">The"New Inspection" form will block the calendar until the form is submitted (or for 10 minutes if abandoned), creating a warning for others and blocking the Online Scheduler. This is useful if you have multiple office staff, call centers, or online schedulers taking orders simultaneously.</p>
                    </div>
                    <div className="one">
                        <input type="checkbox" value="checkbox" />
                        <p className="content">Enable SqFt/Age of Home Data</p>
                        <p className="sub-content">We'll try to automatically fill the square footage and year built from data taken from public records. Always make sure you double check these numbers since they could be outdated.</p>
                    </div>
                    <div className="one">
                        <input type="checkbox" value="checkbox" />
                        <p className="content">Restrict Referral sources</p>
                        <p className="sub-content">Restricts possible referral source value to a list of sources that you define.</p>
                    </div>
                    <div className="two">
                        <p className="content">Referral sources</p>
                        <p className="sub-content">Real Estate Agent, Internet Search, Relocation Company, Past Customer, Other</p>
                    </div>
                </div>
                <div className="line">
                </div>
                <div className="section-one">
                    <div className="one">
                        <input type="checkbox" value="checkbox" />
                        <p className="content">Capture buyer address</p>
                        <p className="sub-content">This adds fields to capture client addresses in the New Inspection form, the Online Scheduler, and the Inspection Request form..</p>
                    </div>
                    <div className="one">
                        <input type="checkbox" value="checkbox" />
                        <p className="content">Capture client’s agent’s address</p>
                        <p className="sub-content">This adds fields to capture agent addresses in the New Inspection form, the Online Scheduler, and the Inspection Request form.</p>
                    </div>
                    <div className="one">
                        <input type="checkbox" value="checkbox" />
                        <p className="content">Capture listing agent’s address</p>
                        <p className="sub-content">This adds fields to capture agent addresses in the New Inspection form, the Online Scheduler, and the Inspection Request form.</p>
                    </div>
                </div>
                <div className="line">
                </div>
                <div className="section-two">
                    <p className="content">CUSTOM SCHEDULING FIELDS</p>
                    <p className="sub-content">If there are any questions you'd like answered during the inspection scheduling process add them below. They'll be available in the Online Scheduler, New Inspection Form, and on the Inspection Details page. Be aware that any changes you make to a custom scheduling field will only apply to inspections going forward.<br></br><b>Text</b> , <b>Number</b> , <b>Checkbox</b> , and <b>Dropdown</b> Fields will also be available when setting up your Service Modifiers</p>
                </div>
                <div className="section-four">
                <p>You don't have any custom scheduling fields set up yet.</p>
                <div><button>ADD A CUSTOM FIELD</button></div>
                </div>
            </div>
        </div>
    );
}

export default SchedulingOptions;