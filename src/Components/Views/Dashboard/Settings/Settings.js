import React from 'react';
import './Settings.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import sidebarImage from "../../../Software/assets/sidebar-logo.png"
import textbox from "../../../Software/assets/textbox.png"
import { useHistory } from 'react-router-dom';


import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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




const Settings = () => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const questionsList = [
        {
            title: "BUSINESS TOOLS",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "SCHEDULING TOOLS",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "HOME INSPECTION ADVANCED",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "REPORT OPTIONS",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "COMPANY SETTINGS",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor",
        },
        {
            title: "USER SETTINGS",
            emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
            text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        // {
        //     title: "PRE-INSPECTION LISTING AGENT",
        //     emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
        //     text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        // },
        // {
        //     title: "PUBLISHING",
        //     emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
        //     text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        // },
        // {
        //     title: "POST-INSPECTION: CLIENT",
        //     emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
        //     text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        // },
        // {
        //     title: "POST-INSPECTION: CLIENT'S AGENT",
        //     emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
        //     text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        // },
        // {
        //     title: "POST-INSPECTION: LISTING AGENT",
        //     emails: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"],
        //     text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        // },
    ]

    // let history = useHistory();
    return (
        // <div class="settings-section">
        //     <section class="body-part">
        //         <div class="body-header">
        //             <div class="body-header-left">
        //                 <p>PROFILE</p>
        //             </div>
        //             <div class="body-header-right">
        //                 <button>View Public Profile</button>
        //             </div>
        //         </div>
        //         <div class="body-content">
        //             <div class="body-content-one">
        //                 <div class="three-columns">
        //                     <div class="column-one">
        //                         <div class="company-logo">
        //                             <p>COMPANY LOGO</p>
        //                             <img src={sidebarImage}></img>
        //                         </div>
        //                         <div class="header-logo">
        //                             <p>HEADER LOGO</p>
        //                             <img src={sidebarImage}></img>
        //                         </div>
        //                     </div>
        //                     <div class="column-two">
        //                         <p>COMPANY INFORMATION</p>
        //                         <div className="form-part">
        //                             <div>
        //                                 <label>Name:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Address</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>City</label>
        //                                 <select name="selectList" id="selectList">
        //                                     <option value="option 1">Select</option>
        //                                     <option value="option 2">Country names</option>
        //                                 </select>
        //                             </div>
        //                             <div>
        //                                 <label>State</label>
        //                                 <select name="selectList" id="selectList">
        //                                     <option value="option 1">Select</option>
        //                                     <option value="option 2">Country names</option>
        //                                 </select>
        //                             </div>
        //                             <div>
        //                                 <label>Zip</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Phone:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Website:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Email:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="column-three">
        //                         <p>INSPECTOR INFO</p>
        //                         <div className="form-part">
        //                             <div>
        //                                 <img src={headerProfile}></img>
        //                             </div>
        //                             <div>
        //                                 <label>Name:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Address:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Direct Phone (w/SMS):</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Credentials:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                             <div>
        //                                 <label>Email:</label>
        //                                 <input type="text"></input>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="body-content-two">
        //                 <div class="two-columns">
        //                     <div class="column-one">
        //                         <img src={textbox}></img>
        //                     </div>
        //                     <div class="column-two">
        //                         <div class="form-part">
        //                         <div>
        //                         <label>Video URL (YouTube):</label>
        //                         <input type="text"></input>
        //                     </div>
        //                     <div>
        //                         <label>Service Offered:</label>
        //                         <input type="text" placeholder="i.e. Residential, Radon, Termite, Mold"></input>
        //                     </div>
        //                     <div>
        //                         <label>Service Area:</label>
        //                         <input type="text" placeholder="i.e. Denver, Aurora, Boulder, Fort Collins"></input>
        //                     </div>
        //                         </div>
        //                 </div>
        //                 </div>
        //             </div>
        //             <div class="button">
        //                 <button onClick={() => history.push('/SettingsServices')}>SAVE PROFILE</button>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div class="extrapages-section">
            <section class="body-part">
                <div class="body-part-two bot50">
                    {/* <div class="flex space-between"> */}
                        <div class="col3 flex pad-top-bot20">
                            <div class="part-one-left flex space-between">
                                {/* <select name="selectList" class="select-list">
                                    <option value="1" >Contract 1</option>
                                    <option value="2" >Contract 2</option>
                                    <option value="3" >Contract 3</option>
                                    <option value="4" >Contract 4</option>
                                    <option value="5" >Contract 5</option>
                                    <option value="6" >Contract 6</option>
                                    <option value="7" >Contract 7</option>
                                </select> */}
                                <button class="select-list">PROFILE</button>
                            </div>
                            <div class="part-one-left flex space-between">
                                {/* <select name="selectList" class="select-list">
                                    <option value="1" >Contract 1</option>
                                    <option value="2" >Contract 2</option>
                                    <option value="3" >Contract 3</option>
                                    <option value="4" >Contract 4</option>
                                    <option value="5" >Contract 5</option>
                                    <option value="6" >Contract 6</option>
                                    <option value="7" >Contract 7</option>
                                </select> */}
                                <button class="select-list">SERVICES {"&"} FEES</button>
                            </div>
                            <div class="part-one-left flex space-between">
                                {/* <select name="selectList" class="select-list">
                                    <option value="1" >Contract 1</option>
                                    <option value="2" >Contract 2</option>
                                    <option value="3" >Contract 3</option>
                                    <option value="4" >Contract 4</option>
                                    <option value="5" >Contract 5</option>
                                    <option value="6" >Contract 6</option>
                                    <option value="7" >Contract 7</option>
                                </select> */}
                                <button class="select-list">AVAILABILITY</button>
                            </div>
                        </div>
                        <div class="col3 flex pad-top-bot20">
                            <div class="part-one-left flex space-between">
                                {/* <select name="selectList" class="select-list">
                                    <option value="1" >Contract 1</option>
                                    <option value="2" >Contract 2</option>
                                    <option value="3" >Contract 3</option>
                                    <option value="4" >Contract 4</option>
                                    <option value="5" >Contract 5</option>
                                    <option value="6" >Contract 6</option>
                                    <option value="7" >Contract 7</option>
                                </select> */}
                                <button class="select-list">TEAM</button>
                            </div>
                            <div class="part-one-left flex space-between">
                                {/* <select name="selectList" class="select-list">
                                    <option value="1" >Contract 1</option>
                                    <option value="2" >Contract 2</option>
                                    <option value="3" >Contract 3</option>
                                    <option value="4" >Contract 4</option>
                                    <option value="5" >Contract 5</option>
                                    <option value="6" >Contract 6</option>
                                    <option value="7" >Contract 7</option>
                                </select> */}
                                <button class="select-list">SAMPLE REPORTS</button>
                            </div>
                            <div class="part-one-left flex space-between">
                                {/* <select name="selectList" class="select-list">
                                    <option value="1" >Contract 1</option>
                                    <option value="2" >Contract 2</option>
                                    <option value="3" >Contract 3</option>
                                    <option value="4" >Contract 4</option>
                                    <option value="5" >Contract 5</option>
                                    <option value="6" >Contract 6</option>
                                    <option value="7" >Contract 7</option>
                                </select> */}
                                <button class="select-list">DISCOUNT CODES</button>
                            </div>
                        </div>

                    {/* </div> */}
                    {questionsList.map((section, index1) => {
                        return (
                            <Accordion key={index1} onChange={handleChange('panel1')} style={{ marginBottom: "25px" }}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography>{section.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        EMAILS
                                    </Typography>
                                    <FormGroup>
                                        {console.log(section.emails)}
                                        {section?.emails?.map((email, index2) => {
                                            return (
                                                <FormControlLabel key={index2} control={<BpCheckbox />} label={email} />
                                            )
                                        }
                                        )}

                                    </FormGroup>
                                    <Typography>
                                        TEXT MESSAGES
                                    </Typography>
                                    <FormGroup>
                                        {section?.text_messages?.map((message, index3) => {
                                            return (
                                                <FormControlLabel key={index3} control={<BpCheckbox />} label={message} />
                                            )
                                        }
                                        )}
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Settings;