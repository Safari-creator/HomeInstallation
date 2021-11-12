import React from 'react';
import './Reports.css';

const Reports = () => {
    return (
        <div className="extrapages-section">
            <section className="body-part">
                <div class="body-part-one">
                    <div class="part-one-left">
                        <p>Search</p>
                        <input type="text" placeholder="Start Date"></input>
                    </div>
                    <div class="part-one-right">
                        <p>Report Date</p>
                        <input type="text" placeholder="Start Date"></input>
                        <input type="text" placeholder="End Date"></input>
                    </div>

                    <div class="button">
                        <button class="yellow-button">Search</button>
                        <button class="blue-button">Reset</button>
                    </div>

                </div>
                <div class="body-part-two report-body">
                    <div class="part-two-content">
                        <div class="row">
                            <h2 class="row-heading">House 1</h2>
                            <div class="details-left"><p>Showing 5 to 5 of 5 entries (filtered from 42 total entries)</p></div>
                            <div class="button row-reverse">
                                <button class="yellow-button">Print</button>
                                <button class="blue-button">Create PDF</button>
                                <button class="yellow-button">Email</button>
                                <button class="blue-button">Edit</button>
                                <button class="yellow-button">Delete</button>
                            </div>
                        </div>
                        <hr class="row-divider" />
                        <div class="row">
                            <h2 class="row-heading">Test 1</h2>
                            <div class="details-left"><p>Showing 5 to 5 of 5 entries (filtered from 42 total entries)</p></div>
                            <div class="button row-reverse">
                                <button class="yellow-button">Print</button>
                                <button class="blue-button">Create PDF</button>
                                <button class="yellow-button">Email</button>
                                <button class="blue-button">Edit</button>
                                <button class="yellow-button">Delete</button>
                            </div>
                        </div>
                        <hr class="row-divider" />
                        <div class="row">
                            <h2 class="row-heading">Test 2</h2>
                            <div class="details-left"><p>Showing 5 to 5 of 5 entries (filtered from 42 total entries)</p></div>
                            <div class="button row-reverse">
                                <button class="yellow-button">Print</button>
                                <button class="blue-button">Create PDF</button>
                                <button class="yellow-button">Email</button>
                                <button class="blue-button">Edit</button>
                                <button class="yellow-button">Delete</button>
                            </div>
                        </div>
                        <hr class="row-divider" />
                    </div>
                    <div class="part-two-footer">
                        <div class="footer-right top222">
                            <button>Previous</button>
                            <p>1/10</p>
                            <button>Next</button></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reports;