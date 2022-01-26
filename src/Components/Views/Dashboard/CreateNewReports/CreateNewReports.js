import React, { useState, useEffect } from 'react';
import './CreateNewReports.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CreateNewReports = () => {
    const history = useHistory()

    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [reportName, setReportName] = useState('')

    const [propertyAddress1, setPropertyAddress1] = useState('')
    const [propertyAddress2, setPropertyAddress2] = useState('')
    const [propertyCountry, setPropertyCountry] = useState([])
    const [propertyState, setPropertyState] = useState('')
    const [propertyCity, setPropertyCity] = useState('')

    const [witnessBuyer, setWitnessBuyer] = useState(false)
    const [witnessBuyerAgent, setWitnessBuyerAgent] = useState(false)
    const [witnessSeller, setWitnessSeller] = useState(false)
    const [witnessSellerAgent, setWitnessSellerAgent] = useState(false)
    const [witnessNone, setWitnessNone] = useState(false)
    const [witnessOwner, setWitnessOwner] = useState(false)
    const [witnessOther, setWitnessOther] = useState(false)

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

    const [countries, setCountries] = useState([])
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'))


    const handleFileSelect1 = (event) => {
        setSelectedFile1(event.target.files[0]);
    }

    const handleFileSelect2 = (event) => {
        setSelectedFile2(event.target.files[0]);
    }

    // const url = axios.create({
    //     baseURL: 'http://34.198.19.55:8000/countries',
    // });

    useEffect(() => {
        // requesting to get data
        axios.get('http://34.198.19.55:8000/countries')
            // then getting the response from that request
            .then(res => {
                // setClientCountry(res.data.data)
                // setPropertyCountry(res.data.data)
                setCountries(res.data.data)
            })
            // or getting the error
            .catch(err => {
                console.log(err)
            });
        console.log(sessionStorage.getItem('userId'))
    }, [])

    async function saveDetails() {
        if (!reportName)
            return

        const body = {
            user_id: userId,
            report_name: reportName,

            property_street_address: propertyAddress1,
            // propertyAddress2: propertyAddress2,
            property_country: propertyCountry,
            property_state: propertyState,
            property_city: propertyCity,

            buyer: witnessBuyer,
            seller: witnessSeller,
            buyer_agent: witnessBuyerAgent,
            seller_agent: witnessSellerAgent,
            owner: witnessOwner,
            other_present: witnessOther,

            invoice_number: inspectionInvoice,
            fees_charged: inspectionFees,
            taxes: inspectionTaxes,
            other_charges: inspectionOther,
            total_fee: inspectionTotalFees,
            date_paid: inspectionDatePaid,

            furnished: structureFurnished,
            number_of_stories: structureStories,
            style: structureStyle,
            structure_orientations: structureOrientation,

            client_name: clientName,
            client_street_address: clientAddress,
            client_country: clientCountry,
            client_state: clientState,
            client_city: clientCity,
            // clientZipCode: clientZipCode,
            client_phone: clientPhone,
            client_email: clientEmail,
            client_fax: clientFax,
            client_note: clientNote,

            inspection_date: inspectionDate,
            inspection_start_time: inspectionStartTime,
            inspection_end_time: inspectionEndTime,

            climate: weatherClimate,
            temperature: weatherTemperature,
            humidity: weatherHumidity,

            type_of_construction: constructionType,
            year_built: constructionYear,
            sq_ft: constructionArea,

            travel_distance_start: travelStart,
            travel_distance_end: travelEnd,
            total_travel: travelTotal
        }

        const response = await axios.post('http://34.198.19.55:8000/reports', body)
        console.log(response)
        if (response.data.data.message == "Created successfully!") {
            window.location.reload()
        }

    }

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
                                        <label>Enter Report Name*:</label>
                                        <input className="form-input" name="name" type="text" onChange={(e) => setReportName(e.target.value)} style={{ width: "177px" }} value={reportName}></input>
                                    </div>
                                    <div style={{ top: "66px" }}>
                                        <label>Cover Picture 1:</label>
                                        <input type="file" id="selected-file-1" onChange={handleFileSelect1} style={{ display: 'none' }} />
                                        <span className='choose-file-text' onClick={() => {
                                            document.querySelector('#selected-file-1').click()
                                        }}>Choose File</span>
                                        <p>{selectedFile1 ? selectedFile1.name : 'No File Selected'}</p>
                                    </div>
                                    <div style={{ top: "116px" }}>
                                        <label>Cover Picture 2:</label>
                                        <input type="file" id="selected-file-2" onChange={handleFileSelect2} style={{ display: 'none' }} />
                                        <span className='choose-file-text' onClick={() => {
                                            document.querySelector('#selected-file-2').click()
                                        }}>Choose File</span>
                                        <p>{selectedFile2 ? selectedFile2.name : 'No File Selected'}</p>
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
                                        <input type="text" value={propertyAddress1} onChange={(e) => setPropertyAddress1(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "72px" }}>
                                        <label>Street Address 2:</label>
                                        <input type="text" value={propertyAddress2} onChange={(e) => setPropertyAddress2(e.target.value)} placeholder=""></input>
                                    </div>
                                    <div style={{ top: "120px" }}>
                                        <label>Country:</label>
                                        <select value={propertyCountry} onChange={(e) => setPropertyCountry(e.target.value)} name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            {
                                                countries.map(item => {
                                                    return (
                                                        <option value={item.country_name} name={item.country_name}>{item.country_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div style={{ top: "168px" }}>
                                        <label>State/Province:</label>
                                        {/* <select name="selectList" id="selectList" value={}>
                                            <option value="option 1">Select</option>
                                            <option value="option 2">State names</option>
                                        </select> */}
                                        <input type="text" placeholder="" value={propertyState} onChange={(e) => setPropertyState(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "216px" }}>
                                        <label>City:</label>
                                        <input type="text" placeholder="" value={propertyCity} onChange={(e) => setPropertyCity(e.target.value)}></input>
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
                                        <div><input type="checkbox" value="Buyer" checked={witnessBuyer ? true : false} name='witness' onClick={(e) => setWitnessBuyer(!witnessBuyer)} />
                                            <label>Buyer</label></div>
                                        <div><input type="checkbox" value="Seller" name='witness' checked={witnessSeller ? true : false} onClick={(e) => setWitnessSeller(!witnessSeller)} />
                                            <label>Seller</label></div>
                                        <div><input type="checkbox" value="Owners" name='witness' checked={witnessOwner ? true : false} onClick={(e) => setWitnessOwner(!witnessOwner)} />
                                            <label>Owners</label></div>
                                        <div class="owners"><input type="checkbox" value="other" name='witness' checked={witnessOther ? true : false} onClick={(e) => setWitnessOther(!witnessOther)} />
                                            <label>Other Present</label></div>

                                    </div>
                                    <div class="form-right">
                                        <div><input type="checkbox" value="Buyer Agent" name='witness' checked={witnessBuyerAgent ? true : false} onClick={(e) => setWitnessBuyerAgent(!witnessBuyerAgent)} />
                                            <label>Buyer's Agent</label></div>
                                        <div><input type="checkbox" value="none" name='witness' checked={witnessNone ? true : false} onClick={(e) => setWitnessNone(!witnessNone)} />
                                            <label>None</label></div>
                                        <div><input type="checkbox" value="Seller Agent" name='witness' checked={witnessSellerAgent ? true : false} onClick={(e) => setWitnessSellerAgent(!witnessSellerAgent)} />
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
                                        <input type="text" value={inspectionInvoice} onChange={(e) => setInspectionInvoice(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Fees Charged:</label>
                                        <input type="text" value={inspectionFees} onChange={(e) => setInspectionFees(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Taxes:</label>
                                        <input type="text" value={inspectionTaxes} onChange={(e) => setInspectionTaxes(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "144px" }}>
                                        <label>Other:</label>
                                        <input type="text" value={inspectionOther} onChange={(e) => setInspectionOther(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "192px" }}>
                                        <label>Total Fees:</label>
                                        <input type="text" value={inspectionTotalFees} onChange={(e) => setInspectionTotalFees(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "240px" }}>
                                        <label>Date Paid:</label>
                                        <input type="date" value={inspectionDatePaid} onChange={(e) => setInspectionDatePaid(e.target.value)}></input>
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
                                        <select name="selectList" id="selectList" value={structureFurnished} onChange={(e) => setStructureFurnished(e.target.value)}>
                                            <option value="option 1">Select</option>
                                            <option value="Fully Furnished">Fully Furnished</option>
                                            <option value="Semi Furnished">Semi Furnished</option>
                                            <option value="UnFurnished">UnFurnished</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>No. of Stories:</label>
                                        <select name="selectList" id="selectList" value={structureStories} onChange={(e) => setStructureStories(e.target.value)}>
                                            <option value="option 1">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Style:</label>
                                        <select name="selectList" id="selectList" value={structureStyle} onChange={(e) => setStructureStyle(e.target.value)}>
                                            <option value="option 1">Select</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "144px" }}>
                                        <label>Structure Orientation:</label>
                                        <select name="selectList" id="selectList" value={structureOrientation} onChange={(e) => setStructureOrientation(e.target.value)}>
                                            <option value="option 1">Select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button">
                            <button onClick={saveDetails}>Save</button>
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
                                        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Street Address:</label>
                                        <input type="text" placeholder="" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Country:</label>
                                        <select name="selectList" id="selectList" value={clientCountry} onChange={(e) => setClientCountry(e.target.value)}>
                                            <option value="option 1">Select</option>
                                            {
                                                countries.map(item => {
                                                    return (
                                                        <option value={item.country_name} name={item.country_name}>{item.country_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div style={{ top: "144px" }}>
                                        <label>State/Province:</label>
                                        <input type="text" placeholder="" value={clientState} onChange={(e) => setClientState(e.target.value)}></input>
                                        {/* <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select> */}
                                    </div>
                                    <div style={{ top: "192px" }}>
                                        <label>City:</label>
                                        <input type="text" placeholder="" value={clientCity} onChange={(e) => setClientCity(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "240px" }}>
                                        <label>Zip/Postal Code:</label>
                                        <input type="text" placeholder="" value={clientZipCode} onChange={(e) => setClientZipCode(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "288px" }}>
                                        <label>Phone:</label>
                                        <input type="text" placeholder="" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "336px" }}>
                                        <label>Email:</label>
                                        <input type="text" placeholder="" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "384px" }}>
                                        <label>Fax:</label>
                                        <input type="text" placeholder="" value={clientFax} onChange={(e) => setClientFax(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "432px" }}>
                                        <label>Note:</label>
                                        {/* <input type="text" placeholder=""></input> */}
                                        <textarea value={clientNote} onChange={(e) => setClientNote(e.target.value)}></textarea>
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
                                        <input type="date" placeholder="Select Date" value={inspectionDate} onChange={(e) => setInspectionDate(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Inspection Start Time:</label>
                                        <input type="time" placeholder="Select Time" value={inspectionStartTime} onChange={(e) => setInspectionStartTime(e.target.value)}></input>

                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Inspection End Time:</label>
                                        <input type="time" placeholder="Select Time" value={inspectionEndTime} onChange={(e) => setInspectionEndTime(e.target.value)}></input>

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
                                        <select name="selectList" id="selectList" value={weatherClimate} onChange={(e) => setWeatherClimate(e.target.value)}>
                                            <option value="option 1">Select</option>
                                            <option value="Tropical Rainy">Tropical Rainy</option>
                                            <option value="Dry">Dry</option>
                                            <option value="Temperate Marine">Temperate Marine</option>
                                            <option value="Temperate Continental">Temperate Continental</option>
                                            <option value="Polar">Polar</option>
                                            <option value="Highlands">Highlands</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Temperature (in <sup>o</sup>F):</label>
                                        {/* <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                        </select> */}
                                        <input type="text" value={weatherTemperature} onChange={(e) => setWeatherTemperture(e.target.value)} />
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Humidity (in g/m<sup>3</sup>):</label>
                                        {/* <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                        </select> */}
                                        <input type="text" value={weatherHumidity} onChange={(e) => setWeatherHumidity(e.target.value)} />
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
                                        <select name="selectList" id="selectList" value={constructionType} onChange={(e) => setConstructionType(e.target.value)}>
                                            <option value="option 1">Select</option>
                                            <option value="Wood Frame">Wood Frame</option>
                                            <option value="Light Gauge Steel Frame">Light Gauge Steel Frame</option>
                                            <option value="Joisted or Load Bearing Masonry">Joisted or Load Bearing Masonry</option>
                                            <option value="Steel Frame">Steel Frame</option>
                                            <option value="Concrete Frame">Concrete Frame</option>
                                            <option value="Pre-engineered">Pre-engineered</option>
                                        </select>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>Year Built:</label>
                                        {/* <select name="selectList" id="selectList">
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select> */}
                                        <input type='text' value={constructionYear} onChange={(e) => setConstructionYear(e.target.value)} />
                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Sq.Ft.:</label>
                                        {/* <select name="selectList" id="selectList" value={constructionType} onChange={(e) => setConstructionType(e.target.value)}>
                                            <option value="option 1">Select</option>
                                            <option value="option 2">state names</option>
                                        </select> */}
                                        <input type='text' value={constructionArea} onChange={(e) => setConstructionArea(e.target.value)} />
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
                                        <input type="text" value={travelStart} onChange={(e) => setTravelStart(e.target.value)}></input>
                                    </div>
                                    <div style={{ top: "48px" }}>
                                        <label>End:</label>
                                        <input type="text" value={travelEnd} onChange={(e) => setTravelEnd(e.target.value)}></input>

                                    </div>
                                    <div style={{ top: "96px" }}>
                                        <label>Total Travel:</label>
                                        <input type="text" value={travelTotal} onChange={(e) => setTravelTotal(e.target.value)}></input>

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