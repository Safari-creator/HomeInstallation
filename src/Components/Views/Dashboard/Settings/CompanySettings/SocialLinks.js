import React from 'react'
import './SocialLinks.css'
import fbIcon from '../../../../../Assets/software-images/social-icons/fb.svg'
import twitterIcon from '../../../../../Assets/software-images/social-icons/twitter.svg'
import youtubeIcon from '../../../../../Assets/software-images/social-icons/youtube.svg'
import gplusIcon from '../../../../../Assets/software-images/social-icons/googleplus.svg'
import linkedinIcon from '../../../../../Assets/software-images/social-icons/linkedin.svg'
import instaIcon from '../../../../../Assets/software-images/social-icons/instagram.svg'
import yelpIcon from '../../../../../Assets/software-images/social-icons/yelp.svg'

function SocialLinks() {
    return (
        <div>
            <div className="company-setting-social-container">
                <img src={fbIcon} className="company-setting-social-icon" />
                <input type="text" className="company-setting-social-input-box" />
            </div>
            <div className="company-setting-social-container">
                <img src={twitterIcon} className="company-setting-social-icon" />
                <input type="text" className="company-setting-social-input-box" />
            </div>
            <div className="company-setting-social-container">
                <img src={youtubeIcon} className="company-setting-social-icon" />
                <input type="text" className="company-setting-social-input-box" />
            </div>
            <div className="company-setting-social-container">
                <img src={gplusIcon} className="company-setting-social-icon" />
                <input type="text" className="company-setting-social-input-box" />
            </div>
            <div className="company-setting-social-container">
                <img src={linkedinIcon} className="company-setting-social-icon" />
                <input type="text" className="company-setting-social-input-box" />
            </div>
            <div className="company-setting-social-container">
                <img src={instaIcon} className="company-setting-social-icon" />
                <input type="text" className="company-setting-social-input-box" />
            </div>
            <div className="company-setting-social-container">
                <img src={yelpIcon} className="company-setting-social-icon" />
                <input type="text" className="company-setting-social-input-box" />
            </div>
        </div>
    )
}

export default SocialLinks
