import React from 'react';
import './Automation.css';
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


const Automation = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

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


    return (
        <div className="extrapages-section">
            <section className="body-part">
                <div class="flex space-between">
                    <div class="part-one-left flex space-between">
                        <select name="selectList" class="select-list">
                            <option value="1" >Contract 1</option>
                            <option value="2" >Contract 2</option>
                            <option value="3" >Contract 3</option>
                            <option value="4" >Contract 4</option>
                            <option value="5" >Contract 5</option>
                            <option value="6" >Contract 6</option>
                            <option value="7" >Contract 7</option>
                        </select>
                    </div>
                    <div class="part-one-left flex space-between">
                        <select name="selectList" class="select-list">
                            <option value="1" >Contract 1</option>
                            <option value="2" >Contract 2</option>
                            <option value="3" >Contract 3</option>
                            <option value="4" >Contract 4</option>
                            <option value="5" >Contract 5</option>
                            <option value="6" >Contract 6</option>
                            <option value="7" >Contract 7</option>
                        </select>
                    </div>
                    <div class="part-one-left flex space-between">
                        <select name="selectList" class="select-list">
                            <option value="1" >Contract 1</option>
                            <option value="2" >Contract 2</option>
                            <option value="3" >Contract 3</option>
                            <option value="4" >Contract 4</option>
                            <option value="5" >Contract 5</option>
                            <option value="6" >Contract 6</option>
                            <option value="7" >Contract 7</option>
                        </select>
                    </div>
                    <div class="part-one-left flex space-between">
                        <select name="selectList" class="select-list">
                            <option value="1" >Contract 1</option>
                            <option value="2" >Contract 2</option>
                            <option value="3" >Contract 3</option>
                            <option value="4" >Contract 4</option>
                            <option value="5" >Contract 5</option>
                            <option value="6" >Contract 6</option>
                            <option value="7" >Contract 7</option>
                        </select>
                    </div>
                </div>
                <div class="body-part-two bot50">
                    {questionsList.map((section, index1) => {
                        return (
                            <Accordion key={index1} onChange={handleChange('panel1')} style={{marginBottom: "25px"}}>
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
                                            return(
                                                <FormControlLabel key={index2} control={<BpCheckbox/>} label={email} />
                                            )
                                        }
                                        )}
                                        
                                    </FormGroup>
                                    <Typography>
                                        TEXT MESSAGES
                                    </Typography>
                                    <FormGroup>
                                    {section?.text_messages?.map((message, index3) => {
                                            return(
                                                <FormControlLabel key={index3} control={<BpCheckbox/>} label={message} />
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

export default Automation;