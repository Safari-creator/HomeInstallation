import React from 'react'
import './Agents.css'

function Agents() {
    return (
        <div>
            <div className="company-settings-agents-row">
                <div className="left-col">
                    Display Client’s Agent
                </div>
                <div className="right-col">
                    <p>When enabled, the client's agent will be displayed when viewing the Inspection & Reports.</p>
                </div>
            </div>
            <div className="company-settings-agents-row">
                <div className="left-col">
                    Display Listing Agent
                </div>
                <div className="right-col">
                    <p>When enabled, the listing agent will be displayed when viewing the Inspection.</p>
                </div>
            </div>
        </div>
    )
}

export default Agents
