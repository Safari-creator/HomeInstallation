import React from 'react'
import bars from '../../../Components/Software/assets/bars.png';
import sidebarImage from '../../../Components/Software/assets/sidebar-logo.png';


function DashboardHeader() {
    const [showSidebar, setShowSideBar] = React.useState(false)


    React.useEffect(() => {
        const sidebar = document.querySelector('.sidebar-section')

        if (showSidebar && window.innerWidth < 1280) {
            sidebar.style.left = '0'
        }
        else if (!showSidebar && window.innerWidth < 1280) {
            sidebar.style.left = "-216px"
        }
    })
    return (
        <div className="dashboard-section">
            {showSidebar && <div className="overlay" onClick={() => setShowSideBar(false)} />}
            <section className="dashboard-header">
                <h2 style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={bars} onClick={() => {
                        setShowSideBar(() => true)
                    }} className="fa fa-bars" /><span className="screen-title">Dashboard</span></h2>
                {/* <img src={sidebarImage} alt="topbarImage" className="topbarImage"></img> */}
                <div className="header-right">
                    <i className="fas fa-clock"></i><p>14:20 PM Friday April, 2021</p>
                </div>
            </section>
        </div>
    )
}

export default DashboardHeader
