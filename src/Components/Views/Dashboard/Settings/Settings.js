import React from 'react';
import './Settings.css';
import Agreements from './BussinesTools/Agreements/Agreements';
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
import Agreement from './BussinesTools/Agreements/Agreements';


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
            ? '0 0 0 1px rgb(1Agreement6 22 26 / 40%)'
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
            subTitle: [{ heading: "Agreements", component: <Agreements /> }, { heading: "Payments", component: <Agreements /> }, { heading: "Reviews", component: <Agreements /> }, { heading: "Internal Communication", component: <Agreements /> }, { heading: "Emails", component: <Agreements /> }, { heading: "Text/SMS", component: <Agreements /> }],
            // Components: ["Agreement", "Agreement", "Agreement"]
        },
        {
            title: "SCHEDULING TOOLS",
            subTitle: [{ heading: "Scheduling Options", component: <Agreements /> }, { heading: "Online Scheduler", component: <Agreements /> }, { heading: "Get A Quote Widget", component: <Agreements /> }, { heading: "Inspection Request Form", component: <Agreements /> }],
            // text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "HOME INSPECTION ADVANCED",
            subTitle: [{ heading: "Need customizable automation, linked Inspection events, configurable metrics, or additional scheduling rules? Learn about Advanced", component: <Agreements /> }],
            // text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "REPORT OPTIONS",
            subTitle: [{ heading: "Report Tools", component: <Agreements /> }, { heading: "Location Tags", component: <Agreements /> }],
            // text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
        {
            title: "COMPANY SETTINGS",
            subTitle: [{ heading: "Social Links", component: <Agreements /> }, { heading: "Subscription", component: <Agreements /> }, { heading: "Data Imports", component: <Agreements /> }, { heading: "Agents", component: <Agreements /> }, { heading: "Calendar Options", component: <Agreements /> }, { heading: "Localization (currency, date format, unit, etc)", component: <Agreements /> }],
            // Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor",
        },
        {
            title: "USER SETTINGS",
            subTitle: [{ heading: "Integrations", component: <Agreements /> }, { heading: "User Options", component: <Agreements /> }],
            // text_messages: ["Inspection Confirmation emails for clients", "Inspection Confirmation emails for clients agent", "Inspection Confirmation emails for listing agent"]
        },
    ]

    let history = useHistory();
    return (
        <div class="extrapages-section">
            <section class="body-part">
                <div class="body-part-two bot50">
                    <Typography>
                        BASICS
                    </Typography>
                    <div class="col3 flex pad-top-bot20">
                        <div class="part-one-left flex space-between">
                            <button class="select-list" onClick={() => history.push('/SettingsProfile')}>PROFILE</button>
                        </div>
                        <div class="part-one-left flex space-between">
                            <button class="select-list" onClick={() => history.push('/SettingsServices')}>SERVICES {"&"} FEES</button>
                        </div>
                        <div class="part-one-left flex space-between">
                            <button class="select-list" onClick={() => history.push('/SettingsAvailability')}>AVAILABILITY</button>
                        </div>
                    </div>
                    <div class="col3 flex pad-top-bot20">
                        <div class="part-one-left flex space-between">
                            <button class="select-list" onClick={() => history.push('/SettingsTeam')}>TEAM</button>
                        </div>
                        <div class="part-one-left flex space-between">
                            <button class="select-list" onClick={() => history.push('/SettingsSampleReports')}>SAMPLE REPORTS</button>
                        </div>
                        <div class="part-one-left flex space-between">
                            <button class="select-list" onClick={() => history.push('/SettingsDiscountCodes')}>DISCOUNT CODES</button>
                        </div>
                    </div>

                    {questionsList.map((section, index1) => {
                        return (
                            <Accordion key={index1} onChange={handleChange('panel1')} style={{ marginBottom: "25px" }}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography>{section.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        {console.log(section.emails)}
                                        {/* {section?.subTitle?.map((subtitle, index2) => {
                                            return (
                                                <Accordion key={index1} onChange={handleChange('panel1')} style={{ marginBottom: "25px" }}>
                                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                            <Typography>{subtitle.heading}</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            {subtitle.component}
                                                        </AccordionDetails>
                                                </Accordion>
                                            )
                                        }
                                        )} */}
                                        {section?.subTitle?.map((subtitle, index2) => {
                                            return (
                                                <div className={`${subtitle.heading.split(' ')[0] + (subtitle.heading.split(' ').length > 1 ? ('-' + subtitle.heading.split(' ')[1]) : '')}-dropdown sub-accordian-dropdown`}>
                                                    <Accordion key={index1} onChange={handleChange('panel1')} style={{ marginBottom: "25px" }}>
                                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                            <Typography>{subtitle.heading}</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            {subtitle.component}
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
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