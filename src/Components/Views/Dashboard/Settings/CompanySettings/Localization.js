import React from 'react'
import './Localization.css'

function Localization() {
    return (
        <div>
            <div className="company-settings-localization-row">
                <div className="left-col">
                    Units
                </div>
                <div className="center-col">
                    <select className="custom-option form-control">
                        <option></option>
                    </select>
                </div>
                <div className="right-col">
                    This will be used when displaying data across Aurora.
                </div>
            </div>
            <div className="company-settings-localization-row">
                <div className="left-col">
                    Currency
                </div>
                <div className="center-col">
                    <select className="custom-option form-control">
                        <option></option>
                    </select>
                </div>
                <div className="right-col">
                    This will be used for taking online payments through Aurora.
                </div>
            </div>
            <div className="company-settings-localization-row">
                <div className="left-col">
                    Timezone
                </div>
                <div className="center-col">
                    <select className="custom-option form-control">
                        <option></option>
                    </select>
                </div>
                <div className="right-col" style={{ color: '#FF0000' }}>
                    Warning - changing this will change all your inspection times
                </div>
            </div>
            <div className="company-settings-localization-row">
                <div className="left-col">
                    Date Format
                </div>
                <div className="center-col">
                    <select className="custom-option form-control">
                        <option></option>
                    </select>
                </div>
                <div className="right-col">
                    How your dates display on reports, emails, inspection details etc.
                </div>
            </div>
            <div className="company-settings-localization-row">
                <div className="left-col">
                    Country Code
                </div>
                <div className="center-col">
                    <select className="custom-option form-control">
                        <option></option>
                    </select>
                </div>
                <div className="right-col">
                    This will be prefixed on all phone numbers sent using our automated text message features. (US/Canadian users should leave this as "1".)
                </div>
            </div>
        </div>
    )
}

export default Localization
