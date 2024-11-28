import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from '../Title/Title';
import Review from '../CarPartnership/Review';

const Reviews = () => {
  const initialReviews = [
    {
      id: 1,
      author: 'John Doe',
      rating: 'Very Good', // Changed to string for readability
      comment: 'Great experience! Will definitely rent again.',
      date: 'September 15, 2023',
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 'Excellent',
      comment: 'Excellent service and well-maintained bikes.',
      date: 'September 12, 2023',
    },
    {
      id: 3,
      author: 'Alice Brown',
      rating: 'Good',
      comment: 'Good bikes, but the service could be better.',
      date: 'September 10, 2023',
    },
    {
      id: 4,
      author: 'Bob Johnson',
      rating: 'Very Good',
      comment: 'Very convenient and affordable.',
      date: 'September 8, 2023',
    },
  ];

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : initialReviews;
  });

  const [newReview, setNewReview] = useState({ author: '', rating: '', comment: '' });
  const [errors, setErrors] = useState({ author: '', rating: '', comment: '' });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newReview.author) {
      newErrors.author = 'Author name is required';
    }
    if (!newReview.rating) {
      newErrors.rating = 'Rating is required';
    }
    if (!newReview.comment) {
      newErrors.comment = 'Comment is required';
    }
    return newErrors;
  };

  const handleAddReview = () => {
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ author: '', rating: '', comment: '' });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-2 md:py-4">
      <div className="container mx-auto shadow-lg">
        <Review />

        {/* Add Review Form */}
        <div className="mt-8 p-6 shadow-sm bg-orange-50 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center capitalize">Add Your Review</h3>
          <div className="mb-4">
            <label className="block mb-2 text-lg lg:text-xl font-medium">Name<span className='text-red-700 px-1'>*</span></label>
            <input
              type="text"
              name="author"
              value={newReview.author}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded md:text-lg"
            />
            {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
          </div>

          {/* Rating Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-lg lg:text-xl font-medium">Rating<span className='text-red-700 px-1'>*</span></label>
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded md:text-lg"
            >
              <option value="">Select Rating</option>
              <option value="Good">Excellent</option>
              <option value="Very Good">Very Good</option>
              <option value="Excellent">Good</option>
              <option value="Average">Average</option>
              <option value="Belowaverage">Below Average</option>
            </select>
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-lg lg:text-xl font-medium">Comment<span className='text-red-700 px-1'>*</span></label>
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded md:text-lg"
            ></textarea>
            {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
          </div>

          <div className='text-center'>
            <button
              onClick={handleAddReview}
              className="bg-orange-400 hover:bg-orange-500 text-xl font-medium text-white text-center p-2 px-6 rounded transition-colors"
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
