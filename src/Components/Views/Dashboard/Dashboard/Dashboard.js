import './Dashboard.css';
import avatar from '../../../Software/assets/dashboard-image.png';
import React, { useState } from 'react';
import bars from '../../../Software/assets/bars.png'
import { useEffect } from 'react';
import sidebarImage from '../../../Software/assets/sidebar-logo.png'

const   Dashboard = () => {
    // const [showSidebar, setShowSideBar] = useState(false)

    // useEffect(() => {
    //     const sidebar = document.querySelector('.sidebar-section')

    //     if (showSidebar && window.innerWidth < 1280) {
    //         sidebar.style.left = '0'
    //     }
    //     else if (!showSidebar && window.innerWidth < 1280) {
    //         sidebar.style.left = "-216px"
    //     }
    // })

    return (
        <div className="dashboard-section">
            {/* {showSidebar && <div className="overlay" onClick={() => setShowSideBar(false)} />}
            <section className="dashboard-header">
                <h2 style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={bars} onClick={() => {
                        setShowSideBar(() => true)
                    }} className="fa fa-bars" />
                    <span className="screen-title">Dashboard</span></h2>
                <img src={sidebarImage} alt="topbarImage" className="topbarImage"></img>
                <div className="header-right">
                    <i className="fas fa-clock"></i><p>14:20 PM Friday April, 2021</p>
                </div>
            </section> */}
            <section className="dashboard-body">
                <div className="dashboard-left">
                    <div className="two-columns">
                        <div className="today-section">
                            <div className="today-header">
                                <h3>Today</h3>
                            </div>
                            <div className="today-body">
                                <p>No inspector scheduled for today.</p>
                                <div className="today-image">
                                    <img src={avatar} alt=""></img>
                                </div>
                                <button>New Inspector</button>
                            </div>
                        </div>
                        <div className="map-section">
                            <div className="map-header">
                                <h3>Map</h3>
                            </div>
                            <div className="map-body">
                            </div>
                        </div>
                    </div>
                    <div className="one-column">
                        <div className="schedule-section">
                            <div className="schedule-header">
                                <h3>Schedule</h3>
                            </div>
                            <div className="schedule-body">
                                <button>Select Date</button>
                                <button>Inspection</button>
                                <button>Select Time</button>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="subscribe-section">
                        <div className="subscribe-header">
                            <h3>Subscribe</h3>
                        </div>
                        <div className="subscribe-body">
                            <p>You have used 0 of your 6 free inspections.</p>
                            <h5>Thanks for trying us out! Use your free inspections to get to know the software and see if it is a good fit for you. When you are ready join here.</h5>
                            <div className="subscribe-buttons">
                                <button>Subscribe</button>
                                <button>View Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="newinspector-section">
                        <div className="newinspector-header">
                            <h3>New Inspector</h3>
                        </div>
                        <div className="newinspector-body">
                            <h5>Thanks for trying us out! Use your free inspections to get to know the software and see if it is a good fit for you. When you are ready join here.</h5>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className="inprogress-section">
                        <div className="inprogress-header">
                            <h3>Inprogess</h3>
                        </div>
                        <div className="inprogress-body"></div>
                    </div>
                    <div className="help-section">
                        <h3>Need Help?</h3>
                        <button>Call Us?</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;