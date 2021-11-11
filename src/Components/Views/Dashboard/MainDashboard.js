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

function MainDashboard() {

    const [tab, setTab] = useState(0);
    return (
        // <center className="maindashboard-section">
        //     <div className="container">
        //         <div className="maindashboard-wrapper">
        //             <Sidebar setTab={setTab}/>
        //             <div className="tabs-wrapper">
        //             {tab === 1 &&
        //             <Reports></Reports>
        //             }
        //             {tab === 2 &&
        //             <CreateNewReports></CreateNewReports>
        //             }
        //             {tab === 3 &&
        //             <Contracts></Contracts>
        //             }
        //             {tab === 4 &&
        //             <Realtors></Realtors>
        //             }
        //             {tab === 5 &&
        //             <ExtraPages></ExtraPages>
        //             }
        //             {tab === 0 &&
        //             <Dashboard></Dashboard>
        //             }
        //             {tab === 6 &&
        //             <Templates></Templates>
        //             }
        //             {tab === 7 &&
        //             <Contacts></Contacts>
        //             }
        //             {tab === 8 &&
        //             <Metrics></Metrics>
        //             }
        //             {tab === 9 &&
        //             <Automation></Automation>
        //             }
        //             {tab === 10 &&
        //             <Settings></Settings>
        //             }
        //             </div>
        //         </div>
        //     </div>
        // </center>
        <div className="maindashboard-section">
            <Sidebar setTab={setTab} />
            <div className="tabs-section">
                <div className="container">
                    <DashboardHeader />
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
                        <Realtors></Realtors>
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
                </div>
            </div>
        </div>
    )
}

export default MainDashboard;
