import React, { useRef, useState, useEffect } from 'react';
import './Contracts.css';
// import { useReactToPrint } from 'react-to-print';
import ContractDetails from './ContractDetails';
import ReactToPdf from 'react-to-pdf';

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

    React.useEffect(() => {
        console.log(tab)
    }, [tab])

    const handleSelect = (e) => {
        console.log(e.target.value)
        if (e.target.value == "1") {
            setTab(0)
        }
        if (e.target.value == "2") {
            setTab(1)
        }
        if (e.target.value == "3") {
            setTab(2)
        }
        if (e.target.value == "4") {
            setTab(3)
        }
        if (e.target.value == "5") {
            setTab(4)
        }
        if (e.target.value == "6") {
            setTab(5)
        }
        if (e.target.value == "7") {
            setTab(6)
        }
    }

    return (
        <div className="extrapages-section">
            <section className="body-part">
                <div class="body-part-two bot50">
                    <div class="part-one-left flex space-between contracts">
                        <select name="selectList" class="select-list" onChange={(e) => handleSelect(e)}>
                            <option value="1" >Contract 1</option>
                            <option value="2" >Contract 2</option>
                            <option value="3" >Contract 3</option>
                            <option value="4" >Contract 4</option>
                            <option value="5" >Contract 5</option>
                            <option value="6" >Contract 6</option>
                            <option value="7" >Contract 7</option>
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
                        <div class="flex width40 top-bot-40">
                            <p>Contract {tab + 1}:</p>
                        </div>
                        {/* {/ for printing /}
                        {/ <ContractDetails ref={componentRef} /> /} */}
                        <div ref={ref}>
                            <ContractDetails />
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
                        <div style={{ display: 'none' }}>
                            <div style={{ width: '740px' }}>
                                <ContractDetails />
                                <div><p><img src="" id="output" class="signature-image" /></p></div>
                            </div>
                        </div>
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