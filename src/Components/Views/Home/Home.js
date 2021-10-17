import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import Button from "@mui/material/Button";
import Down from "../../../Assets/images/down_arrow.png";
import Desktop from "../../../Assets/images/macbook.png"
import "./Home.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DesmondImg from '../../../Assets/images/desmond_tablet_1.png'
import HomeReview from "../../../Components/Views/HomeReview/HomeReview"
import SubscriptionPackage from "../../../Components/Reusable/SubscriptionPackage/SubscriptionPackage"
import img1 from '../../../Assets/images/review-img1.jpg'
import img2 from '../../../Assets/images/review-img2.jpg'
import tablet from '../../../Assets/images/tablet.png'
import family from '../../../Assets/images/family.png'
import house from '../../../Assets/images/house.png'
import chitChat from '../../../Assets/images/chit-chat.png'
import mirrorTablet from '../../../Assets/images/tablet-mirror.png'
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





function Home() {
  return (
    <div>
      <HomeHeader />


      <div className="home-background1">
        <div className="home-heading">
          <h3>
            Cut Your Home Inspection <br /> Time By At Least 25%
          </h3>
        </div>
        <div className="home-heading-paragraph">
          <h4>
            Using this industry-disrupting software, you can get <br /> your
            time back and increase your revenue.
          </h4>
        </div>
        <Button className="home-button1" variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
        <div className="down-arrow">
          <img className="down-arrow-img" src={Down} alt="down-arrow" />
        </div>
      </div>




      <div className="overview-top">
        <div >
          <h3>
            Don't let an inefficient  software keep you from <br /> doing more inspections and increasing your profit!
          </h3>
        </div>
        <div >
          <h4>
            With over 20 years of experience in the business, we get it. We know what it’s like to have to go through the entire  <br /> house with a clipboard, paper, camera and a pen only to spend more time entering everything manually into the <br /> computer when you get back to the office.
          </h4>
          <h4>
            Then the industry was introduced to time-saving software that would allow you to input information and take pictures <br /> right from your phone or iPad. However, at the end of the day, while it saved you some time, the tools to help you get <br /> through a house faster without compromising quality still seemed limited.
          </h4>
          <h4>
            This is, untill now!
          </h4>
        </div>
        <div className="desktop-image-container">
          <img className="desktop-image" src={Desktop} alt="desktop pic" width="700" />
        </div>
        <Button className="home-button1" variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
      </div>



      <div className="overview-middle">
        <div className="overview-middle-title">
          <h2 className="overview-middle-title-text">Does any of these sound familiar?</h2>
        </div>
        <div className="details-list">
          {/* <ul> */}

          <div><CheckBoxIcon color="action" /> Are you frustrated by the amount of time it takes to do your Inspection?</div>
          <div><CheckBoxIcon color="action" /> Are you wondering if there's a better way?</div>
          <div><CheckBoxIcon color="action" /> Do you want to increase the amount of homes you inspect without working longer hours...</div>
          <div><CheckBoxIcon color="action" /> Do you want a High Tech way to complete you inspection reports faster?</div>
          <div><CheckBoxIcon color="action" /> Do you want the Secret to making more money doing Home Inspections?</div>
          {/* </ul> */}
        </div>

        <div className="mid-set">
          <div className="details-paragraph">

            If any of that resonates with you or you have ever felt limited <br /> by your tools and process, you’re not alone. <br />

            In fact, if you’re tired of spending so much time inspecting <br /> and never having the ability to increase your revenue, you’ve <br /> come to the right place. <br />

            We believe that you shouldn’t be limited by your processes or <br /> your "old school" tools which is why we’ve created a mobile <br /> app called Aurora2GO! to put more time back into your life <br /> and money in your pocket. <br />

            In fact, the app saves you so much time that you’re able to <br /> get to your next inspection faster, and with just a couple <br /> home inspections, the software pays for itself! <br />

            It’s all possible with Aurora. <br />
            <Button className="home-button1" variant="contained">
              TRY IT NOW FOR 7-DAYS FREE!
            </Button>
          </div>
          <img className="mid-set-image" src={DesmondImg} alt="User Image" srcset="" />
        </div>
      </div>



      <div className="home-background2">
        <HomeReview name="R. Dunn" image={img1} />
        <HomeReview name="F. Menesis" image={img2} />
      </div>



      <div className="why-to-use">
        <div className="table-image-constainer">
          <img src={tablet} alt="tablet" width="370" />
        </div>
        <div className="text-details">
          <h1>So, why use another App?</h1>
          <p>Chances are you are already using some sort of desktop and mobile app to get you through your home inspections.

            The problem is you still can’t complete the ENTIRE inspection on your app.

            You go through a list of pre-designed checkboxes, which limit what you can actually say or write about and then you take pictures on your iPad or phone, only to spend MORE time uploading them back to the computer when you get back to the office.

            It’s a hybrid model at best.

            We understand your need to work faster, which is why we’ve created Aurora.</p>

          <h4>No complicated uploading processes</h4>
          <h4>No rigid boxes to try and fit in unique scenarios</h4>
          <b>You can complete the ENTIRE INSPECTION right from your App!</b>
        </div>
      </div>


      <div className="pay-rise">
        <div className="overview-middle-title">
          <h2 className="overview-middle-title-text">It’s time you give yourself a pay raise!!</h2>
        </div>
        <h4>
          When you complete inspections faster, you can move on to more houses. When you have more houses to inspect, you make more money.

          When a house you inspect takes you a shorter amount of time to complete, you get paid the same amount, while taking fewer hours to complete the inspection, thus increasing your hourly rate!
        </h4>
        <Button className="home-button1" variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
        <h4>
          Get more of your time back without the hassle of extra work during your home inspection.

          With this app you able to free up more of your valuable time. Time to:
        </h4>

        <div className="black-images-container">
          <div className="black-images">
            <img src={family} alt="family" width="170" />
            <div><h2>Spend with your family and friends, <br /> going to your kid’s sporting events <br /> and important moments!</h2></div>
          </div>
          <div className="black-images">
            <img src={chitChat} alt="chit chat" width="170" />
            <div><h2>Connect with more Realtors, work <br /> on your marketing and ultimately <br /> scale your business!</h2></div>
          </div>
          <div className="black-images">
            <img src={house} alt="house" width="170" />
            <div><h2>Move on to the next home <br /> inspection and increase your <br /> revenue!</h2></div>
          </div>
        </div>
      </div>


      <div className="black-container">
        <div className="blue-images-container-left">
          <div className="blue-image-left">
            <img src={reels} alt="reels" />
            <h4 className="blue-image-title-left">Traning <br /> Videos</h4>
          </div>
          <div className="blue-image-left">
            <img src={lock} alt="lock" />
            <h4 className="blue-image-title-left">Encrypted Data <br /> Protection</h4>
          </div>
          <div className="blue-image-left">
            <img src={pdf} alt="pdf" />
            <h4 className="blue-image-title-left">PDF <br />Generation</h4>
          </div>
          <div className="blue-image-left">
            <img src={monitor} alt="monitor" />
            <h4 className="blue-image-title-left">Custom Narrative <br /> Interface</h4>
          </div>
          <div className="blue-image-left">
            <img src={camera} alt="camera" />
            <h4 className="blue-image-title-left">Photo <br /> Editor</h4>
          </div>
        </div>

        <div className="black-image-container">
          <h1 className="black-container-title">What you get with Aurora:</h1>
          <img src={mirrorTablet} alt="mirror tablet" width="670" />
          {/* <span className="blue-text"><p>View Full Features List</p><p>View A Sample Report</p></span> */}
          <div className="blue-text-container"><span className="blue-text">View Full Features List</span><span className="blue-text">View A Sample Report</span></div>
        </div>

        <div className="blue-images-container-right">
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Customisable <br /> Template</h4>
            <img src={template} alt="template" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Fully Functional<br /> iPad App </h4>
            <img src={ipad} alt="ipad" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">PDF <br />Generation</h4>
            <img src={email} alt="pdf" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Email <br /> Reports</h4>
            <img src={printer} alt="email" />
          </div>
          <div className="blue-image-right">
            <h4 className="blue-image-title-right">Print From <br /> Software</h4>
            <img src={houseRoof} alt="printer" />
          </div>
        </div>
      </div>


      <div className="package-description-container">
        <h2>Pricing that puts any other software to shame:</h2>
        <p>Being a home inspector myself, I understand the frustration of paying premium prices for <br /> software that doesn't fulfill your needs.That's why I created Aurora, a software that offers <br /> more than anything else on the market, for a fraction of the cost.</p>
        <div className="package-component">
        <SubscriptionPackage image={""} />
        <SubscriptionPackage image={redRibbon} />
        </div>
        <Button className="home-button1" variant="contained">
          TRY IT NOW FOR 7-DAYS FREE!
        </Button>
      </div>


    </div>
  );
}

export default Home;
