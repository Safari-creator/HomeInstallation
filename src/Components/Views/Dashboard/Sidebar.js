import './Sidebar.css';
import sidebarImage from '../../Software/assets/sidebar-logo.png'
import ReportsImage from '../../Software/assets/Reports.png'

const Sidebar = ({setTab }) => {
    return (
        <center class="sidebar-section">
            <div class="container">
                <div class="sidebar-wrapper">
                    <div>
                        <img src={sidebarImage} alt="sidebarImage"></img>
                    </div>
                    <p>System</p>
                    <div>
                        {/* <img src={ReportsImage} alt =""} */}

                        </div>
                    
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(1)}>Reports</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(2)}>Create New Reports</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(3)}>Contracts</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(4)}>Realtors</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(5)}>Extra Pages</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(0)}>Dashboard</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(5)}>Template</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(5)}>Contacts</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(5)}>Metrics</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(5)}>Automation</span>
                    <span style={{ cursor: 'pointer' }} className="sidebar-item" onClick={() => setTab(5)}>Settings</span>
                </div>
            </div>
        </center>
    );
}

export default Sidebar;