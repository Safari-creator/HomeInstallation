import React from 'react'
import './Integrations.css'

function Integrations() {
    return (
        <div>
            <div className="user-settings-integration-row">
                <div className="left-col">
                    CALENDARS
                </div>
                <div className="right-col">
                    <div className="customize-hover-btn">CUSTOMIZE CALENDAR TEXT</div>
                </div>
            </div>
            <div className="user-settings-integration-row">
                <div className="left-col">
                    <div style={{ marginBottom: 38, display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" style={{ marginRight: 20, width: 22, height: 22 }} />iCal Calendar
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" style={{ marginRight: 20, width: 22, height: 22 }} />Google Calendar
                    </div>
                </div>
                <div className="right-col">
                </div>
            </div>
        </div>
    )
}

export default Integrations
