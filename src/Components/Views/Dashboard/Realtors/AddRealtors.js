import React, { useState, useEffect } from 'react'
import './AddRealtors.css'
import axios from 'axios';

const baseURL = "http://34.198.19.55:8000";

function AddRealtors() {

    const [countries, setCountries] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const [post, setPost] = useState({ agent_type: 'Seller' });

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0].name);
        // console.log(event.target.files[0]);
    }

    const handleChangeInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    function createPost(e) {
        console.log(post)
        e.preventDefault()
        axios
            .post('http://34.198.19.55:8000/realtors',
                post)
            .then((response) => {
                // setPost(response);
                console.log(response)
                if (response.data.status == 200)
                    window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        // requesting to get data
        axios.get('http://34.198.19.55:8000/countries')
            // then getting the response from that request
            .then(res => {
                setCountries(res.data.data);
            })
            // or getting the error
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="extrapages-section add-realtors-page">
            <section className="body-part">
                <div class="body-part-two">
                    <div class="part-one-left flex left34">
                        <p>Agent Type</p>
                        <select name="agent_type" value={post.agent_type} id="selectList" onChange={handleChangeInput}>
                            <option value="Seller">Seller</option>
                            <option value="Buyer">Buyer</option>
                        </select>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>Agent Name:</p>
                            <input type="text" placeholder="Name..." name="name" value={post.name} onChange={handleChangeInput} required></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>Mobile Phone:</p>
                            <input type="text" placeholder="Number..." name="mobile_number" value={post.mobile_number} onChange={handleChangeInput}></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>Email-id:</p>
                            <input type="text" placeholder="Email..." name="email" value={post.email} onChange={handleChangeInput}></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>Company:</p>
                            <input type="text" placeholder="Company Name..." name="company_name" value={post.company_name} onChange={handleChangeInput}></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>Street Address:</p>
                            <input type="text" placeholder="Enter Street Address..." name="address" value={post.address} onChange={handleChangeInput}></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>Country:</p>
                            <select name="country" id="country" onChange={handleChangeInput}>
                                <option value="option1">Select</option>
                                {
                                    countries.map(country => {
                                        return (<option value={country.country_name}>{country.country_name}</option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 space-around">
                        <div class="flex width40">
                            <p>State:</p>
                            <input type="text" placeholder="Enter State..." name="state" value={post.state} onChange={handleChangeInput}></input>
                        </div>
                        <div class="flex right70 width40">
                            <p>City:</p>
                            <input type="text" placeholder="Enter City..." name="city" value={post.city} onChange={handleChangeInput}></input>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 left34">
                        <div class="flex width40">
                            <p>Agent Picture:</p>
                            <input type="file" onChange={handleFileSelect} id="group_image" />
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-one-left flex top20 left34">
                        <div class="flex width41-5">
                            <p>Personal Notes:</p>
                            <textarea placeholder="Notes..." style={{ width: 285 }} name="notes" value={post.notes} onChange={handleChangeInput}></textarea>
                        </div>
                    </div>
                    <hr class="top20 width102" />
                    <div class="part-two-content">
                    </div>
                    <div class="top50">
                        <button class="yellow-button" onClick={createPost}>Add</button>
                        <button class="blue-button" onClick={() => window.history.back()}>Cancel</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddRealtors