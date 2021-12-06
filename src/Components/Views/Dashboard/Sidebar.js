import React from 'react';
import './Sidebar.css';
import sidebarImage from '../../Software/assets/sidebar-logo.png'
import dashboard from "../../Software/assets/dashboard.png"
import createNewReports from "../../Software/assets/createNewReports.png"
import contracts from "../../Software/assets/contracts.png"
import realtors from "../../Software/assets/realtors.png"
import extraPages from "../../Software/assets/extraPages.png"
import reports from "../../Software/assets/reports.png"
import template from "../../Software/assets/template.png"
import contacts from "../../Software/assets/contacts.png"
import metrics from "../../Software/assets/metrics.png"
import automation from "../../Software/assets/automation.png"
import settings from "../../Software/assets/settings.png"
import profile from "../../Software/assets/profile.png"

const Sidebar = ({ setTab }) => {
    return (
        <div className="sidebar-section">
            <div className="sidebar-image">
                <div className="image-wrapper">
                    <img src={sidebarImage} alt="sidebarImage"></img>
                </div>
            </div>
            <div className="sidebar-content">
                <div className="content-heading">
                    <p>System</p>
                </div>
                <div className="contents">
                    <img src={dashboard} alt="icon" className="content-icon" onClick={() => setTab(0)} />
                    <p className="content-name" onClick={() => setTab(0)}>Dashboard</p>
                </div>
                <div className="contents" style={{ top: '153.38px' }}>
                    <img src={createNewReports} alt="icon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(1)}>Create New Reports</p>
                </div>
                <div className="contents" style={{ top: '196.83px' }}>
                    <img src={contracts} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(2)}>Contracts</p>
                </div>
                <div className="contents" style={{ top: '240px' }}>
                    <img src={realtors} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(3)}>Realtors</p>
                </div>
                <div className="contents" style={{ top: '283px' }}>
                    <img src={extraPages} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(4)}>Extra Pages</p>
                </div>
                <div className="contents" style={{ top: '326.38px' }}>
                    <img src={reports} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(5)}>Reports</p>
                </div>
                <div className="contents" style={{ top: '369.46px' }}>
                    <img src={template} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(6)}>Template</p>
                </div>
                <div className="contents" style={{ top: '412.91px' }}>
                    <img src={contacts} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(7)}>Contacts</p>
                </div>
                <div className="contents" style={{ top: '456.37px' }}>
                    <img src={metrics} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(8)}>Metrics</p>
                </div>
                <div className="contents" style={{ top: '499.83px' }}>
                    <img src={automation} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(9)}>Automation</p>
                </div>
                <div className="contents" style={{ top: '543.28px' }}>
                    <img src={settings} alt="reportsIcon" className="content-icon" />
                    <p className="content-name" onClick={() => setTab(10)}>Settings</p>
                </div>
                <div className="buttons" style={{ top: '821px' }}>
                    <button>Help?</button>
                </div>
                <div className="buttons" style={{ top: '890.53px' }}>
                    <button>
                        <img src={profile} alt=""></img>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;