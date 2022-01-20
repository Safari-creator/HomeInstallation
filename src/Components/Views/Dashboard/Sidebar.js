import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import sidebarImage from '../../Software/assets/sidebar-logo.png'

import dashboardSelected from "../../Software/assets/dashboard.png"
import dashboard from "../../Software/assets/Home.png"

import createNewReports from "../../Software/assets/createNewReports.png"
import createNewReportsSelected from "../../Software/assets/CombinedShape.png"

import contracts from "../../Software/assets/contracts.png"
import contractsSelected from "../../Software/assets/Group.png"

import realtors from "../../Software/assets/realtors.png"
import realtorsSelected from "../../Software/assets/Folder.png"

import extraPages from "../../Software/assets/extraPages.png"
import extraPagesSelected from "../../Software/assets/Document.png"

import reports from "../../Software/assets/reports.png"
import reportsSelected from "../../Software/assets/Edit.png"

import template from "../../Software/assets/template.png"
import templateSelected from "../../Software/assets/Document.png"

import contacts from "../../Software/assets/contacts.png"
import contactsSelected from "../../Software/assets/Folder.png"

import metrics from "../../Software/assets/metrics.png"
import metricsSelected from "../../Software/assets/Image.png"

import automation from "../../Software/assets/automation.png"
import automationSelected from "../../Software/assets/CombinedShape.png"

import settings from "../../Software/assets/settings.png"
import settingsSelected from "../../Software/assets/Setting.png"

import profile from "../../Software/assets/profile.png"
import { useHistory, useLocation } from 'react-router-dom'

const Sidebar = ({ setTab }) => {
    const history = useHistory()
    const location = useLocation()
    const [path, setPath] = useState(location.pathname.slice(1, location.pathname.length))

    function changeColor() {
        document.body.style.color = "red";
        return false;
    }

    useEffect(() => {
        setPath(location.pathname.slice(1, location.pathname.length))
    }, [location])

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
                    {
                        path == "Dashboard" ? <img src={dashboardSelected} alt="icon" className={`content-icon`} onClick={() => history.push('/Dashboard')} /> :
                            <img src={dashboard} alt="icon" className={`content-icon`} onClick={() => history.push('/Dashboard')} />
                    }
                    <p className={`content-name ${path == "Dashboard" ? 'active' : ''}`} onClick={() => history.push('/Dashboard')}>Dashboard</p>
                </div>
                <div className="contents" style={{ top: '153.38px' }}>
                    {
                        path == "CreateNewReport" ? <img src={createNewReportsSelected} alt="icon" className={`content-icon`} /> :
                            <img src={createNewReports} alt="icon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "CreateNewReport" ? 'active' : ''}`} onClick={() => history.push('/CreateNewReport')}>Create New Reports</p>
                </div>
                <div className="contents" style={{ top: '196.83px' }}>
                    {
                        path == "Contracts" ? <img src={contractsSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={contracts} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Contracts" ? 'active' : ''}`} onClick={() => history.push('/Contracts')}>Contracts</p>
                </div>
                <div className="contents" style={{ top: '240px' }}>
                    {
                        (path == "Realtors" || path == "AddRealtor") ? <img src={realtorsSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={realtors} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Realtors" || path == "AddRealtor" ? 'active' : ''}`} onClick={() => history.push('/Realtors')}>Realtors</p>
                </div>
                {/* <div className="contents" style={{ top: '283px' }}>
                    {
                        path == "ExtraPages" ? <img src={extraPagesSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={extraPages} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "ExtraPages" ? 'active' : ''}`} onClick={() => history.push('/ExtraPages')}>Extra Pages</p>
                </div> */}
                <div className="contents" style={{ top: '326.38px' }}>
                    {
                        path == "Reports" ? <img src={reportsSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={reports} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Reports" || path == "EditReport" || path == "ReportDetails" ? 'active' : ''}`} onClick={() => history.push('/Reports')}>Reports</p>
                </div>
                <div className="contents" style={{ top: '369.46px' }}>
                    {
                        path == "Template" ? <img src={templateSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={template} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Template" ? 'active' : ''}`} onClick={() => history.push('/Template')}>Template</p>
                </div>
                <div className="contents" style={{ top: '412.91px' }}>
                    {
                        path == "Contacts" ? <img src={contactsSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={contacts} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Contacts" ? 'active' : ''}`} onClick={() => history.push('/Contacts')}>Contacts</p>
                </div>
                <div className="contents" style={{ top: '456.37px' }}>
                    {
                        path == "Metrics" ? <img src={metricsSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={metrics} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Metrics" ? 'active' : ''}`} onClick={() => history.push('/Metrics')}>Metrics</p>
                </div>
                <div className="contents" style={{ top: '499.83px' }}>
                    {
                        path == "Automation" ? <img src={automationSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={automation} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Automation" ? 'active' : ''}`} onClick={() => history.push('/Automation')}>Automation</p>
                </div>
                <div className="contents" style={{ top: '543.28px' }}>
                    {
                        path == "Settings" ? <img src={settingsSelected} alt="reportsIcon" className={`content-icon`} /> :
                            <img src={settings} alt="reportsIcon" className={`content-icon`} />
                    }
                    <p className={`content-name ${path == "Settings" ? 'active' : ''}`} onClick={() => history.push('/Settings')}>Settings</p>
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