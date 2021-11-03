import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import Button from "@mui/material/Button";
import Down from "../../../Assets/images/down_arrow.png";
import Desktop from "../../../Assets/images/Mac2.png"
import "./Home.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DesmondImg from '../../../Assets/images/desmond_tablet_1.png'
import DesmondImg2 from '../../../Assets/images/Hand-iPad.png'
import HomeReview from "../../../Components/Views/HomeReview/HomeReview"
import SubscriptionPackage from "../../../Components/Reusable/SubscriptionPackage/SubscriptionPackage"
import img1 from '../../../Assets/images/review-img1.jpg'
import img2 from '../../../Assets/images/review-img2.jpg'
import tablet from '../../../Assets/images/iPad-Splash.png'
import family from '../../../Assets/images/family.png'
import house from '../../../Assets/images/house.png'
import chitChat from '../../../Assets/images/chit-chat.png'
import mirrorTablet from '../../../Assets/images/iPad-Mirror.png'
import reels from '../../../Assets/images/reels.png'
import lock from '../../../Assets/images/lock.png'
import pdf from '../../../Assets/images/pdf.png'
import monitor from '../../../Assets/images/monitor.png'
import camera from '../../../Assets/images/camera.png'
import template from '../../../Assets/images/template.png'
import ipad from '../../../Assets/images/ipad.png'
import email from '../../../Assets/images/email.png'
import printer from '../../../Assets/images/printer.png'
import houseRoof from '../../../Assets/images/house-roof.png'
import redRibbon from '../../../Assets/images/red-ribbon.png'
import signature from '../../../Assets/images/signature.png'
import circularLogo from '../../../Assets/images/circular-logo.png'
import cross from '../../../Assets/images/cross.png'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
// import { makeStyles } from "@mui/material";


// const useStyle = makeStyles(theme => ({
//   modal: {
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 700,
//     height: 600,
//     bgcolor: 'background.paper',
//     // border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//     padding: 0,
//   },

//   textField : {
//     fontSize: '14px',
//     borderRadius: '5px',
//     // backgroundPosition: '97%',
//     backgroundColor: '#fff',
//     border: '1px solid rgba(0,0,0,0.2)',
//     padding: '12px 18px',
//     outline: 'none',
//     boxShadow: 'inset 0 1px 2px rgb(130 137 150 / 23%), 0 1px 0 rgb(255 255 255 / 95%)',
//     textAlign: 'left',
//   }
// }))

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 600,
  outline: 'none',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: 0,
  minHeight: '100vh',
  overflowY: 'auto',
};



function Home() {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const classes = useStyle()


  React.useEffect(() => {
    handleOpen()
  }, [])
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal disable"
      >
        <Box className="modal-box">
          <div className="modal-blue-container">
            <img src={circularLogo} className="circular-logo" alt="logo" width="150" />
            <img src={cross} onClick={handleClose} className="cross-sign" alt="cross" width="40" />
            <div className="title-container">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h2 className="modal-heading">Try it now. Risk free.</h2>
              </Typography>
              <Typography className="no-margin" id="modal-modal-description" sx={{ mt: 2 }}>
                <h6 className="modal-description">No hidden features, no gimmicks. Cancel anytime.</h6>
              </Typography>
            </div>
          </div>


          <div className="modal-input">
            <div className="input-tags">
            <div>
                        <div className="input-field"><TextField className="input-design margin10" placeholder="Name..." fullWidth id="fullWidth" /></div>
                        <div className="input-field"><TextField className="input-design margin10" placeholder="Email..." fullWidth id="fullWidth" /></div>
                        <div className="input-field"><TextField className="input-design margin10" placeholder="Number..." fullWidth id="fullWidth" /></div>
                    </div>
              {/* <div className="input-field"><TextField className="input-design" fullWidth label="Name" id="fullWidth" /></div>
              <div className="input-field"><TextField className="input-design" fullWidth label="Email" id="fullWidth" /></div>
              <div className="input-field"><TextField className="input-design" fullWidth label="Number" id="fullWidth" /></div> */}
            </div>
            <Button className="modal-button" onClick={() => history.push('/Sign-Up')} variant="contained">
              TRY IT NOW FOR 7-DAYS FREE!
            </Button>
            <Typography className="no-margin" id="modal-modal-description" sx={{ mt: 2 }}>
              <h6 className="grey-info">&#x1F512;We will never sell your contact information or spam you.</h6>
            </Typography>
          </div>
        </Box>
      </Modal>
      <HomeHeader handleOpen={handleOpen} />


      <div className="home-background1">
        <div>
          <h3 className="home-heading">
            Cut Your Home Inspection <br /> Time By At Least 25%
          </h3>
        </div>
        <div>
          <h4 className="home-heading-paragraph">
            Using this industry-disrupting software, you can get <br /> your
            time back and increase your revenue.
          </h4>
        </div>
        <Button className="home-button1" onClick={() => history.push('/Sign-Up')} variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
        <div className="down-arrow">
          <img className="down-arrow-img" src={Down} alt="down-arrow" />
        </div>
      </div>




      <div className="overview-top">
        <div >
          <h3 className="overview-top-heading">
            Don't let an inefficient  software keep you from <br /> doing more inspections and increasing your profit!
          </h3>
        </div>
        <div className="overview-top-content">
          <p>
            With over 20 years of experience in the business, we get it. We know what it’s like to have to go through the entire  <br /> house with a clipboard, paper, camera and a pen only to spend more time entering everything manually into the <br /> computer when you get back to the office.
          </p>
          <p>
            Then the industry was introduced to time-saving software that would allow you to input information and take pictures <br /> right from your phone or iPad. However, at the end of the day, while it saved you some time, the tools to help you get <br /> through a house faster without compromising quality still seemed limited.
          </p>
          <h4>
            <b>This is, untill now!</b>
          </h4>
        </div>
        <div className="desktop-image-container">
          <img className="desktop-image" src={Desktop} alt="desktop pic" width="700" />
        </div>
        <Button className="home-button1" onClick={() => history.push('/Sign-Up')} variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
      </div>



      <div className="overview-middle">
        <div className="overview-middle-title">
          <h2 className="overview-middle-title-text">Does any of these sound familiar?</h2>
        </div>
        <div className="details-list text-color disable">
          <div className="checkbox-container"><CheckBoxIcon color="action" /> Are you frustrated by the amount of  &nbsp;<b>time it takes to do your Inspection?</b></div>
          <div className="checkbox-container"><CheckBoxIcon color="action" /> Are you wondering if  &nbsp;<b>there's a better way?</b></div>
          <div className="checkbox-container"><CheckBoxIcon color="action" /> Do you want to  &nbsp;<b>increase the amount of homes you inspect without working longer hours...</b></div>
          <div className="checkbox-container"><CheckBoxIcon color="action" /> Do you want a  &nbsp;<b>High Tech way to complete you inspection reports faster?</b></div>
          <div className="checkbox-container"><CheckBoxIcon color="action" /> Do you want the  &nbsp;<b>Secret to making more money doing Home Inspections?</b></div>
        </div>
        <div className="details-list text-color disable-fullscreen">
          <div className="checkbox-container">Are you frustrated by the amount of time it takes to do your Inspection?</div>
          <div className="checkbox-container">Are you wondering if there's a better way?</div>
          <div className="checkbox-container">Do you want to increase the amount of homes you inspect without working longer hours...</div>
        </div>

        <div className="mid-set">
          <div className="details-paragraph-text">

            <p>If any of that resonates with you or you have ever felt limited <br /> by your tools and process, you’re not alone. <br /></p>

            <p>In fact, if you’re tired of spending so much time inspecting <br /> and never having the ability to increase your revenue, <b>you’ve <br /> come to the right place.</b><br /></p>

            <p>We believe that you shouldn’t be limited by your processes or <br /> your "old school" tools which is why we’ve created a mobile <br /> app called <b>Aurora2GO!</b> to put more time back into your life <br /> and money in your pocket. <br /></p>

            <p>In fact, the app saves you so much time that you’re able to <br /> <b>get to your next inspection faster</b>, and <u> with just a couple<br /> home inspections, the software pays for itself! </u><br /></p>

            <p>It’s all possible with <b>Aurora.</b><br /></p>
            <Button className="home-button1" onClick={() => history.push('/Sign-Up')} variant="contained">
              TRY IT NOW FOR 7-DAYS FREE!
            </Button>
          </div>
          <img className="mid-set-image disable" src={DesmondImg} alt="User Image" srcset="" />
        </div>
      </div>



      <div className="home-background2">
        <div className="home-background2-container">
          <HomeReview name="R. Dunn" image={img1} content={`“I really like the fact that I can go to the Property ${<br />} without my clipboard and complete the whole ${<br />} inspection with Aurora”.`} />
          <HomeReview name="F. Menesis" image={img2} content={`"This inspection software is a BIG improvement from ${<br />} the one I had before! It takes me much less time to ${<br />} complete my inspection reports! Thank you."`} />
        </div>
      </div>



      <div className="why-to-use">
        {/* <div className="table-image-container"> */}
        <img className="tablet-image" src={tablet} alt="tablet" width="370" />
        {/* </div> */}
        <div className="text-details" >
          <h1 className="text-details-heading">So, why use another App?</h1>
          <p className="text-color left-align line-height">Chances are you are already using some sort of desktop and mobile app to get you through your home inspections.</p>

          <p className="text-color left-align">The problem is you still can’t complete the ENTIRE inspection on your app.</p>

          <p className="text-color left-align line-height">You go through a list of pre-designed checkboxes, which limit what you can actually say or write about and then you take pictures on your iPad or phone, only to spend MORE time uploading them back to the computer when you get back to the office.</p>

          <p className="text-color left-align">It’s a hybrid model at best.</p>

          <p className="text-color left-align">We understand your need to work faster, which is why we’ve created Aurora.</p>
          <div>
            <p className="text-color left-align">No complicated uploading processes</p>
            <p className="text-color left-align">No rigid boxes to try and fit in unique scenarios</p>
          </div>
          <p className="text-color left-align"><b>You can complete the ENTIRE INSPECTION right from your App!</b></p>
        </div>
      </div>


      <div className="pay-rise">
        <div className="overview-middle-title">
          <h2 className="overview-middle-title-text">It’s time you give yourself a pay raise!!</h2>
        </div>
        <div className="text-color pay-rise-text">
          <p className="pay-rise-height"> When you complete inspections faster, you can move on to more houses. When you have more houses to inspect, you <br /> make more money. <br /></p>

          <p className="pay-rise-height"> When a house you inspect takes you a shorter amount of time to complete, you get paid the same amount, while <br /> taking fewer hours to complete the inspection, thus increasing your hourly rate! <br /></p>
        </div>
        <Button className="home-button1" onClick={() => history.push('/Sign-Up')} variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
        <p className="text-color pay-rise-text mob-pad">
          Get more of your time back without the hassle of extra work during your home inspection. <br /></p>
        <p className="text-color pay-rise-text mob-pad">
          With this app you able to free up more of your valuable time. Time to: <br />
        </p>

        <div className="black-images-container">
          <div className="black-images">
            <img className="black-image" src={family} alt="family" width="170" />
            <div><p className="text-color">Spend with your family and friends, <br /> going to your kid’s sporting events <br /> and important moments!</p></div>
          </div>
          <div className="black-images">
            <img className="black-image" src={chitChat} alt="chit chat" width="170" />
            <div><p className="text-color">Connect with more Realtors, work <br /> on your marketing and ultimately <br /> scale your business!</p></div>
          </div>
          <div className="black-images">
            <img className="black-image" src={house} alt="house" width="170" />
            <div><p className="text-color">Move on to the next home <br /> inspection and increase your <br /> revenue!</p></div>
          </div>
        </div>
      </div>


      <div className="black-container" id="features">
        <h1 className="black-container-title disable-fullscreen">What you get with Aurora:</h1>
        <div className="blue-images-container-left">
          <div className="blue-image-left">
            <img className="blue-image" src={reels} alt="reels" />
            <h4 className="blue-image-title-left">Traning <br /> Videos</h4>
          </div>
          <div className="blue-image-left">
            <img className="blue-image" src={lock} alt="lock" />
            <h4 className="blue-image-title-left">Encrypted Data <br /> Protection</h4>
          </div>
          <div className="blue-image-left">
            <img className="blue-image" src={pdf} alt="pdf" />
            <h4 className="blue-image-title-left">PDF <br />Generation</h4>
          </div>
          <div className="blue-image-left">
            <img className="blue-image" src={monitor} alt="monitor" />
            <h4 className="blue-image-title-left">Custom Narrative <br /> Interface</h4>
          </div>
          <div className="blue-image-left">
            <img className="blue-image" src={camera} alt="camera" />
            <h4 className="blue-image-title-left">Photo <br /> Editor</h4>
          </div>
        </div>

        <div className="black-image-container disable">
          <h1 className="black-container-title">What you get with Aurora:</h1>
          <img src={mirrorTablet} alt="mirror tablet" width="670" />
          {/* <span className="blue-text"><p>View Full Features List</p><p>View A Sample Report</p></span> */}
          <div className="blue-text-container"><span className="blue-text">View Full Features List</span><span className="blue-text">View A Sample Report</span></div>
        </div>

        <div className="blue-images-container-right">
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Customisable <br /> Template</h4>
            <img className="blue-image" src={template} alt="template" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Fully Functional<br /> iPad App </h4>
            <img className="blue-image" src={ipad} alt="ipad" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">PDF <br />Generation</h4>
            <img className="blue-image" src={email} alt="pdf" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Email <br /> Reports</h4>
            <img className="blue-image" src={printer} alt="email" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Print From <br /> Software</h4>
            <img className="blue-image" src={houseRoof} alt="printer" />
          </div>
        </div>


        <div className="black-image-container disable-fullscreen">
          <img src={mirrorTablet} alt="mirror tablet" width="670" />
          {/* <span className="blue-text"><p>View Full Features List</p><p>View A Sample Report</p></span> */}
          <Button className="home-button1" onClick={() => history.push('/Sign-Up')} variant="contained">
            TRY IT NOW FOR 7-DAYS FREE!
          </Button>
          <div className="blue-text-container"><span className="blue-text">View Full Features List</span><span className="blue-text">View A Sample Report</span></div>
        </div>
      </div>


      <div className="package-description-container" id="pricing">
        <div className="package-description-heading">
          <p className="text-details-heading">Pricing that puts any other software to shame:</p>
          <p className="package-description-text">Being a home inspector myself, I understand the frustration of paying premium prices for <br /> software that doesn't fulfill your needs.That's why I created Aurora, a software that offers <br /> more than anything else on the market, for a fraction of the cost.</p>
        </div>
        <div className="package-component">
          <SubscriptionPackage image={""} />
          <SubscriptionPackage image={redRibbon} />
        </div>
        <Button className="home-button1" onClick={() => history.push('/Sign-Up')} variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
      </div>



      <div className="footer">
        <p className="text-details-heading">This isn’t just another software.</p>
        {/* <div className="overview-middle-title">
          <h2 className="overview-middle-title-text">Does any of these sound familiar?</h2>
        </div> */}
        {/* <div className="details-list">
          <div><CheckBoxIcon color="action" /> Are you frustrated by the amount of time it takes to do your Inspection?</div>
          <div><CheckBoxIcon color="action" /> Are you wondering if there's a better way?</div>
          <div><CheckBoxIcon color="action" /> Do you want to increase the amount of homes you inspect without working longer hours...</div>
          <div><CheckBoxIcon color="action" /> Do you want a High Tech way to complete you inspection reports faster?</div>
          <div><CheckBoxIcon color="action" /> Do you want the Secret to making more money doing Home Inspections?</div>
        </div> */}

        <div className="mid-set">
          <div className="details-paragraph">
            <p className="details-paragraph-text"> This is the TOOL you need to spend less time per inspection and more time doing <br /> what you love and scaling your business. <br /></p>

            <p className="details-paragraph-text"> Stop limiting yourself by the process you have, and start building your dream life <br /> with an app that gives you what you need to grow your income and your free time. <br /></p>

            <p className="details-paragraph-text"> <b>Because from one inspector to another, I hear you loud and clear.</b><br /></p>

            <p className="details-paragraph-text"> Each day that you aren't using a software that maximizes your productivity and <br /> revenue is another day you're missing out on extra money and time to spend with <br /> your loved ones. <br /></p>

            <p className="details-paragraph-text"> So join other home inspectors who have already cut their time by over 25%! <br /></p>

            <p className="details-paragraph-text">Today is the day. Thanks for your time! <br /></p>
            <div > <img className="sign-image" src={signature} alt="User Image" width="330" /> </div>
            <p className="details-paragraph-text">- CEO, Aurora</p>
            <Button className="home-button1" onClick={() => history.push('/Sign-Up')} variant="contained">
              TRY IT NOW FOR 7-DAYS FREE!
            </Button>
          </div>
          <img src={DesmondImg2} alt="User Image" width="400" />
        </div>
        <hr />
        <p className="copyright-text">© Copyright 2019 - All Rights Reserved, InspectSource <br />
          185 Bradford Square, Fayetteville, GA 30215 <br />
          Customer Service: (770)-780-5532</p> <br />
      </div>

    </div>
  );
}

export default Home;
