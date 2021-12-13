import React from 'react';
import './OnlineScheduler.css';

const OnlineScheduler = () => {
    return(
        <div className="onlineScheduler-section">
            <div className="onlineScheduler-wrapper">
                <input type="checkbox" value="checkbox" />
                <p className="content">Enable Online Scheduling</p>
                <p className="sub-content">The Online Scheduler lets you set up a scheduling system to automate your online booking, complete with service types, fees & cost calculations, and time slots or open blocks.</p>
            </div>
        </div>
    );
}

export default OnlineScheduler;