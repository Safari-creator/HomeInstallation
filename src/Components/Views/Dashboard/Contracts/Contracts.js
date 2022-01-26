import React, { useRef, useState, useEffect } from 'react';
import './Contracts.css';
// import { useReactToPrint } from 'react-to-print';
import ContractDetails from './ContractDetails';
import ReactToPdf from 'react-to-pdf';
import Modal from 'react-modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { ModalTitle } from 'react-bootstrap';
import { BASE_API_URL } from '../../../../Constats/Constats';
import axios from 'axios';

const Contracts = () => {

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [12, 10]
    };

    const [tab, setTab] = React.useState(0)
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileButton, setFileButton] = useState(true)
    const [addContractModal, setAddContractModal] = useState(false)
    const [editContractModal, setEditContractModal] = useState(false)
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'))
    const [oldContract, setOldContract] = useState('')
    const [newContract, setNewContract] = useState('')
    const [contractArray, setContractArray] = useState([])
    const [selectedContract, setSelectedContract] = useState()



    useEffect(async () => {
        const response = await axios.get(BASE_API_URL + 'contracts')
        let dataArray = []

        dataArray = response.data.data.filter(item => item.user_id == userId)

        setContractArray(dataArray)
        setOldContract(dataArray[0].contract_summary)
        setSelectedContract(dataArray[0].id)
    }, [])


    useEffect(() => {
        var image = document.getElementById('output');
        image.style.display = 'none'
    }, [])

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0].name);
        console.log(event.target.files[0]);
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
        image.style.display = 'block'
    }

    const componentRef = useRef();
    // const handlePrint = useReactToPrint({
    // content: () => componentRef.current,
    // });


    const handleSelect = (e) => {
        let contract = contractArray.filter(item => item.id == e.target.value)
        setOldContract(contract[0].contract_summary)
        setSelectedContract(e.target.value)
    }

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

    async function addContracts() {
        if (!newContract)
            return

        const body = {
            contract_summary: newContract,
            signature: '',
            user_id: userId
        }
        const response = await axios.post(BASE_API_URL + 'contracts', body)

        if (response.statusText == "Created") {
            setAddContractModal(!addContractModal)
            window.location.reload()
        }
    }


    async function editContracts() {
        if (!newContract)
            return

        const body = {
            contract_summary: newContract,
            signature: '',
            user_id: userId
        }
        const response = await axios.put(BASE_API_URL + 'contracts/' + selectedContract, body)

        if (response.statusText == "OK") {
            setEditContractModal(!editContractModal)
            window.location.reload()
        }
    }

    async function deleteContract() {
        const response = await axios.delete(BASE_API_URL + 'contracts/' + selectedContract)

        if (response.statusText == "OK") {
            window.location.reload()
        }
    }

    return (
        <div className="extrapages-section contracts-page">
            <section className="body-part">
                <div class="body-part-two bot50">
                    <div class="part-one-left flex space-between contracts">
                        <select name="selectList" class="select-list" onChange={(e) => handleSelect(e)}>
                            {
                                contractArray.map((item, index) => {
                                    return (
                                        <option value={item.id}>Contract {index + 1}</option>
                                    )
                                })
                            }
                        </select>
                        {/* {/ for printing /}
                        {/ <button class="blue-button" onClick={handlePrint}>Print</button> /} */}
                        <ReactToPdf targetRef={ref} filename="contract.pdf" options={options} x={0.4} y={0.3} scale={0.9}>
                            {({ toPdf }) => (
                                <button class="blue-button" onClick={() => {
                                    toPdf()
                                    setFileButton(false)
                                }}>Print</button>
                            )}
                        </ReactToPdf>
                    </div>
                    <div class="part-one-left column top20"  >
                        {/* <div class="flex width40 top-bot-40">
                            <p>Contract {tab + 1}:</p>
                        </div> */}
                        {/* {/ for printing /}
                        {/ <ContractDetails ref={componentRef} /> /} */}
                        <div className='edit-contracts'>
                            <span className='fa fa-plus' onClick={() => setAddContractModal(true)} style={{ marginRight: 15, cursor: 'pointer', fontSize: 18 }} />
                            <span className='fa fa-pen' onClick={() => setEditContractModal(true)} style={{ marginRight: 15, cursor: 'pointer', fontSize: 18 }} />
                            <span className='fa fa-close' onClick={deleteContract} style={{ marginRight: 8, cursor: 'pointer', fontSize: 18 }} />
                        </div>
                        <div ref={ref}>
                            <ContractDetails contract={oldContract} />
                            <div class="part-one-left flex top40">
                                <div class="flex width200 flex-column align-items-start">
                                    <div className='d-flex mb-3'>
                                        <p style={{ marginRight: 10 }}>Signature:</p>
                                        {fileButton && <><span onClick={() => {
                                            document.querySelector('#signature').click()
                                        }} className='file-choose'>Choose File</span><input style={{ display: 'none' }} id="signature" type="file" onChange={handleFileSelect} /></>}
                                    </div>
                                    <div><p><img src="" id="output" class="signature-image" /></p></div>
                                </div>
                            </div>
                        </div>
                        <Modal isOpen={addContractModal}
                            onRequestClose={() => setAddContractModal(!addContractModal)}
                            style={customStyles}
                            contentLabel="Example Modal"
                            id="modal-add-Contracts">
                            <ModalHeader closeButton onClick={() => setAddContractModal(!addContractModal)}>
                                <ModalTitle className='d-flex w-100 justify-content-center'>Add Contract</ModalTitle>
                            </ModalHeader>
                            <div class="modal-body">
                                <div class="modal-form">
                                    <textarea style={{ resize: 'none' }} onChange={(e) => setNewContract(e.target.value)}></textarea>
                                    <div class="form-buttons">
                                        <button onClick={() => addContracts()} className='add-contract-btn'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                        <Modal isOpen={editContractModal}
                            onRequestClose={() => setEditContractModal(!editContractModal)}
                            style={customStyles}
                            contentLabel="Example Modal"
                            id="modal-add-Contracts">
                            <ModalHeader closeButton onClick={() => setEditContractModal(!editContractModal)}>
                                <ModalTitle className='d-flex w-100 justify-content-center'>Edit Contract</ModalTitle>
                            </ModalHeader>
                            <div class="modal-body">
                                <div class="modal-form">
                                    <textarea style={{ resize: 'none' }} onChange={(e) => setNewContract(e.target.value)}>{oldContract}</textarea>
                                    <div class="form-buttons">
                                        <button onClick={() => editContracts()} className='add-contract-btn'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                    </div>
                    <div class="part-two-content">
                    </div>
                    {/* <div class="top175 center">
                        <button class="yellow-button">Save</button>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Contracts;