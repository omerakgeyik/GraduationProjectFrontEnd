import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "Why Choose Us";
const title = "Become an Artist";
const desc = "Take courses on your any device with our app & learn all about art what you want!";
const desc1 = "Just download & install & start to learn!";
const btnText = "Apply Now";

const countList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '10500',
        text: 'Artist Enrolled',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '30',
        text: 'Certified Courses',
    },
    {
        iconName: 'icofont-notification',
        count: '100',
        text: 'Rewards and Gift Cards',
    },
];

const AboutUs = () => {
    return <div className="instructor-section style-2 padding-tb section-bg-ash">
        <div className="container">
            <div className="section-wrapper">
                <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
                    <div className="col">
                        {
                            countList.map((val, i) => (
                                <div key={i} className="count-item">
                                    <div className="count-inner">
                                        <div className="count-icon">
                                            <i className={val.iconName}></i>

                                        </div>
                                        <div className="count-content">
                                            <h2>
                                                <span className="count"><CountUp end={val.count} /></span>
                                                <span>+</span>
                                            </h2>
                                            <p>{val.text}</p>

                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className="col">
                        <div className="instructor-content">
                            <span className="subtitle">{subTitle}</span>
                            <h2 className="title">{title}</h2>
                            <p>{desc}</p>
                            <p>{desc1}</p>
                            <Link to="/sign-up" className="lab-btn">{btnText}</Link>

                        </div>

                    </div>

                    <div className="col">
                        <div className="instructor-thumb"
                            style={{
                                border: '7px inset #ffffff',
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                //boxShadow: '0px 0px 15px #ffffff',
                                marginLeft: 'auto',
                                overflow: 'hidden',
                            }}>
                            <img src="/src/assets/images/instructor/bobross.png" alt=""
                                style={{
                                    width: '100%',
                                    transition: 'transform 0.5s', // Adding a transition for smooth animation
                                }}
                                onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }} // Zoom in on hover
                                onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }} // Reset scale on mouse out
                            />

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>;
};

export default AboutUs