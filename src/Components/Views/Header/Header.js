import React from 'react'
import Logo from '../../../Assets/images/puzzleInnovation_logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
    return (
        <div style={{background: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky'}}>
            {/* hoiodsfmdf sdfknsfip sdkjfnrjg;lksadfn   */}
            <span><img src={Logo} alt="logo" style={{width: "150px", marginLeft: '30px'}} /></span>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '8%', marginRight: '30px'}}>
            <span>
                <AccountCircleIcon />
            </span>
            <span>
                <NotificationsIcon />
            </span>
            </div>
        </div>
    )
}

export default Header
