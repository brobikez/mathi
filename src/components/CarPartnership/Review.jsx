import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Review = () => {
    const reviewList = [
        {
            reviwerName: "bharathi",
            place: "vandalur",
            review: "I’ve been part of this car partnership for six months now, and I couldn’t be happier. The team is proactive in managing bookings, and my car is always in good condition. It’s a win-win situation!",
            value: 3,
        },
        {
            reviwerName: "faysha",
            place: "Paris",
            review: "I love being part of this car partnership! The team is super supportive and genuinely cares about their partners. They handle everything from marketing to maintenance, so I don’t have to worry about a thing. Highly recommend!",
            value: 5,
        },
        {
            reviwerName: "pavithra",
            place: "Marina",
            review: "The car partnership program has been a fantastic opportunity for me. The marketing strategies used to promote my car were effective, and I saw results almost immediately. The support team is always just a call away!",
            value: 4,
        },
        {
            reviwerName: "mahesh",
            place: "chennai",
            review: "Joining this service was one of the best decisions I made for my car. The revenue has been consistent, and they keep everything transparent. I feel like a valued partner rather than just another owner.",
            value: 2,
        },
    ];

    // Function to truncate text if it's too long
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <>
            {/* Review */}
            <h1 className='text-xl md:text-2xl font-bold text-center p-6'>Verified Customer Reviews</h1>
            <div className='flex flex-wrap justify-center items-center pb-3'>
                {reviewList.map((item, index) => {
                    const [expanded, setExpanded] = useState(false);

                    return (
                        <div
                            style={{ width: '18rem', transition: 'height 0.3s ease' }} // Smooth transition for height
                            key={index}
                            className='m-1 border-2 border-gray-500 p-3 rounded-2xl flex flex-col'
                        >
                            <div style={{ flex: '1' }}> {/* Flex grow for proper alignment */}
                                <h1 className='text-xl font-bold capitalize'>{item.reviwerName}</h1>
                                <h3 className="mb-2 text-lg text-muted text-gray-500">{item.place}</h3>
                                <p 
                                    style={{ 
                                        maxHeight: expanded ? 'none' : '4.5rem', // Expandable max height
                                        overflow: 'hidden', // Hide overflowing text
                                        transition: 'max-height 0.3s ease' // Smooth transition
                                    }}
                                >
                                    {expanded ? item.review : truncateText(item.review, 100)}
                                </p>
                                <button
                                    className='text-blue-500 underline mt-2'
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    {expanded ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                            <div className="rating text-center p-2">
                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <Rating name="read-only" value={item.value} readOnly />
                                </Box>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Review;
