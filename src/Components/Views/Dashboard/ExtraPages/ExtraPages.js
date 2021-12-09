import React from 'react';
import './ExtraPages.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"

const ExtraPages = () => {
    return(
        <div className="extrapages-section">
            <section className="body-part">
                <div class="body-part-one">
                    <div class="part-one-left">
                        <p>Show</p>
                        <select name="selectList" id="selectList">
                            <option value="option 1">10</option>
                            <option value="option 2">25</option>
                        </select>
                    </div>
                    <div class="part-one-right">
                    <p>Search</p>
                    <input type="text" placeholder="Entries"></input>
                    </div>
                </div>
                <div class="body-part-two">
                    <div className="part-two-buttons">
                        <button>Naschi</button>
                        <button>Ashi</button>
                    </div>
                    <div class="part-two-content">
                        <div class="heading">
                            <div class="title">
                            <p>Title</p>
                            </div>
                            <div class="date-created">
                            <p>Date Created</p>
                            </div>
                            <div class="manage">
                            <p>Manage</p>
                            </div>
                        </div>
                        <div class="body">
                            <p>No matching records found</p>
                        </div>
                    </div>
                    <div class="part-two-footer">
                        <div class="footer-left"><p>Showing 5 to 5 of 5 entries (filtered from 42 total entries)</p></div>
                        <div class="footer-right">
                            <button>Previous</button>
                            <p>1/10</p>
                            <button>Next</button></div>
                    </div>
                </div>
                <div class="button">
                    <button>Add New Pages</button>
                    </div>
            </section>
        </div>
    );
}

export default ExtraPages;