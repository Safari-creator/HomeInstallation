import React from 'react';

function Reviews() {
    return (
        <div className="onlineScheduler-section">
            <div className="onlineScheduler-wrapper">
                <input type="checkbox" value="checkbox" />
                <p className="content">Enable Aurora Reviews</p>
                <p className="sub-content">{"Allow agents and clients to leave an in-platform review (0-5 stars with optional comment) for their inspection. These reviews help your rankings on our directory pages and help your Google rankings. Several upcoming agent-facing features will also rely on good reviews!"}
                    {"The ability to leave a review will be available in the client portal or through a notification using the  REVIEW_LINK placeholder."}</p>
            </div>
        </div>
    )
}

export default Reviews
