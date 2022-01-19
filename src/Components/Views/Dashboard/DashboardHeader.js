import React, { useEffect, useState } from 'react'
import './DashboardHeader.css';
import bars from '../../../Components/Software/assets/bars.png';
import sidebarImage from '../../../Components/Software/assets/sidebar-logo.png';
import headerClock from "../../Software/assets/headerClock.png"
import headerProfile from "../../Software/assets/headerProfile.png"
import headerIconOne from "../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../Software/assets/headerIconTwo.png"


function DashboardHeader({ title }) {
    const [showSidebar, setShowSideBar] = React.useState(false)
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [dayCount, setDayCount] = useState('')
    const [yearCount, setYearCount] = useState(new Date().getFullYear())
    const [MonthCount, setMonthCount] = useState(new Date().getUTCMonth())

    React.useEffect(() => {
        const sidebar = document.querySelector('.sidebar-section')

        // if (showSidebar && window.innerWidth < 1280) {
        //     sidebar.style.left = '0'
        // }
        // else if (!showSidebar && window.innerWidth < 1280) {
        //     sidebar.style.left = "-216px"
        // }
    })

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            const hrs = date.toLocaleTimeString()
            const month = date.getMonth()

            if (new Date().getDay() == 1) {
                setDayCount('Monday')
            }
            else if (new Date().getDay() == 2) {
                setDayCount('Tuesday')
            }
            else if (new Date().getDay() == 3) {
                setDayCount('Wednesday')
            }
            else if (new Date().getDay() == 4) {
                setDayCount('Thursday')
            }
            else if (new Date().getDay() == 5) {
                setDayCount('Friday')
            }
            else if (new Date().getDay() == 6) {
                setDayCount('Saturday')
            }
            else if (new Date().getDay() == 7) {
                setDayCount('Sunday')
            }
            setTime(hrs)
        }, 1000)
    }, [])

    return (
        <div className="dashboard-section">
            {/* {showSidebar && <div className="overlay" onClick={() => setShowSideBar(false)} />} */}
            <section className="dashboard-header">
                <h2 style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={bars} onClick={() => {
                        setShowSideBar(() => true)
                    }} className="fa fa-bars" />
                    <span className="screen-title">{title}</span></h2>
                <img src={sidebarImage} alt="topbarImage" className="topbarImage"></img>
                <div className="header-right">
                    {/* <img className="header-clock" src={headerClock} alt="headerClock"></img><p>14:20 PM Friday April, 2021</p> */}
                    <div className='d-flex align-items-center'>
                        <img className="header-clock" style={{ marginRight: 5 }} src={headerClock} alt="headerClock"></img><p> {time} {`${dayCount}`} {`${MonthCount ? MonthCount + ', ' : ''}`}{yearCount}</p>
                    </div>
                    <img className="header-icon-one" src={headerIconOne} alt="headerIconOne"></img>
                    <img className="header-icon-two" src={headerIconTwo} alt="headerIconTwo"></img>
                    <img className="header-icon-profile" src={headerProfile} alt="headerProfile"></img>
                </div>
            </section>
            {/* <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Dashboard</p>
                </div>
                <div class="header-part-right">
                    <img className="header-clock" src={headerClock} alt="headerClock"></img>
                    <p className="header-time">14:20 PM Friday April, 21</p>
                    <img className="header-icon-one" src={headerIconOne} alt="headerIconOne"></img>
                    <img className="header-icon-two" src={headerIconTwo} alt="headerIconTwo"></img>
                    <img className="header-icon-profile" src={headerProfile} alt="headerProfile"></img>
                </div>
            </section> */}
        </div>
    )
}

export default DashboardHeader
