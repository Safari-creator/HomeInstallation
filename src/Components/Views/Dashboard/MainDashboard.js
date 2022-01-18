import React, { useState } from 'react'
import Reports from './Reports/Reports';
import CreateNewReports from './CreateNewReports/CreateNewReports';
import Contracts from './Contracts/Contracts';
import Realtors from './Realtors/Realtors';
import ExtraPages from './ExtraPages/ExtraPages';
import Dashboard from './Dashboard/Dashboard';
import Templates from './Templates/Templates';
import Contacts from './Contacts/Contacts';
import Metrics from './Metrics/Metrics';
import Automation from './Automation/Automation';
import Settings from './Settings/Settings';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import AddRealtors from './Realtors/AddRealtors';

function MainDashboard() {

    const [tab, setTab] = useState(0);
    const [title, setTitle] = useState(["Dashboard", "Create New Report", "Contracts", "Realtors", "Extra Pages", "Reports", "Templates", "Contacts", "Metrics", "Automation", "Settings", "Add Realtors"])
    return (
        <div className="maindashboard-section">
            <Sidebar setTab={setTab} />
            <div className="tabs-section">
                <div className="container-fluid p-0">
                    <DashboardHeader title={title[tab]} />
                    {tab === 0 &&
                        <Dashboard></Dashboard>
                    }
                    {tab === 1 &&
                        <CreateNewReports></CreateNewReports>
                    }
                    {tab === 2 &&
                        <Contracts></Contracts>
                    }
                    {tab === 3 &&
                        <Realtors setTab={setTab}></Realtors>
                    }
                    {tab === 4 &&
                        <ExtraPages></ExtraPages>
                    }
                    {tab === 5 &&
                        <Reports></Reports>
                    }
                    {tab === 6 &&
                        <Templates></Templates>
                    }
                    {tab === 7 &&
                        <Contacts></Contacts>
                    }
                    {tab === 8 &&
                        <Metrics></Metrics>
                    }
                    {tab === 9 &&
                        <Automation></Automation>
                    }
                    {tab === 10 &&
                        <Settings></Settings>
                    }
                    {tab === 11 &&
                        <AddRealtors></AddRealtors>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainDashboard;
