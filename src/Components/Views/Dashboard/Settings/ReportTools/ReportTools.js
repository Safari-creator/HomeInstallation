import React from 'react';
import './ReportTools.css';

const ReportTools = () => {
    return(
        <div className="reportOptions-section">
            <div className="reportOptions-wrapper">
                <div className="section">
                    <input type="checkbox" value="Paneer" />
                    <p className="content">Assign Inspectors to Reports</p>
                    <p className="sub-content">If enabled, you can show specific inspectors on each report instead of showing all that are assigned to the inspection. This ensures the properly-credentialed inspectors are on the right reports, including signatures. Report assignments default to any inspector that actively edits reports on the mobile app.</p>
                </div>
                <div className="section">
                    <input type="checkbox" value="Paneer" />
                    <p className="content">Allow 360 Photos</p>
                    <p className="sub-content">If enabled, photos taken with a 360 camera or made using panorama mode will be displayed with a special viewer within reports.</p>
                </div>
                <div className="section">
                    <input type="checkbox" value="Paneer" />
                    <p className="content">Enable Re-Inspections</p>
                    <p className="sub-content">If enabled,  you'll be able to create a re-inspection report based on an already completed report. How to use re-inspections.</p>
                </div>
            </div>
        </div>
    )
}

export default ReportTools;