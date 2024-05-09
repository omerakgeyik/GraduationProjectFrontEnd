import React, { useState, useEffect } from 'react';
import Rating from '../components/Rating';
import reviewData from './reviews.json';
import descriptionData from './description.json';

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        // JSON dosyalarından verileri çekiyoruz ve state'e atıyoruz
        setReviews(reviewData);
        setDescription(descriptionData);
    }, []);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className="desc" onClick={() => setReviewShow(false)}>Description</li>
                <li className="rev" onClick={() => setReviewShow(true)}>Reviews</li>
            </ul>

            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                {reviewShow ? (
                    <div className="review-showing">
                        <ul className="content lab-ul">
                            {reviews.map((review, i) => (
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt={review.imgAlt} />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="client-review">
                            <div className="review-form">
                                <div className="review-title">
                                    <h5>Add a Review</h5>
                                </div>
                                <form action="action" className="row">
                                    <div className="col-md-4 col-12">
                                        <input type="text" name="name" id="name" placeholder="Full Name*" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <input type="email" name="email" id="email" placeholder="E-mail*" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="rating">
                                            <span className="me-2"> Your Rating </span>
                                            <Rating />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <textarea name="message" id="message" rows="8" placeholder="Type Here Your Review"></textarea>
                                    </div>

                                    {/* For uploading photo related to review */}

                                    <div className="col-md-12 col-12">
                                        <input type="file" onChange={handleFileChange} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="default-button">
                                            <span>Submit Review</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="description">
                        <div className="post-item">
                            <div className="post-thumb">
                                <img src={description.imgUrl} alt={description.imgAlt} />
                            </div>
                            <div className="post-content">
                                <ul className="lab-ul">
                                    {description.listItems && description.listItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p>{description.content}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Review;
