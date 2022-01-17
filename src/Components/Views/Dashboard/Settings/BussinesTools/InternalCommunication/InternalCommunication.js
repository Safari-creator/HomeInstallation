import React from 'react'
import SelectTag from '../../../../../Reusable/Select/Select'
import "./InternalCommunication.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function InternalCommunication() {
    return (
        <div className="flex-row space-evenly">
            <div>
                <span className="free-trial-text op6">Communication failure notifications</span>
            </div>
            <div className="marg-top30">
                <SelectTag />
            </div>
            <div>
                <span className="op6 font9">When an email or text fails to deliver to <br /> a recipient, we can either notify all your <br /> company admins via in-app messages <br /> (i.e. chat bubble) or send an email to < br /> specified address(es).</span>
            </div>
        </div>
    )
}

export default InternalCommunication
