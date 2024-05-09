import React from 'react';
import { Link } from 'react-router-dom';


const title = "More Than 50,000 Customers";

const desc = "With our app enjoy your time!";

const desc1 = "Just download & install & start to being an artist!";


const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Canada',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Denmark',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Turkiye',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Brazil',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Eqypt',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Australia',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Russia',
    },
];


const LocationSpread = () => {
    return <div className="clients-section style-2 padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <p>{desc1}</p>
            </div>

            {/* main content */}
            <div className="section-wrapper">
                <div className="clients">
                    {
                        clientsList.map((val, i) => (
                            <div key={i} className="client-list">
                                <Link to="/sign-up" className="client-content"
                                    style={{
                                        border: '1px solid #ffffff', width: '95px',
                                        text: 'center', boxShadow: '0px 0px 10px rgb(255,191,0)',
                                    }}>
                                    <span>{val.text}</span>
                                </Link>
                                <div className="client-thumb">
                                    <img src={val.imgUrl} alt="" />

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    </div>;

};

export default LocationSpread