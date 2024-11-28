import React, { useState } from "react";

// Example Data
const ridesData = [
  // Your rides data here...
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  {
    time: "Today 07:21 PM",
    type: "Mini",
    crn: "468975081",
    from: "13-15, Ravindra Tagore Nagar Main Road, P&T Colony",
    to: "TNR Golden Mile, Neotown, Electronic City, Bengaluru",
    status: "completed",
    driverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1t5qQTGY4iSqqDmeL2xbmcoUjgtKa8aC9g&s", // Replace with actual image URL
  },
  
];

const ITEMS_PER_PAGE = 10;

const YourRides = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(ridesData.length / ITEMS_PER_PAGE);

  // Get the data for the current page
  const currentRides = ridesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers for Previous and Next buttons
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Your Rides
      </h1>
      <ul className="space-y-4">
        {currentRides.map((ride, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg"
          >
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-800">
                {ride.time}
              </p>
              <p className="text-sm text-gray-600">
                {ride.type} . CRN {ride.crn}
              </p>
              <p className="flex items-center text-sm text-gray-600 mt-2">
                <span className="text-green-500 mr-2">●</span> {ride.from}
              </p>
              <p className="flex items-center text-sm text-gray-600 mt-1">
                <span className="text-red-500 mr-2">●</span> {ride.to}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={ride.driverImg}
                alt="Driver"
                className="w-12 h-12 rounded-full mb-2"
              />
              <span className="bg-green-100 text-green-500 text-xs font-semibold px-2 py-1 rounded">
                {ride.status}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Show pagination controls only if there are multiple pages */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-200 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
            }`}
          >
            Previous
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-gray-200 rounded ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default YourRides;
