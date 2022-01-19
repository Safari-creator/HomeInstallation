import React, { useState, useEffect } from 'react';
import './CreateNewReports.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import axios from 'axios'

const CreateNewReports = () => {

    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [reportName, setReportName] = useState('')

    const [propertyAddress1, setPropertyAddress1] = useState('')
    const [propertyAddress2, setPropertyAddress2] = useState('')
    const [propertyCountry, setPropertyCountry] = useState([])
    const [propertyState, setPropertyState] = useState('')
    const [propertyCity, setPropertyCity] = useState('')
    const [wintnessArray, setWitnessArray] = useState([])

    const [inspectionInvoice, setInspectionInvoice] = useState('')
    const [inspectionFees, setInspectionFees] = useState('')
    const [inspectionTaxes, setInspectionTaxes] = useState('')
    const [inspectionOther, setInspectionOther] = useState('')
    const [inspectionTotalFees, setInspectionTotalFees] = useState('')
    const [inspectionDatePaid, setInspectionDatePaid] = useState('')

    const [structureFurnished, setStructureFurnished] = useState('')
    const [structureStories, setStructureStories] = useState('')
    const [structureStyle, setStructureStyle] = useState('')
    const [structureOrientation, setStructureOrientation] = useState('')

    const [clientName, setClientName] = useState('')
    const [clientAddress, setClientAddress] = useState('')
    const [clientCountry, setClientCountry] = useState([])
    const [clientState, setClientState] = useState('')
    const [clientCity, setClientCity] = useState('')
    const [clientZipCode, setClientZipCode] = useState('')
    const [clientPhone, setClientPhone] = useState('')
    const [clientEmail, setClientEmail] = useState('')
    const [clientFax, setClientFax] = useState('')
    const [clientNote, setClientNote] = useState('')

    const [inspectionDate, setInspectionDate] = useState('')
    const [inspectionStartTime, setInspectionStartTime] = useState('')
    const [inspectionEndTime, setInspectionEndTime] = useState('')

    const [weatherClimate, setWeatherClimate] = useState('')
    const [weatherTemperature, setWeatherTemperture] = useState('')
    const [weatherHumidity, setWeatherHumidity] = useState('')

    const [constructionType, setConstructionType] = useState('')
    const [constructionYear, setConstructionYear] = useState('')
    const [constructionArea, setConstructionArea] = useState('')

    const [travelStart, setTravelStart] = useState('')
    const [travelEnd, setTravelEnd] = useState('')
    const [travelTotal, setTravelTotal] = useState('')





    const [countries, setCountries] = useState([]);

    const handleFileSelect1 = (event) => {
        setSelectedFile1(event.target.files[0]);
    }

    const handleFileSelect2 = (event) => {
        setSelectedFile2(event.target.files[0]);
    }

    const url = axios.create({
        baseURL: 'http://34.198.19.55:8000/countries',
    });

    useEffect(() => {
        // requesting to get data
        axios.get('http://34.198.19.55:8000/countries')
            // then getting the response from that request
            .then(res => {
                console.log(res.data.data);
                // setCountries(res.data.data);
                setClientCountry(res.data.data)
                setPropertyCountry(res.data.data)
            })
            // or getting the error
            .catch(err => {
                console.log(err)
            });
    }, [])
    return (
        <div className="createnewreports-section">
            {/* <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Create New Reports</p>
                </div>
                <div class="header-part-right">
                    <img className="header-clock" src={headerClock} alt="headerClock"></img>
                    <p className="header-time">14:20 PM Friday April, 21</p>
                    <img className="header-icon-one" src={headerIconOne} alt="headerIconOne"></img>
                    <img className="header-icon-two" src={headerIconTwo} alt="headerIconTwo"></img>
                    <img className="header-icon-profile" src={headerProfile} alt="headerProfile"></img>
                </div>
            </section> */}
            <section className="body-part">
                <div className="body-part-wrapper">
                    <div className="body-part-left">
                        <div className="section-one">
                            <div className="section-header">
                                <p>Inspection Property Details</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Enter Report Name:</label>
                                        <input className="form-input" name="name" type="text" onChange={(e) => setReportName(e.target.value)} style={{ width: "177px" }} value={reportName}></input>
                                    </div>
                                    {/* <div style={{top:"66px"}}>
                                            <label>Cover Picture 1:</label>
                                            <input type="file" value={selectedFile} placeholder="choose file"></input>
                                            <p>No file choosen</p> 
                                        </div> */}
                                    <div style={{ top: "66px" }}>
                                        <label>Cover Picture 1:</label>
                                        <input type="file" onChange={handleFileSelect1} />
                                        <p>{selectedFile1?.name}</p>
                                    </div>
                                    <div style={{ top: "116px" }}>
                                        <label>Cover Picture 2:</label>
                                        <input type="file" onChange={handleFileSelect2} />
                                        <p>{selectedFile2?.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-two">
                            <div className="section-header">
                                <p>Inspection Property Details</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "24px" }}>
                                        <label>Street Address 1:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div style={{ top: "72px" }}>
                                        <label>Street Address 2:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "120px" }}>
                                        <label>Country:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            {
                                                clientCountry.map(item => {
                                                    return (
                                                        <option value={item.id}>{item.country_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div style={{ top: "168px" }}>
                                        <label>State/Province:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">State names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "216px" }}>
                                        <label>City:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="section-footer">
                                    <p>Add Alternate Property Owner Address</p>
                                </div> */}
                        </div>
                        <div className="section-three">
                            <div className="section-header">
                                <p>Present at the Time of Inspection</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div class="form-left">
                                        <div><input type="checkbox" value="Paneer" />
                                            <label>Buyer</label></div>
                                        <div><input type="checkbox" value="Paneer" />
                                            <label>Seller</label></div>
                                        <div><input type="checkbox" value="Paneer" />
                                            <label>Owners</label></div>
                                        <div class="owners"><input type="checkbox" value="Paneer" />
                                            <label>Other Present</label></div>

                                    </div>
                                    <div class="form-right">
                                        <div><input type="checkbox" value="Paneer" />
                                            <label>Buyer's Agent</label></div>
                                        <div><input type="checkbox" value="Paneer" />
                                            <label>None</label></div>
                                        <div><input type="checkbox" value="Paneer" />
                                            <label>Seller's Agent</label></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="section-four">
                            <div className="section-header">
                                <p>Inspection Fees</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Invoice Number:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Fees Charged:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Taxes:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div style={{ top: "144px" }}>
                                        <label>Other:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div style={{ top: "192px" }}>
                                        <label>Total Fees:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div style={{ top: "240px" }}>
                                        <label>Date Paid:</label>
                                        <input type="text" placeholder="select date"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-five">
                            <div className="section-header">
                                <p>Structure Description</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Furnished:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>No. of Stories:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Style:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "144px" }}>
                                        <label>Structure Orientation:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button">
                            <button>Next</button>
                        </div>
                    </div>
                    <div className="body-part-right">
                        <div className="section-six">
                            <div className="section-header">
                                <p>Client Information</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Client Name:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Street Address:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Country:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">Country names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "144px" }}>
                                        <label>State/Province:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "192px" }}>
                                        <label>City:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "240px" }}>
                                        <label>City:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "288px" }}>
                                        <label>Zip/Postal Code:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "336px" }}>
                                        <label>Phone:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "384px" }}>
                                        <label>Email:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "432px" }}>
                                        <label>Fax:</label>
                                        <input type="text" placeholder=""></input>
                                    </div>
                                    <div style={{ top: "480px" }}>
                                        <label>Note:</label>
                                        {/* <input type="text" placeholder=""></input> */}
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-seven">
                            <div className="section-header">
                                <p>Inspection Property details</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Inspection Date:</label>
                                        <input type="text" placeholder="Select Date"></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Inspection Start Time:</label>
                                        <input type="text" placeholder="Select Time" ></input>

                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Inspection End Time:</label>
                                        <input type="text" placeholder="Select Time"></input>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-eight">
                            <div className="section-header">
                                <p>Weather at time of Inspection</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Climate:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Temperature:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>

                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Humidity:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-nine">
                            <div className="section-header">
                                <p>Construction Type</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Type of Construction:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Year Built:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>

                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Sq.Ft.:</label>
                                        <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-ten">
                            <div className="section-header">
                                <p>Travel Distance</p>
                            </div>
                            <div className="section-body">
                                <div className="form-part">
                                    <div style={{ top: "0px" }}>
                                        <label>Start:</label>
                                        <input type="text" ></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>End:</label>
                                        <input type="text" ></input>

                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Total Travel:</label>
                                        <input type="text" ></input>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default CreateNewReports;