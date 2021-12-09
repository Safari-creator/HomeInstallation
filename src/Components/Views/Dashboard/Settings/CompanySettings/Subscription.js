import React from 'react'
import './Subscription.css'

function Subscription() {
    return (
        <div>
            <div className="company-setting-subscription-container">
                <span className="free-trial-text">Free Trial</span>
                <div className="subscription-text">
                    You have used 0 of 6 free inspections. When you have reached the limit you will no longer be able to create new inspections. However, you will always have access to your past inspections and data.
                </div>
                <span className="view-plan-btn">VIEW PLANS</span>
            </div>
        </div>
    )
}

export default Subscription
