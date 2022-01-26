import React, { useEffect, useState } from 'react';
import './Contacts.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import axios from 'axios';
import { BASE_API_URL } from '../../../../Constats/Constats';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



/**
 * Checkbox
 * @returns 
 */

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
    return (
        <Checkbox
            sx={{
                '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}

// for modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        padding: '0px',
        marginTop: '50px',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const Contacts = () => {

    // for modal

    const [modalAgentIsOpen, setModalAgentIsOpen] = React.useState(false);
    const [modalAgencyIsOpen, setModalAgencyIsOpen] = React.useState(false);
    const [agentsArray, setAgentsArray] = useState([])
    const [clientsArray, setClientsArray] = useState([])
    const [agencyArray, setAgencyArray] = useState([])


    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [agency, setAgency] = useState('')
    const [clientAgent, setClientAgent] = useState('')
    const [sellerAgent, setSellerAgent] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [city, setCity] = useState('')
    const [states, setStates] = useState('')
    const [country, setCountry] = useState('')
    const [agencyPhone, setAgencyPhone] = useState('')
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'))


    function openModalAgent() {
        setModalAgentIsOpen(true);
    }
    function closeModalAgent() {
        setModalAgentIsOpen(false);
    }
    function openModalAgency() {
        setModalAgencyIsOpen(true);
    }
    function closeModalAgency() {
        setModalAgencyIsOpen(false);
    }

    //   for AGENTS AGENCIES CLIENTS table

    const [Tab, setTab] = useState(['Agent']);

    function handleSelectTab(event) {
        setTab(event.target.value);
        console.log(event.target.value);
    }

    // const Automation = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(async () => {
        const response = await axios.get(BASE_API_URL + 'agent_contacts')
        console.log(response.data.data)
        setAgentsArray(response.data.data)
    }, [])

    useEffect(async () => {
        const response = await axios.get(BASE_API_URL + 'agency_contacts')
        console.log(response.data.data)
        setAgencyArray(response.data.data)
    }, [Tab])

    async function addContact() {
        if (!fname && !agency && !phone && !lname)
            return;

        const body = {
            first_name: fname,
            agency_name: agency,
            client_agent: clientAgent,
            seller_agent: sellerAgent,
            phone: phone,
            email: email,
            city: city,
            state: states,
            country: country,
            last_name: lname,
            second_email: '',
            second_phone: '',
            date_of_birth: '',
            agency_phone: agencyPhone,
            image: '',
            user_id: userId
        }

        const response = await axios.post(BASE_API_URL + 'agent_contacts', body)
        console.log(response.data)

        const agencyBody = {
            name: agency,
            user_id: userId
        }
        const response2 = await axios.post(BASE_API_URL + 'agency_contacts', agencyBody)
        console.log(response2)

        if (response.data.status == 200 && response2.statusText == "Created") {
            setModalAgentIsOpen(!modalAgentIsOpen)
            window.location.reload()
        }
    }

    const questionsList = [
        {
            title: "SCHEDULING",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "RESCHEDULING",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "CANCELATION",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "INSPECTION AGREEMENTS & FEES",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "PRE-INSPECTION: CLIENT ",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor",
        },
        {
            title: "PRE-INSPECTION: CLIENT'S AGENT",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "PRE-INSPECTION LISTING AGENT",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "PUBLISHING",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "POST-INSPECTION: CLIENT",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "POST-INSPECTION: CLIENT'S AGENT",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "POST-INSPECTION: LISTING AGENT",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
    ]

    async function deleteAgent(id) {
        const response = await axios.delete(BASE_API_URL + 'agent_contacts/' + id)
        console.log(response)
        if (response.data.message == "Deleted successfully") {
            window.location.reload()
        }
    }

    return (
        <div className="extrapages-section contracts-page">
            <section className="body-part">
                <div class="flex space-between">
                    <div class="part-one-left flex space-between">
                        <span className='buttons'>Import</span>
                    </div>
                    <div class="part-one-left flex space-between">
                        <span className='buttons'>Export</span>
                    </div>
                    <div class="part-one-left flex space-between">
                        <span className='buttons' onClick={openModalAgent}>Add Agent</span>
                        <Modal isOpen={modalAgentIsOpen}
                            onRequestClose={closeModalAgent}
                            style={customStyles}
                            contentLabel="Example Modal"
                            class="modal-agent">
                            <ModalHeader closeButton onClick={closeModalAgent}></ModalHeader>
                            <div class="modal-body">
                                {/* <button onClick={closeModalAgent}>x</button> */}
                                <div class="modal-form form flex-row">
                                    <div>
                                        <label>First Name*:</label>
                                        <input type="text" placeholder='firstname' onChange={(e) => setFName(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>Last Name*:</label>
                                        <input type="text" placeholder='lastname' onChange={(e) => setLName(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>Agency*:</label>
                                        <input type="text" placeholder='agency' onChange={(e) => setAgency(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>Client Agent:</label>
                                        <input type="text" placeholder='client agent' onChange={(e) => setClientAgent(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>Seller Agent:</label>
                                        <input type="text" placeholder='seller agent' onChange={(e) => setSellerAgent(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>City:</label>
                                        <input type="text" placeholder='city' onChange={(e) => setCity(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>State:</label>
                                        <input type="text" placeholder='state' onChange={(e) => setCountry(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>Country:</label>
                                        <input type="text" placeholder='country' onChange={(e) => setCountry(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>Phone*:</label>
                                        <input type="text" placeholder='phone number' onChange={(e) => setPhone(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                    <div class="form-buttons">
                                        <button type='button' onClick={() => addContact()}>Add</button>
                                        {/* <button>Cancel</button> */}
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div class="part-one-left flex space-between">
                        <span className='buttons' onClick={() => setTab('Agency')}>Agencies</span>
                        {/* <Modal isOpen={modalAgencyIsOpen}
                            onRequestClose={closeModalAgency}
                            style={customStyles}
                            contentLabel="Example Modal"
                            class="modal-agent">
                            <div class="modal-body">
                                <button onClick={closeModalAgency}>x</button>
                                <div class="modal-form">
                                    <form class="form">
                                        <div>
                                            <label>First Name:</label>
                                            <input type="text" placeholder='firstname'></input>
                                        </div>
                                        <div>
                                            <label>Last Name:</label>
                                            <input type="text" placeholder='lastname'></input>
                                        </div>
                                        <div>
                                            <label>Agency:</label>
                                            <input type="text" placeholder='agency'></input>
                                        </div>
                                        <div>
                                            <label>Client Agent:</label>
                                            <input type="text" placeholder='client agent'></input>
                                        </div>
                                        <div>
                                            <label>Seller Agent:</label>
                                            <input type="text" placeholder='seller agent'></input>
                                        </div>
                                        <div>
                                            <label>Phone:</label>
                                            <input type="text" placeholder='phone number'></input>
                                        </div>
                                        <div>
                                            <label>Email:</label>
                                            <input type="email" placeholder='email'></input>
                                        </div>
                                        <div class="form-buttons">
                                            <button>Add</button>
                                            <button>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Modal> */}
                    </div>
                </div>
                <div class="body-part-two pad0">
                    <div class="part-one-left flex space-between pad-left-right10">
                        <select name="selectList" class="select-list" value={Tab} onChange={handleSelectTab}>
                            <option value="Select">Select</option>
                            <option value="Agent">Agents</option>
                            <option value="Client">Clients</option>
                            {/* <option value="Agency">Agencies</option> */}
                        </select>
                    </div>
                    <div class="body-part-one mb-0">
                        <div class="part-one-left">
                            {/* <p>Show</p>
                            <select name="selectList" id="selectList">
                                <option value="option 1">10</option>
                                <option value="option 2">25</option>
                            </select> */}
                        </div>
                        <div class="part-one-right">
                            <p>Search</p>
                            <input type="text" placeholder="Entries"></input>
                        </div>
                    </div>

                    <div class="body-part-two pad0 pt-0">

                        {Tab == 'Agent' &&
                            <div class="part-two-content pad-left-right0">
                                <div class="heading pad-left15">
                                    <div class="wid20 text-center">
                                        <p>FIRST NAME</p>
                                    </div>
                                    <div class="title">
                                        <p>LAST NAME</p>
                                    </div>
                                    <div class="title">
                                        <p>AGENCY</p>
                                    </div>
                                    <div class="title">
                                        <p>CLIENT'S AGENT</p>
                                    </div>
                                    <div class="date-created">
                                        <p>SELLER'S AGENT</p>
                                    </div>
                                    <div class="manage">
                                        <p>PHONE</p>
                                    </div>
                                    <div class="manage">
                                        <p>EMAIL</p>
                                    </div>
                                    <div class="manage">
                                        <p>ACTIONS</p>
                                    </div>
                                </div>
                                <div class="body height400">
                                    {
                                        agentsArray.map(item => {
                                            return (
                                                <div className='body-row'>
                                                    <div class="cell-1">
                                                        <p>{item.first_name}</p>
                                                    </div>
                                                    <div class="cell-2">
                                                        <p>{item.last_name}</p>
                                                    </div>
                                                    <div class="cell-3">
                                                        <p>{item.agency_name}</p>
                                                    </div>
                                                    <div class="cell-4">
                                                        <p>{item.client_agent}</p>
                                                    </div>
                                                    <div class="cell-5">
                                                        <p>{item.seller_agent}</p>
                                                    </div>
                                                    <div class="cell-6">
                                                        <p>{item.phone}</p>
                                                    </div>
                                                    <div class="cell-7">
                                                        <p>{item.email}</p>
                                                    </div>
                                                    <div class="cell-8">
                                                        <p onClick={() => deleteAgent(item.id)}>Delete</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>}

                        {Tab == 'Client' &&
                            <div class="part-two-content pad-left-right0">
                                <div class="heading pad-left15">
                                    <div class="wid20">
                                        <p>FIRST NAME</p>
                                    </div>
                                    <div class="title">
                                        <p>LAST NAME</p>
                                    </div>
                                    <div class="date-created">
                                        <p>PHONE</p>
                                    </div>
                                    <div class="manage">
                                        <p>EMAIL</p>
                                    </div>
                                    <div class="manage">
                                        <p>ACTIONS</p>
                                    </div>
                                </div>
                                <div class="body height400">
                                    <p>No matching records found</p>
                                </div>
                            </div>}

                        {Tab == 'Agency' &&
                            <div class="part-two-content pad-left-right0">
                                <div class="heading pad-left15">
                                    <div class="wid20">
                                        <p>AGENCY NAMES</p>
                                    </div>
                                </div>
                                <div class="body height400">
                                    {
                                        agencyArray.map(item => {
                                            return (
                                                <div className='body-row'>
                                                    <p>{item.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>}

                        {/* <div class="part-two-footer space-around pad-bot20">
                            <div class="footer-left"><p>Showing 5 to 5 of 5 entries (filtered from 42 total entries)</p></div>
                            <div class="footer-right">
                                <button>Previous</button>
                                <p>1/10</p>
                                <button>Next</button></div>
                        </div> */}
                    </div>
                </div>
                <div className="row-reverse">
                    <div className="help-section">
                        <h3>Need Help?</h3>
                        <button><h4>Call Us?</h4></button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;
