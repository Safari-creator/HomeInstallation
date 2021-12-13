import React from 'react';
import './InspectionRequestForm.css';

const InspectionRequestForm = () => {
    return(
        <div className="inspectionRequestForm-section">
            <div className="inspectionRequestForm-wrapper">
                <input type="checkbox" value="Paneer" />
                <p className="content">Enable Inspection Request Form</p>
                <p className="sub-content">The Inspection Request Form is the fastest way to start getting bookings online - ideal for new inspectors. Just configure a few basic options and link to the form on your website:My Inspection Request Form</p>
            </div>
        </div>
    );
}

export default InspectionRequestForm;