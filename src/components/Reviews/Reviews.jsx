import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const initialReviews = [
    {
      id: 1,
      author: 'John Doe',
      rating: 4,
      comment: 'Great experience! Will definitely rent again.',
      date: 'September 15, 2023',
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 5,
      comment: 'Excellent service and well-maintained bikes.',
      date: 'September 12, 2023',
    },
    {
      id: 3,
      author: 'Alice Brown',
      rating: 3,
      comment: 'Good bikes, but the service could be better.',
      date: 'September 10, 2023',
    },
    {
      id: 4,
      author: 'Bob Johnson',
      rating: 4,
      comment: 'Very convenient and affordable.',
      date: 'September 8, 2023',
    },
  ];

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : initialReviews;
  });

  const [newReview, setNewReview] = useState({ author: '', rating: 0, comment: '', date: '' });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: name === 'rating' ? parseInt(value) : value });
  };

  const handleAddReview = () => {
    if (newReview.author && newReview.rating && newReview.comment && newReview.date) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ author: '', rating: 0, comment: '', date: '' });
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
    <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Customer Reviews</h2>

        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-r from-purple-600 via-orange-400  p-6 rounded-lg shadow-md text-white transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-xl font-semibold mb-2">{review.author}</div>
              <div className="text-yellow-300 mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <i key={index} className="fas fa-star"></i>
                ))}
              </div>
              <p>{review.comment}</p>
              <p className="text-gray-200 text-sm mt-4">{review.date}</p>
            </div>
          ))}
        </Slider>

        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add a Review</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={newReview.author}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating</label>
            <input
              type="number"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              min="1"
              max="5"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Comment</label>
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={newReview.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleAddReview}
            className="bg-blue-500 text-white text-center p-2 rounded hover:bg-blue-600 transition-colors text-center"
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
