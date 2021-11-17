const Settings = () => {
    return(
        <div class="settings-section">
             <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                </div>
                <div class="header-part-right">
                    <img className="header-clock" src={headerClock} alt="headerClock"></img>
                    <p className="header-time">14:20 PM Friday April, 21</p>
                    <img className="header-icon-one" src={headerIconOne} alt="headerIconOne"></img>
                    <img className="header-icon-two" src={headerIconTwo} alt="headerIconTwo"></img>
                    <img className="header-icon-profile" src={headerProfile} alt="headerProfile"></img>
                </div>
            </section>
            <section class="body-part">
                <div class="body-header">
                        <p>You haven't set up any services yet. Add one below:</p>
                </div>
                <div class="body-content">
                <div class="button">
                    <button>Add Services</button>
                </div>
                <div class="button">
                    <button>Undelete Services</button>
                </div>
                </div>
                    
            </section>
        </div>
    )
}