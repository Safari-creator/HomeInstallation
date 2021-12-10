import React from 'react';
import './LocationTags.css';
import cross from '../../../../Software/assets/cross.png';

const LocationTags = () => {
    return(
        <div className="locationTags-section">
            <div className="locationTags-wrapper">
                <div className="section-one">
                    <p className="one">Location Options</p>
                    <p className="two">You can use these to quickly add a location to a comment. Type an option and press enter.</p>
                    <p className="three">How will this look in the report writer?</p>
                    <p className="four">Reset all tags to default</p> 
                </div>
                <div className="section-two">
                    <div className="section">
                        <p>Group 1</p>
                        <button>1st Floor</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>2nd Floor</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>3rd Floor</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Basement</button>
                        <button className="cross"><img src={cross}></img></button>
                        <br></br>
                        <button>Crawlspace</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Attic</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Master</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button className="location">+ Location</button>
                    </div>
                    <div className="line"></div>
                    <div className="section">
                        <p>Group 2</p>
                        <button>North</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>South</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>West</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>East</button>
                        <button className="cross"><img src={cross}></img></button>
                        <br></br>
                        <button>Northwest</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Northeast</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Southwest</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Southeast</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button className="location">+ Location</button>
                    </div>
                    <div className="line"></div>
                    <div className="section">
                        <p>Group 3</p>
                        <button>Kitchen</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Dining Room</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Living Room</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Bedroom</button>
                        <button className="cross"><img src={cross}></img></button>
                        <br></br>
                        <button>Bathroom</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button>Garage</button>
                        <button className="cross"><img src={cross}></img></button>
                        <button className="location">+ Location</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationTags;