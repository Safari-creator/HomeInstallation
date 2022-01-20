import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Reports.css';
import { useHistory } from 'react-router-dom'

const Reports = () => {
    const history = useHistory()
    const [reportsArray, setReportsArray] = useState([])
    const [filteredArray, setFilteredArray] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [startDate, setStartDate] = useState('')
    const [EndDate, setEndDate] = useState('')

    useEffect(async () => {
        const response = await axios.get('http://34.198.19.55:8000/reports')
        setReportsArray(response.data.data)
        setFilteredArray(response.data.data)
    }, [])

    useEffect(() => {
        setFilteredArray(reportsArray.filter(item => item.report_name.includes(searchKey)))
    }, [searchKey])

    async function deleteReport(id) {
        const response = await axios.delete('http://34.198.19.55:8000/reports/' + id)
        console.log(response)
        if (response.data.message == 'Deleted successfully')
            window.location.reload()
    }

    return (
        <div className="extrapages-section">
            <section className="body-part">
                <div class="body-part-one">
                    <div class="part-one-left">
                        <p>Search</p>
                        <input type="text" style={{ marginRight: 20 }} placeholder="Keywords.." value={searchKey} onChange={(e) => setSearchKey(e.target.value)}></input>
                        <div class="part-one-right">
                            <p>Report Date</p>
                            <input type="date" placeholder="Start Date" onChange={(e) => setStartDate(e.target.value)}></input>&nbsp;&nbsp;
                            {/* <p>End Date</p>
                        <input type="date" placeholder="End Date" onChange={(e) => setEndDate(e.target.value)}></input> */}
                        </div>
                    </div>


                    <div class="button">
                        {/* <button class="yellow-button">Search</button> */}
                        <button class="blue-button" onClick={() => {
                            setSearchKey('')
                            setStartDate('')
                        }}>Reset</button>
                    </div>

                </div>
                <div class="body-part-two report-body">
                    <div class="part-two-content">

                        {/* <div class="row">
                            <h2 class="row-heading">House 1</h2>
                            <div class="button">
                                <button class="yellow-button">Print</button>
                                <button class="blue-button">Create PDF</button>
                                <button class="yellow-button">Email</button>
                                <button class="blue-button">Edit</button>
                                <button class="yellow-button">Delete</button>
                            </div>
                        </div>
                        <hr class="row-divider" /> */}

                        {filteredArray && filteredArray.length > 0 && filteredArray.map(item => {
                            return (
                                <>
                                    <div class="row">
                                        <h2 class="row-heading" style={{ cursor: 'pointer' }}>{item.report_name}</h2>
                                        <div class="button">
                                            {/* <button class="yellow-button">Print</button>
                                            <button class="blue-button" >Create PDF</button>
                                            <button class="yellow-button" >Email</button> */}
                                            <button class="yellow-button" onClick={() => history.push('/ReportDetails/' + item.id)}>View</button>
                                            <button class="blue-button" onClick={() => history.push('/EditReport/' + item.id)}>Edit</button>
                                            <button class="yellow-button" onClick={() => deleteReport(item.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <hr class="row-divider" />
                                </>
                            )
                        })}

                    </div>
                    {/* <div class="part-two-footer">
                        <div class="footer-right top222">
                            <button>Previous</button>
                            <p>1/10</p>
                            <button>Next</button></div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Reports;