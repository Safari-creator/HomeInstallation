import React from 'react';
import './Reports.css';

const Reports = () => {
    return (
        <div className="dashboard-section">
            <section className="dashboard-body">
                <div className="dashboard-left">
                    <div className="two-columns">
                        <div className="today-section">
                            <div className="today-header">
                                <h3>Today</h3>
                            </div>
                            <div className="today-body">
                                <p>No inspector scheduled for today.</p>
                                <button>New Inspector</button>
                            </div>
                        </div>
                        <div className="map-section">
                            <div className="map-header">
                                <h3>Map</h3>
                            </div>
                            <div className="map-body">
                            </div>
                        </div>
                    </div>
                    <div className="one-column">
                        <div className="schedule-section">
                            <div className="schedule-header">
                                <h3>Schedule</h3>
                            </div>
                            <div className="schedule-body">
                                <button>Select Date</button>
                                <button>Inspection</button>
                                <button>Select Time</button>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="subscribe-section">
                        <div className="subscribe-header">
                            <h3>Subscribe</h3>
                        </div>
                        <div className="subscribe-body">
                            <p>You have used 0 of your 6 free inspections.</p>
                            <h5>Thanks for trying us out! Use your free inspections to get to know the software and see if it is a good fit for you. When you are ready join here.</h5>
                            <div className="subscribe-buttons">
                                <button>Subscribe</button>
                                <button>View Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="newinspector-section">
                        <div className="newinspector-header">
                            <h3>New Inspector</h3>
                        </div>
                        <div className="newinspector-body">
                            <h5>Thanks for trying us out! Use your free inspections to get to know the software and see if it is a good fit for you. When you are ready join here.</h5>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className="inprogress-section">
                        <div className="inprogress-header">
                            <h3>Inprogess</h3>
                        </div>
                        <div className="inprogress-body"></div>
                    </div>
                    <div className="help-section">
                        <h3>Need Help?</h3>
                        <button>Call Us?</button>
                    </div>
                </div>
            </section>
        </div>
        // <div className="reports-section">
        //     <section className="reports-body">
        //         <div className="body-header">
        //             <label>Search</label>
        //             <input type="text" placeholder="keyboard" style={{ marginRight: "20px" }}></input>
        //             <label>Reports Date</label>
        //             <input type="text" placeholder="Start Date" style={{ marginRight: "5px" }}></input>
        //             <input type="text" placeholder="End Date" style={{ marginRight: "20px" }}></input>
        //             <button style={{ backgroundColor: "#fb8200" }}>Search</button>
        //             <button style={{ backgroundColor: "#00a1fb" }}>Reset</button>
        //         </div>
        //         <div className="body-main">
        //             <div className="body-one">
        //                 <h3>House 1</h3>
        //                 <p>This file will be deleted in 12 days and 2 hours | 06-Oct-2021 7:35 am</p>
        //                 <button>Print</button>
        //                 <button>Create PDF</button>
        //                 <button>Email</button>
        //                 <button>Edit</button>
        //                 <button>Delete</button>
        //             </div>
        //             <div className="body-one">
        //                 <h3>Test 1</h3>
        //                 <p>This file will be deleted in 12 days and 2 hours | 06-Oct-2021 7:35 am</p>
        //                 <button>Print</button>
        //                 <button>Create PDF</button>
        //                 <button>Email</button>
        //                 <button>Edit</button>
        //                 <button>Delete</button>
        //             </div>
        //             <div className="body-one">
        //                 <h3>Test 2</h3>
        //                 <p>This file will be deleted in 12 days and 2 hours | 06-Oct-2021 7:35 am</p>
        //                 <button>Print</button>
        //                 <button>Create PDF</button>
        //                 <button>Email</button>
        //                 <button>Edit</button>
        //                 <button>Delete</button>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    );
}

export default Reports;