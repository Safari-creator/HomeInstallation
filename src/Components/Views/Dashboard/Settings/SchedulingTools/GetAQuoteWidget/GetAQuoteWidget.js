import React from 'react';
import './GetAQuoteWidget.css';

const GetAQuoteWidget = () => {
    return(
        <div className="getAQuoteWidget-section">
            <div className="getAQuoteWidget-wrapper">
                <input type="checkbox" value="Paneer" />
                <p className="content">Enable Get A Quote Widget</p>
                <p className="sub-content">The Get A Quote widget is a customizable way for Clients or Agents to easily see how much an inspection costs and schedule them.</p>
            </div>
        </div>
    );
}

export default GetAQuoteWidget;