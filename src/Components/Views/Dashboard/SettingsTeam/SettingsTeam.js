import React,{useState} from 'react';
import './SettingsTeam.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import sidebarImage from "../../../Software/assets/sidebar-logo.png"
import textbox from "../../../Software/assets/textbox.png"
import tick from "../../../Software/assets/tick.png"
import { useHistory } from 'react-router-dom';
import SettingsTeams from '../SettingsTeams/SettingsTeams';
import Modal from 'react-modal';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');


const SettingsTeam = () => {

    let history = useHistory();

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    // const [isOpen, setIsOpen] = useState(false);
    // const togglePopup = () => {
    //     setIsOpen(!isOpen);
    //   }

    return(
        <div class="settingsTeam-section">
            <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                    <p className="header-subname">Team</p>
                </div>
                <div class="header-part-right">
                    <img className="header-clock" src={headerClock} alt="headerClock"></img>
                    <p className="header-time">14:20 PM Friday April, 21</p>
                    <img className="header-icon-one" src={headerIconOne} alt="headerIconOne"></img>
                    <img className="header-icon-two" src={headerIconTwo} alt="headerIconTwo"></img>
                    <img className="header-icon-profile" src={headerProfile} alt="headerProfile"></img>
                </div>
            </section>
            <section className="body-part">
                <div className="body-header">
                    <div className="body-header-left">
                        <p>TEAM</p>
                    </div>
                    <div className="body-header-right">
                        <button>SUBSCRIPTIONS</button>
                    </div>
                </div>
                <div className="body-content">
                    <div className="body-one">
                        <p>Ready to start your subscriptions?</p>
                        <button>VIEW PLANS</button>
                    </div>
                    <div className="body-two">
                        <div class="two-left">
                            <p>Show</p>
                            <select name="selectList" id="selectList">
                                <option value="option 1">10</option>
                                <option value="option 2">other numbers</option>
                            </select>
                        </div>
                        <div class="two-right">
                        <p>Search</p>
                        <input type="text" placeholder="Entries"></input>
                        </div>
                    </div>
                    <div className="body-three">
                        <div className="header">
                            <div className="left">
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>Email</p>
                            </div>
                            <div className="right">
                                <p>Phone</p>
                                <p>Schedule?</p>
                                <p>Publish?</p>
                                <p>Add to Template?</p>
                                <p>Edit Template?</p>
                                <p>Can manage contacts?</p>
                                <p>Can manage financial data?</p>
                                <p>Admin?</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="left">
                                <p>Steve</p>
                                <p>Doe</p>
                                <p>stevedoe@gmail.com</p>
                            </div>
                            <div className="right">
                                {/* <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        {/* <button onClick={togglePopup}>ADD INSPECTION</button> */}
                        <button onClick={openModal}>ADD INSPECTION</button>
                    </div>
                        <ReactModal
                        isOpen={modalIsOpen}
                        contentLabel="Example Modal"
                        onRequestClose={closeModal}
                        className="Modal"
                        overlayClassName="Overlay">

                        <div className="modal-wrapper">
                            <div className="modal-heading">
                                <p>ADD AN INSPECTOR</p>
                            </div>
                            <div className="modal-content">
                                <div className="column-one">
                                        <label>First Name:</label>
                                        <input type="text"></input>
                                        <label>Last Name:</label>
                                        <input type="text"></input>
                                        <label>Phone:</label>
                                        <input type="text"></input>
                                        <label>Email(required):</label>
                                        <input type="text"></input>
                                </div>
                                <div className="column-two">
                                        <div>
                                            <input type="checkbox" value="Paneer" />
                                            <label>Can schedule new inspections?</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" value="Paneer" />
                                            <label>Can publish reports?</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" value="Paneer" />
                                            <label>Can add new comments to template?</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" value="Paneer" />
                                            <label>Can schedule new inspections?</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" value="Paneer" />
                                            <label>Can publish reports?</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" value="Paneer" />
                                            <label>Can add new comments to template?</label>
                                        </div>
                                </div>
                            </div>
                            <div className="button">
                                <button>ADD INSPECTOR</button>
                            </div>
                        </div>
                        </ReactModal>
                        {/* <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            // style={customStyles}
                            contentLabel="Example Modal"
                        > */}
                        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                        <button onClick={closeMoal}>close</button>
                        <div>I am a modal</div>
                        <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                        </form> */}
                    {/* </Modal> */}
                    <div className="body-three">
                        <div className="header">
                            <div className="left">
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>Email</p>
                            </div>
                            <div className="right">
                                <p>Phone</p>
                                <p>Schedule?</p>
                                <p>Publish?</p>
                                <p>Add to Template?</p>
                                <p>Edit Template?</p>
                                <p>Can manage contacts?</p>
                                <p>Can manage financial data?</p>
                                <p>Admin?</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="left">
                                <p>Steve</p>
                                <p>Doe</p>
                                <p>stevedoe@gmail.com</p>
                            </div>
                            <div className="right">
                                {/* <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img>
                                <img src={tick}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button>ADD STAFF MEMBER</button>
                    </div>
                    <div class="body-four">
                        <div class="header">
                            <p>MULTIPLE LOCATIONS? FRANCHISING?</p>
                        </div>
                        <div class="body">
                            <p>Create an organization with multiple companies, locations or franchises.</p>
                            <p>Our Organization Tools allow you to view metrics across multiple companies and share assets between companies like templates, agreements and automation settings.</p>
                            <button onClick={() => history.push('/SettingsSampleReports')}>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SettingsTeam;