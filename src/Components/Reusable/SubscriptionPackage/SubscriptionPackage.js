import React from 'react'
import './SubscriptionPackage.css'

function SubscriptionPackage({image}) {
    return (
        <div className="box-shadow">
            <div className={image?"package-header": "no-ribbon"}>
                <div className="package-header-text">
                <h6>Monthly</h6>
                <h1>$ 89/month</h1>
                <h6>All-in-one Software</h6>
                </div>
                {image?
                    <div className="red-ribbon disable">
                    <img src={image} width="200"/>
                    </div>
                : ""} 
            </div>
            <p className="package-content">Training Videos</p>
            <p className="package-content">Secured & Encrypted Data Protection</p>
            <p className="package-content">PDF Generation</p>
            <p className="package-content">Custom Narrative Interface</p>
            <p className="package-content">Photo Editor (annotate directly on photo)</p>
            <p className="package-content">Customizable Templates</p>
            <p className="package-content">Fully Functional Mobile App</p>
            <p className="package-content">Email Reports Straight From Software</p>
            <p className="package-content">Print From Software</p>
            <p className="package-content">Realtor Database</p>
            {/* <ul>
                <li className="package-content">Training Videos</li>
                <li className="package-content">Secured & Encrypted Data Protection</li>
                <li className="package-content">PDF Generation</li>
                <li className="package-content">Custom Narrative Interface</li>
                <li className="package-content">Photo Editor (annotate directly on photo)</li>
                <li className="package-content">Customizable Templates</li>
                <li className="package-content">Fully Functional Mobile App</li>
                <li className="package-content">Email Reports Straight From Software</li>
                <li className="package-content">Print From Software</li>
                <li className="package-content">Realtor Database</li>
            </ul> */}
            {/* <div className="package-content">
            </div> */}
        </div>
    )
}

export default SubscriptionPackage
