import React from 'react'
import './UserOptions.css'

function UserOptions() {
    return (
        <div>
            <div className="user-settings-user-options-row">
                <div className="left-col">
                    Email Address
                </div>
                <div className="right-col">
                    <div className="customize-hover-btn">CHANGE EMAIL</div>
                </div>
            </div>
            <div className="user-settings-user-options-row">
                <div className="left-col">
                    Password
                </div>
                <div className="right-col">
                    <div className="customize-hover-btn">CHANGE PASSWORD</div>
                </div>
            </div>
            <div className="user-settings-line-divider" />
            <div className="user-settings-user-options-row">
                <div className="left-col">
                    Disable Chat Functions Bubble
                </div>
                <div className="center-col">
                    <div style={{ marginBottom: 38, display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" style={{ marginRight: 20, width: 22, height: 22 }} />Disable All Chat Functions
                    </div>
                </div>
                <div className="right-col" style={{ color: '#FF0000' }}>
                    This will disable the chat bubble (green button on bottom-right). You will not be able to contact tech support, get warnings for undelivered emails/texts, receive notifications about your account, or hear about new features from our team.
                </div>
            </div>
            <div className="user-settings-user-options-row">
                <div className="left-col">
                    Disable Review Request
                </div>
                <div className="center-col">
                    <div style={{ marginBottom: 38, display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" style={{ marginRight: 20, width: 22, height: 22 }} />Do not send requests to review Aurora
                    </div>
                </div>
                <div className="right-col">
                </div>
            </div>
            <div className="user-settings-user-options-row">
                <div className="left-col">
                    Beta Testing
                </div>
                <div className="center-col">
                    <div style={{ marginBottom: 38, display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" style={{ marginRight: 20, width: 22, height: 22 }} />Enables Beta Features
                    </div>
                </div>
                <div className="right-col">
                    This will show experimental features that we are testing and asking for feedback on. Join the Beta Tester Group on Facebook to discuss and offer feedback!
                </div>
            </div>
        </div>
    )
}

export default UserOptions
