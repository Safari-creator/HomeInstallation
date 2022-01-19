import React, { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom'

function MainDashboard() {
    const location = useLocation()
    const [path, setPath] = useState(location.pathname.slice(1, location.pathname.length))
    const [title, setTitle] = useState(location.pathname.slice(1, location.pathname.length))

    useEffect(() => {
        if (location.pathname.slice(1, location.pathname.length) == 'CreateNewReport')
            setTitle('Create New Report')

        else if (location.pathname.slice(1, location.pathname.length) == 'ExtraPages')
            setTitle('Extra Pages')

        else if (location.pathname.slice(1, location.pathname.length) == 'AddRealtor')
            setTitle('Add Realtor')

        else
            setTitle(location.pathname.slice(1, location.pathname.length))
        setPath(location.pathname.slice(1, location.pathname.length))
        window.scrollTo(0, 0)

    }, [location.pathname])

    return (
        <div className="maindashboard-section">
            <Sidebar />
            <div className="tabs-section">
                <div className="container-fluid p-0">
                    <DashboardHeader title={title} />

                    {path === 'Dashboard' &&
                        <Dashboard></Dashboard>
                    }
                    {path === 'CreateNewReport' &&
                        <CreateNewReports></CreateNewReports>
                    }
                    {path === 'Contracts' &&
                        <Contracts></Contracts>
                    }
                    {path === 'Realtors' &&
                        <Realtors></Realtors>
                    }
                    {path === 'ExtraPages' &&
                        <ExtraPages></ExtraPages>
                    }
                    {path === 'Reports' &&
                        <Reports></Reports>
                    }
                    {path === 'Template' &&
                        <Templates></Templates>
                    }
                    {path === 'Contacts' &&
                        <Contacts></Contacts>
                    }
                    {path === 'Metrics' &&
                        <Metrics></Metrics>
                    }
                    {path === 'Automation' &&
                        <Automation></Automation>
                    }
                    {path === 'Settings' &&
                        <Settings></Settings>
                    }
                    {path === 'AddRealtor' &&
                        <AddRealtors></AddRealtors>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainDashboard;
