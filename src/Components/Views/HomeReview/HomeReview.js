import React from 'react'
import img1 from '../../../Assets/images/review-img1.jpg'
import ReviewStars from '../../../Assets/images/review-stars.png'
import './HomeReview.css'

function HomeReview({image, name}) {
    return (
        <div className="review-container">
            <div className="review-image-container">
                <img className="review-image" src={image} alt="image" width="125" />
            </div>
            <img src={ReviewStars} alt="stars" width="150" />
            <div className="review-text">
            “I really like the fact that I can go to the Property <br /> without my clipboard and complete the whole <br /> inspection with Aurora”. <br />
            <b>~{name}</b>
            </div>

            
        </div>
    )
}

export default HomeReview
