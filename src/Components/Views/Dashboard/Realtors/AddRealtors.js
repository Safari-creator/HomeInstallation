import React from 'react'
import './AddRealtors.css'

function AddRealtors() {
    return (
        <div className="extrapages-section">
            <section className="body-part">
                <div class="body-part-two">
                    <div class="part-one-left flex left34">
                        <p>Agent Type</p>
                        <select name="selectList" id="selectList">
                            <option value="option 1">Seller</option>
                            <option value="option 2">Buyer</option>
                        </select>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>Agent Name:</p>
                            <input type="text" placeholder="Name..."></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>Mobile Phone:</p>
                            <input type="text" placeholder="Number..."></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>Email-id:</p>
                            <input type="text" placeholder="Email..."></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>Company:</p>
                            <input type="text" placeholder="Company Name..."></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>Street Address:</p>
                            <input type="text" placeholder="Enter Street Address..."></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>Country:</p>
                            <select name="country" id="countryList">
                                <option value="option 1">Select Countries</option>
                                <option value="option 2">Buyer</option>
                            </select>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>State:</p>
                            <input type="text" placeholder="Enter State..."></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>City:</p>
                            <input type="text" placeholder="Enter City..."></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 left34">
                        <div class="flex width40">
                            <p>Agent Picture:</p>
                            <input type="text" placeholder="Name..."></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 left34">
                        <div class="flex width41-5">
                            <p>Personal Notes:</p>
                            <input type="text" placeholder="Name..."></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-two-content">
                    </div>
                    <div class="top50">
                        <button class="yellow-button">Add</button>
                        <button class="blue-button">Cancel</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddRealtors
