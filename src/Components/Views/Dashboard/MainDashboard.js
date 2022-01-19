import React, { useEffect, useState } from 'react'
import Reports from './Reports/Reports';
import EditReport from './Reports/EditReport'
import ReportDetails from './Reports/ReportDetail'
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
    const [path, setPath] = useState(location.pathname.split('/')[1])
    const [title, setTitle] = useState(location.pathname.split('/')[1])

    useEffect(() => {
        if (location.pathname.split('/')[1] == 'CreateNewReport')
            setTitle('Create New Report')

        else if (location.pathname.split('/')[1] == 'ExtraPages')
            setTitle('Extra Pages')

        else if (location.pathname.split('/')[1] == 'AddRealtor')
            setTitle('Add Realtor')

        else if (location.pathname.split('/')[1] == 'EditReport')
            setTitle('Edit Report')

        else if (location.pathname.split('/')[1] == 'ReportDetails')
            setTitle('Report Details')

        else
            setTitle(location.pathname.split('/')[1])
        setPath(location.pathname.split('/')[1])
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
                    {path === 'EditReport' &&
                        <EditReport></EditReport>
                    }
                    {path === 'ReportDetails' &&
                        <ReportDetails></ReportDetails>
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
