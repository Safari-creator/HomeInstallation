import React, {useState} from 'react';
import './Templates.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import arrowDown from "../../../Software/assets/arrowDown.png"
import arrowSide from "../../../Software/assets/arrowSide.png"
import threeDots from "../../../Software/assets/threeDots.png"
import { Dropdown } from 'react-bootstrap';
import {FaAngleRight, FaEdit, FaCopy, FaTrash} from "react-icons/fa";
import Modal from 'react-modal';

const Templates = () => {

    // section part

    const initialDataSection = [
        { id: 0, label: "Inspection" },
        { id: 1, label: "Roof" },
        { id: 2, label: "Exterior" }
    ];

    const ListSectionItem = ({label, id, onRemoveClick }) => (
    <div class="items-row">
        <FaAngleRight></FaAngleRight>
        {label}
        <span> </span>
        <button className='icons'><FaEdit></FaEdit><FaCopy></FaCopy><FaTrash onClick={() => onRemoveClick(id)}></FaTrash></button>
    </div>
    );

    const ListSection = () => {

        const [list, updateList] = useState(initialDataSection);
        const [newLabel, setLabel] = useState("");

        const addItem = () => {
            const newList = [
              ...list,
              { id: list.length, label: newLabel }
            ];
            updateList(newList);
        };

        const removeItem = id => {
            updateList(list.filter(item => item.id !== id));
        };

        return (
            <div>
                {list.map(item => (
                    <ListSectionItem key={item.id} {...item} onRemoveClick={removeItem} />
                ))}

                <div class="add-section-input">
                <label>
                    <input
                        type="text"
                        class="add-section-input"
                        value={newLabel}
                        placeholder='ADD SECTION'
                        onChange={e => setLabel(e.currentTarget.value)}
                    />
                </label>
                </div>
                <div class="add-section-button">
                    <button onClick={addItem}>Add Section</button>
                </div>
                {/* <h2>Debugging</h2>
                <pre>{JSON.stringify(list, null, 2)}</pre> */}
            </div>
        );
    };

    // items part

    const initialDataItems = [
        { id: 0, label: "General" },
    ];

    const ListItemsItem = ({label, id, onRemoveClick }) => (
        <div class="items-row">
            <FaAngleRight></FaAngleRight>
            {label}
            <span> </span>
            <button className='icons'><FaEdit></FaEdit><FaCopy></FaCopy><FaTrash onClick={() => onRemoveClick(id)}></FaTrash></button>
        </div>
        );

    const ListItems = () => {

        const [list, updateList] = useState(initialDataItems);
        const [newLabel, setLabel] = useState("");

        const addItem = () => {
            const newList = [
              ...list,
              { id: list.length, label: newLabel }
            ];
            updateList(newList);
        };

        const removeItem = id => {
            updateList(list.filter(item => item.id !== id));
        };

        return (
            <div>
                {list.map(item => (
                    <ListItemsItem key={item.id} {...item} onRemoveClick={removeItem} />
                ))}

                <div class="add-item-input">
                <label>
                    <input
                        type="text"
                        class="add-item-input"
                        value={newLabel}
                        placeholder='ADD ITEM'
                        onChange={e => setLabel(e.currentTarget.value)}
                    />
                </label>
                </div>
                <div class="add-item-button">
                    <button onClick={addItem}>Add Item</button>
                </div>
                {/* <h2>Debugging</h2>
                <pre>{JSON.stringify(list, null, 2)}</pre> */}
            </div>
        );
    };

    // attachments part

     const initialDataAttachments = [
        { id: 0, label: "Attachment1" },
    ];

    const ListAttachmentsItem = ({label, id, onRemoveClick }) => (
    <div class="items-row">
        <FaAngleRight></FaAngleRight>
        {label}
        <span> </span>
        <button className='icons'><FaEdit></FaEdit><FaCopy></FaCopy><FaTrash onClick={() => onRemoveClick(id)}></FaTrash></button>
    </div>
    );

    const ListAttachments = () => {

        const [list, updateList] = useState(initialDataAttachments);
        const [newLabel, setLabel] = useState("");

        const addItem = () => {
            const newList = [
              ...list,
              { id: list.length, label: newLabel }
            ];
            updateList(newList);
        };

        const removeItem = id => {
            updateList(list.filter(item => item.id !== id));
        };

        return (
            <div>
                {list.map(item => (
                    <ListAttachmentsItem key={item.id} {...item} onRemoveClick={removeItem} />
                ))}

                <div class="add-attachments-input">
                <label>
                    <input
                        type="text"
                        class="add-attachments-input"
                        value={newLabel}
                        placeholder='ADD ATTACHMENT'
                        onChange={e => setLabel(e.currentTarget.value)}
                    />
                </label>
                </div>
                <div class="add-attachments-button">
                    <button onClick={addItem}>Add Attachment</button>
                </div>
            </div>
        );
    };

    // informational part

    const initialDataInformational = [
        { id: 0, label: "In Attendance" },
        { id: 1, label: "Occupacy" },
        { id: 2, label: "Style" },
        { id: 3, label: "Temperature" },
        { id: 4, label: "Type of Building" },
        { id: 5, label: "Weather Conditions" },
    ];

    const ListInformationalItem = ({label, id, onRemoveClick }) => (
    <div class="items-row">
        <FaAngleRight></FaAngleRight>
        {label}
        <span> </span>
        <button className='icons'><FaEdit></FaEdit><FaCopy></FaCopy><FaTrash onClick={() => onRemoveClick(id)}></FaTrash></button>
    </div>
    );

    const ListInformational = () => {

        const [list, updateList] = useState(initialDataInformational);
        const [newLabel, setLabel] = useState("");

        const addItem = () => {
            const newList = [
              ...list,
              { id: list.length, label: newLabel }
            ];
            updateList(newList);
        };

        const removeItem = id => {
            updateList(list.filter(item => item.id !== id));
        };

        return (
            <div>
                {list.map(item => (
                    <ListInformationalItem key={item.id} {...item} onRemoveClick={removeItem} />
                ))}

                <div class="add-informational-input">
                <label>
                    <input
                        type="text"
                        class="add-informational-input"
                        value={newLabel}
                        placeholder='ADD INFORMATIONAL'
                        onChange={e => setLabel(e.currentTarget.value)}
                    />
                </label>
                </div>
                <div class="add-informational-button">
                    <button onClick={addItem}>Add Informational</button>
                </div>
            </div>
        );
    };

    // limitations part

    const initialDataLimitations = [
        { id: 0, label: "Limitation1" },
    ];

    const ListLimitationsItem = ({label, id, onRemoveClick }) => (
    <div class="items-row">
        <FaAngleRight></FaAngleRight>
        {label}
        <span> </span>
        <button className='icons'><FaEdit></FaEdit><FaCopy></FaCopy><FaTrash onClick={() => onRemoveClick(id)}></FaTrash></button>
    </div>
    );

    const ListLimitations = () => {

        const [list, updateList] = useState(initialDataLimitations);
        const [newLabel, setLabel] = useState("");

        const addItem = () => {
            const newList = [
              ...list,
              { id: list.length, label: newLabel }
            ];
            updateList(newList);
        };

        const removeItem = id => {
            updateList(list.filter(item => item.id !== id));
        };

        return (
            <div>
                {list.map(item => (
                    <ListLimitationsItem key={item.id} {...item} onRemoveClick={removeItem} />
                ))}
                <div class="add-limitations-input">
                <label>
                    <input
                        type="text"
                        class="add-limitations-input"
                        value={newLabel}
                        placeholder='ADD RECORD'
                        onChange={e => setLabel(e.currentTarget.value)}
                    />
                </label>
                </div>
                <div class="add-limitations-button">
                    <button onClick={addItem}>Add Record</button>
                </div>
            </div>
        );
    };

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
        padding:'0px',
        marginTop: '50px',
        },
    };

    // for modal
   
    const [modalAddSectionIsOpen, setModalAddSectionIsOpen] = React.useState(false);

    function openAddSectionModal() {
        setModalAddSectionIsOpen(true);
      }
    function closeAddSectionModal() {
        setModalAddSectionIsOpen(false);
      }

    return(
        <div class="templates-section">
            <section className="body-part">
                <div class="body-part-one">
                    <div class="part-one-left">
                        <p>RESIDENTAL TEMPLATE</p>
                    </div>
                    <div class="part-one-right">
                        <button class="my-templates">
                            <p>My Templates</p><img src={arrowDown}></img></button>
                            <button class="templates">Templates</button>
                            <img class="image-dots" src={threeDots}></img>
                    </div>
                </div>
                <div class="body-part-two">
                    <div class="three-columns">
                        <div class="column-one">
                            <div class="column-one-header">
                                <p>SECTION</p>
                            </div>
                            <div class="column-one-body">
                                {/* <div class="row">
                                        <div class=""><p>Inspection Details</p></div>
                                        <div class="row-icons"><FaEdit onClick={editHandler}/><FaCopy onClick={copyHandler}/><FaTrash onClick={deleteHandler}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <p>Roof</p>
                                    <div class="row-icons"><FaEdit onClick={editHandler}/><FaCopy onClick={copyHandler}/><FaTrash onClick={deleteHandler}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <p>Exterior</p>
                                    <div class="row-icons"><FaEdit onClick={editHandler}/><FaCopy onClick={copyHandler}/><FaTrash onClick={deleteHandler}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <p>Heating</p>
                                    <div class="row-icons"><FaEdit onClick={editHandler}/><FaCopy onClick={copyHandler}/><FaTrash onClick={deleteHandler}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <p>Cooling</p>
                                    <div class="row-icons"><FaEdit onClick={editHandler}/><FaCopy onClick={copyHandler}/><FaTrash onClick={deleteHandler}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <p>{sectionInputShow}</p>
                                    <div class="row-icons">
                                    </div>
                                </div> */}
                                 <ListSection />
                                <div class="section-button">
                                    {/* {/ <button onClick={openAddSectionModal}>Add Section</button> /} */}
                                        <Modal isOpen={modalAddSectionIsOpen}
                                            onRequestClose={closeAddSectionModal}
                                            style={customStyles}
                                            contentLabel="Example Modal"
                                            class="modal-agent">
                                            <div class="modal-body">
                                                <button onClick={closeAddSectionModal}>x</button>
                                                <div class="modal-form">
                                                    <form class="form">
                                                        <div class="form-heading">
                                                            <p>ADD A NEW SECTION</p>
                                                        </div>
                                                        <div>
                                                            <label>Section Name:</label>
                                                            <input type="text" placeholder='Section Name'></input>  
                                                        </div>
                                                        <div class="form-buttons">
                                                            <button>Add</button>
                                                            <button>Cancel</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </Modal>
                                </div> 
                            </div>
                        </div>
                        <div class="column-two">
                            <div class="items">
                                <div class="items-header">
                                    <p>ITEMS</p>
                                </div>
                                <div class="items-body">
                                    {/* <div class="row">
                                        <img class="image-arrow" src={arrowSide}></img>
                                        <p>General</p>
                                        <img class="image-dots" src={threeDots}></img>
                                    </div>
                                    <div class="items-button">
                                        <button>Add Item</button>
                                    </div> */}
                                    <ListItems/>
                                </div>
                            </div>
                            <div class="attachments">
                                <div class="attachments-header">
                                    <p>ATTACHMENTS</p>
                                </div>
                                <div class="attachments-body">
                                    {/* {/ <p>No attachments yet</p> /}
                                    {/* <div class="attachments-button">
                                     <button>Add Section</button>
                                    </div> */} 
                                    <ListAttachments></ListAttachments>
                                </div>
                            </div>
                        </div>
                        <div class="column-three">
                            <div class="informational">
                                <div class="informational-header">
                                    <p>INFORMATIONAL</p>
                                </div>
                                <div class="informational-body">
                                    {/* <div class="row">
                                        <img class="image-arrow" src={arrowSide}></img>
                                        <p>In Attendance</p>
                                        <img class="image-dots" src={threeDots}></img>
                                    </div>
                                    <div class="row">
                                        <img class="image-arrow" src={arrowSide}></img>
                                        <p>Occupacy</p>
                                        <img class="image-dots" src={threeDots}></img>
                                    </div>
                                    <div class="row">
                                        <img class="image-arrow" src={arrowSide}></img>
                                        <p>Style</p>
                                        <img class="image-dots" src={threeDots}></img>
                                    </div>
                                    <div class="row">
                                        <img class="image-arrow" src={arrowSide}></img>
                                        <p>Temperature</p>
                                        <img class="image-dots" src={threeDots}></img>
                                    </div>
                                    <div class="row">
                                        <img class="image-arrow" src={arrowSide}></img>
                                        <p>Type of building</p>
                                        <img class="image-dots" src={threeDots}></img>
                                    </div>
                                    <div class="row">
                                        <img class="image-arrow" src={arrowSide}></img>
                                        <p>Weather Conditions</p>
                                        <img class="image-dots" src={threeDots}></img>
                                    </div> */}
                                    <ListInformational></ListInformational>
                                </div>
                            </div>
                            <div class="limitations">
                                <div class="limitations-header">
                                        <p>LIMITATIONS</p>
                                    </div>
                                    <div class="limitations-body">
                                        {/* {/ <p>No records yet.</p> /} */}
                                        {/* <div class="limitations-button">
                                            <button>Add Records</button>
                                        </div> */}
                                        <ListLimitations></ListLimitations>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Templates;