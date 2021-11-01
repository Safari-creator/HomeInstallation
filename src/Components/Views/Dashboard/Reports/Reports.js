import React from 'react';
import './Reports.css';

const Reports = () => {
    return(
        <div class="reports-section">
            <section class="reports-header">
                <h2>Reports</h2>
                <div class="header-right">
                    <i class="fas fa-clock"></i><p>14:20 PM Friday April, 2021</p>
                </div>
            </section>
            <section class="reports-body">
                <div class="body-header">
                    <label>Search</label>
                    <input type="text" placeholder= "keyboard" style={{marginRight:"20px"}}></input>
                    <label>Reports Date</label>
                    <input type="text" placeholder="Start Date" style={{marginRight:"5px"}}></input>
                    <input type="text" placeholder="End Date" style={{marginRight:"20px"}}></input>
                    <button style={{backgroundColor: "#fb8200"}}>Search</button>
                    <button style={{backgroundColor: "#00a1fb"}}>Reset</button>
                </div>
                <div class="body-main">
                    <div class="body-one">
                        <h3>House 1</h3>
                        <p>This file will be deleted in 12 days and 2 hours | 06-Oct-2021 7:35 am</p>
                        <button>Print</button>
                        <button>Create PDF</button>
                        <button>Email</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <div class="body-one">
                        <h3>Test 1</h3>
                        <p>This file will be deleted in 12 days and 2 hours | 06-Oct-2021 7:35 am</p>
                        <button>Print</button>
                        <button>Create PDF</button>
                        <button>Email</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <div class="body-one">
                        <h3>Test 2</h3>
                        <p>This file will be deleted in 12 days and 2 hours | 06-Oct-2021 7:35 am</p>
                        <button>Print</button>
                        <button>Create PDF</button>
                        <button>Email</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reports;