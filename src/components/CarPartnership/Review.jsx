import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Title from '../Title/Title';

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
    {
      reviwerName: "john",
      place: "Mumbai",
      review: "Fantastic experience! The service is smooth and reliable. Would recommend it to anyone who is looking to get their car transported safely.",
      value: 5,
    },
    {
      reviwerName: "rajesh",
      place: "Coimbatore",
      review: "Great customer support! My car was delivered on time and in excellent condition. They really care about the safety of the vehicle.",
      value: 4,
    },
    {
      reviwerName: "john",
      place: "Mumbai",
      review: "Fantastic experience! The service is smooth and reliable. Would recommend it to anyone who is looking to get their car transported safely.",
      value: 5,
    },
    {
      reviwerName: "rajesh",
      place: "Coimbatore",
      review: "Great customer support! My car was delivered on time and in excellent condition. They really care about the safety of the vehicle.",
      value: 4,
    },
    {
      reviwerName: "john",
      place: "Mumbai",
      review: "Fantastic experience! The service is smooth and reliable. Would recommend it to anyone who is looking to get their car transported safely.",
      value: 5,
    },
    {
      reviwerName: "rajesh",
      place: "Coimbatore",
      review: "Great customer support! My car was delivered on time and in excellent condition. They really care about the safety of the vehicle.",
      value: 4,
    },
  ];

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  const currentReviews = reviewList.slice(indexOfFirstReview, indexOfLastReview);

  const handleNext = () => {
    if (currentPage < Math.ceil(reviewList.length / reviewsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [expandedReviews, setExpandedReviews] = useState(
    new Array(reviewList.length).fill(false)
  );

  const toggleExpanded = (index) => {
    const newExpandedReviews = [...expandedReviews];
    newExpandedReviews[index] = !newExpandedReviews[index];
    setExpandedReviews(newExpandedReviews);
  };

  return (
    <div className="md:my-6">
      {/* Review Title */}
      <Title title="Verified Customer Reviews" />

      {/* Reviews List */}
      <div className=' my-6 md:my-10'>
      <div className="grid grid-cols-2 md:gap-4 lg:flex lg:justify-center lg:items-center pb-3 w-full md:px-6 xl:w-3/4 mx-auto ">
        {currentReviews.map((item, index) => (
          <div
            key={index}
            className="m-1 border-2 border-gray-500 p-3 rounded-2xl flex flex-col  shadow-sm shadow-fuchsia-300 bg-fuchsia-100 "
          >
            <div style={{ flex: '1' }}>
              <h1 className="text-xl font-bold capitalize">{item.reviwerName}</h1>
              <h3 className="mb-2 text-lg text-muted text-gray-500">{item.place}</h3>
              <p
                style={{
                  maxHeight: expandedReviews[index] ? 'none' : '4.5rem',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                {expandedReviews[index] ? item.review : truncateText(item.review, 100)}
              </p>
              <button
                className="text-violet-900 underline mt-2"
                onClick={() => toggleExpanded(index)}
              >
                {expandedReviews[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
            <div className="rating text-center p-2">
              <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating name="read-only" value={item.value} readOnly />
              </Box>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1} // Disable previous button on the first page
          className={`bg-fuchsia-900 hover:bg-fuchsia-950 text-white w-32 text-xl font-medium px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage >= Math.ceil(reviewList.length / reviewsPerPage)} // Disable next button on last page
          className={`bg-fuchsia-900 hover:bg-fuchsia-950 text-white w-32 text-xl font-medium  px-4 py-2 ${currentPage >= Math.ceil(reviewList.length / reviewsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>

      </div>
      
    </div>
  );
};

export default Review;
