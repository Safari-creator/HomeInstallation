import React from 'react'
import './Agreements.css';

function Agreement() {
    return (
        <div>
            <div className="company-settings-Calendar-row flex-column">
                <div className="left-col">
                    Inspect Agreement
                </div>
                <div className="right-col flex-row">
                    <p>(click to edit)</p>
                </div>
            </div>
            <div className="company-settings-Calendar-row">
                <div className="left-col">

                </div>
                <div className="right-col">
                    {/* <p>Customize what you see when hovering over an inspection or event on the calendar. Note that this setting applies to everyone in the company.</p> */}
                    <div className="customize-hover-btn width0">CREATE A NEW INSPECTION AGREEMENT</div>
                </div>
            </div>
        </div>
    )
}

export default Agreement
