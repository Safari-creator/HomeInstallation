import './Dashboard.css';
import avatar from '../../../Software/assets/dashboard-image.png';

const Dashboard = () => {
    return(
        <div class="dashboard-section">
            <section class="dashboard-header">
                <h2>dashboard-header</h2>
                <div class="header-right">
                    <i class="fas fa-clock"></i><p>14:20 PM Friday April, 2021</p>
                </div>
            </section>
            <section class="dashboard-body">
                <div class="dashboard-left">
                    <div class="two-columns">
                        <div class="today-section">
                            <div class="today-header">
                                <h3>Today</h3>
                            </div>
                            <div class="today-body">
                                <p>No inspector scheduled for today.</p>
                                <div class="today-image">
                                    <img src={avatar} alt =""></img>
                                </div>
                                <button>New Inspector</button>
                            </div>
                        </div>
                        <div class="map-section">
                            <div class="map-header">
                                <h3>Map</h3>
                                </div>
                            <div class="map-body">
                            </div>
                        </div>
                    </div>
                    <div class="one-column">
                        <div class="schedule-section">
                            <div class="schedule-header">
                                <h3>Schedule</h3>
                            </div>
                            <div class="schedule-body">
                                <button>Select Date</button>
                                <button>Inspection</button>
                                <button>Select Time</button>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dashboard-right">
                    <div class="subscribe-section">
                        <div class="subscribe-header">
                            <h3>Subscribe</h3>
                        </div>
                        <div class="subscribe-body">
                            <p>You have used 0 of your 6 free inspections.</p>
                            <h5>Thanks for trying us out! Use your free inspections to get to know the software and see if it is a good fit for you. When you are ready join here.</h5>
                            <div class="subscribe-buttons">
                                <button>Subscribe</button>
                                <button>View Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div class="newinspector-section">
                        <div class="newinspector-header">
                            <h3>New Inspector</h3>
                        </div>
                        <div class="newinspector-body">
                            <h5>Thanks for trying us out! Use your free inspections to get to know the software and see if it is a good fit for you. When you are ready join here.</h5>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div class="inprogress-section">
                        <div class="inprogress-header">
                            <h3>Inprogess</h3>
                        </div>
                        <div class="inprogress-body"></div>
                    </div>
                    <div class="help-section">
                       <h3>Need Help?</h3>
                       <button>Call Us?</button>
                    </div>
                </div>
                    </section>
        </div>
    );
}

export default Dashboard;