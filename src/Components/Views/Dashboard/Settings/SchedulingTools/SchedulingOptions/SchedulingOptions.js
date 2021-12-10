import React from 'react';
import './SchedulingOptions.css';

const SchedulingOptions = () => {
    return(
        <div className="schedulingOptions-section">
            <div className="schedulingOptions-wrapper">
                <div className="section-one">
                    <div className="one">
                        <input type="checkbox" value="Paneer" />
                        <p className="content">In-Progress bookings schedule</p>
                        <p className="sub-content">The"New Inspection" form will block the calendar until the form is submitted (or for 10 minutes if abandoned), creating a warning for others and blocking the Online Scheduler. This is useful if you have multiple office staff, call centers, or online schedulers taking orders simultaneously.</p>
                    </div>
                    <div className="two">
                        <input type="checkbox" value="Paneer" />
                        <p className="content">Enable SqFt/Age of Home Data</p>
                        <p className="sub-content">The Get A Quote widget is a customizable way for Clients or Agents to easily see how much an inspection costs and schedule them.</p>
                    </div>
                    <div className="three">
                        <input type="checkbox" value="Paneer" />
                        <p className="content">Enable Get A Quote Widget</p>
                        <p className="sub-content">The Get A Quote widget is a customizable way for Clients or Agents to easily see how much an inspection costs and schedule them.</p>
                    </div>
                    <div className="four">
                        <p className="content">Enable Get A Quote Widget</p>
                        <p className="sub-content">The Get A Quote widget is a customizable way for Clients or Agents to easily see how much an inspection costs and schedule them.</p>
                    </div>
                </div>
                <div className="section-two">
                    <div className="one">
                        <input type="checkbox" value="Paneer" />
                        <p className="content">Capture buyer address</p>
                        <p className="sub-content">This adds fields to capture client addresses in the New Inspection form, the Online Scheduler, and the Inspection Request form..</p>
                    </div>
                    <div className="two">
                        <input type="checkbox" value="Paneer" />
                        <p className="content">Capture client’s agent’s address</p>
                        <p className="sub-content">This adds fields to capture agent addresses in the New Inspection form, the Online Scheduler, and the Inspection Request form.</p>
                    </div>
                    <div className="three">
                        <input type="checkbox" value="Paneer" />
                        <p className="content">Capture listing agent’s address</p>
                        <p className="sub-content">This adds fields to capture agent addresses in the New Inspection form, the Online Scheduler, and the Inspection Request form.</p>
                    </div>
                </div>
                <div className="section-three"></div>
                <div className="section-four"></div>
            </div>
        </div>
    );
}

export default SchedulingOptions;