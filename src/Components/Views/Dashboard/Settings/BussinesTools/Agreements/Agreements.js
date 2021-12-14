import React from 'react'

function Agreement() {
    return (
        <div>
            <div className="company-settings-Calendar-row">
                <div className="left-col">
                    Inspect Agreement
                </div>
                {/* <div className="right-col">
                    <p>Allows you to preview customizable info about an inspection when hovering over it on the calendar. Note that this may slow down calendar load times due to more data being loaded!</p>
                </div> */}
            </div>
            <div className="company-settings-Calendar-row">
                <div className="left-col">

                </div>
                <div className="right-col">
                    {/* <p>Customize what you see when hovering over an inspection or event on the calendar. Note that this setting applies to everyone in the company.</p> */}
                    <div className="customize-hover-btn">CREATE A NEW INSPECTION AGREEMENT</div>
                </div>
            </div>
        </div>
    )
}

export default Agreement
