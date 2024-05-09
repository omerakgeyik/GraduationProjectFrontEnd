import React, { useState } from 'react';

const Rating = () => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (starCount) => {
        setSelectedStars(starCount);
    };

    return (
        <div className='rating'>
            {[1, 2, 3, 4, 5].map((index) => (
                <i
                    key={index}
                    className={`icofont-ui-rating ${index <= selectedStars ? 'active' : ''}`}
                    onClick={() => handleStarClick(index)}
                    style={{ cursor: 'pointer', color: index <= selectedStars ? '#FFD700' : '' }}
                ></i>
            ))}
        </div>
    );
};

export default Rating;
