import React from 'react'
import { Link } from 'react-router-dom';

const btnText = "Sign up for Free!";
const title = "Shop & Learn Anytime, Anywhere!";
const desc = "Download & Install & Start!"

const AppSection = () => {
    return (
        <div className="app-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/sign-up" className="lab-btn mb-4">{btnText}
                    </Link>
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>

                </div>
                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li>
                            <a href="#"><img src="/src/assets/images/app/01.jpg" alt=""
                                style={{
                                    width: '100%',
                                    transition: 'transform 0.5s',
                                    // Adding a transition for smooth animation
                                }}
                                onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }}
                                // Zoom in on hover
                                onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }}
                            // Reset scale on mouse out
                            /></a>
                        </li>
                        <li>
                            <a href="#"><img src="/src/assets/images/app/02.jpg" alt=""
                                style={{
                                    width: '100%',
                                    transition: 'transform 0.5s',
                                }}
                                onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }} // Zoom in on hover
                                onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }}
                            /></a>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default AppSection