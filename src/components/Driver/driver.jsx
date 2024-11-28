import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data for Charts
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bitcoin Price ($)",
        data: [32000, 35000, 40000, 38000, 45000, 48000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const driverEarnings = {
    totalEarnings: 15200,
    monthlyEarnings: [1200, 1500, 1800, 2000, 2400, 3000],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  };

  const driverHistory = {
    totalRides: 520,
    completedRides: 480,
    canceledRides: 30,
    accidents: 10,
    monthlyRides: [50, 60, 70, 80, 90, 100],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  };

  

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed z-30 inset-y-0 left-0 transform bg-white w-64 shadow-lg transition-transform lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold p-4">CoinNexus</h1>
        <nav>
          <button
            className={`flex items-center py-2 px-4 w-full text-left ${
              activeSection === "dashboard" ? "bg-gray-200" : ""
            }`}
            onClick={() => {
              setActiveSection("dashboard");
              setSidebarOpen(false);
            }}
          >
            Dashboard
          </button>
          <button
            className={`flex items-center py-2 px-4 w-full text-left ${
              activeSection === "charts" ? "bg-gray-200" : ""
            }`}
            onClick={() => {
              setActiveSection("charts");
              setSidebarOpen(false);
            }}
          >
            Charts
          </button>
          <button
            className={`flex items-center py-2 px-4 w-full text-left ${
              activeSection === "history" ? "bg-gray-200" : ""
            }`}
            onClick={() => {
              setActiveSection("history");
              setSidebarOpen(false);
            }}
          >
            Driver History
          </button>
          <button
            className={`flex items-center py-2 px-4 w-full text-left ${
              activeSection === "earnings" ? "bg-gray-200" : ""
            }`}
            onClick={() => {
              setActiveSection("earnings");
              setSidebarOpen(false);
            }}
          >
            Driver Earnings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        {/* Centered Content */}
        <div className="w-full max-w-4xl">
          {/* Dashboard Section */}
          {activeSection === "dashboard" && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded p-6">
                  <h3 className="text-lg font-bold text-gray-700">
                    Overall Balance
                  </h3>
                  <p className="text-2xl font-bold text-green-500 mt-4">
                    $325,456.30
                  </p>
                </div>
                <div className="bg-white shadow rounded p-6">
                  <h3 className="text-lg font-bold text-gray-700">
                    Crypto Balance
                  </h3>
                  <p className="text-2xl font-bold text-blue-500 mt-4">
                    $43,345.23
                  </p>
                </div>
                <div className="bg-white shadow rounded p-6">
                  <h3 className="text-lg font-bold text-gray-700">
                    Legal Tender
                  </h3>
                  <p className="text-2xl font-bold text-orange-500 mt-4">
                    $499,000.34
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Charts Section */}
          {activeSection === "charts" && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Charts</h2>
              <div className="bg-white p-6 shadow rounded">
                <Line data={lineData} />
              </div>
            </div>
          )}

          {/* Driver History Section */}
          {activeSection === "history" && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">
                Driver History
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white shadow rounded p-6">
                  <h3 className="text-lg font-bold text-gray-700">
                    Total Rides
                  </h3>
                  <p className="text-2xl font-bold text-blue-500 mt-4">
                    {driverHistory.totalRides}
                  </p>
                </div>
                <Link to="/complete">
                  <div className="bg-white shadow rounded p-6">
                    <h3 className="text-lg font-bold text-gray-700">
                      Completed Rides
                    </h3>
                    <p className="text-2xl font-bold text-green-500 mt-4">
                      {driverHistory.completedRides}
                    </p>
                  </div>
                </Link>
                <Link to="/rides">
                  <div className="bg-white shadow rounded p-6">
                    <h3 className="text-lg font-bold text-gray-700">
                      Canceled Rides
                    </h3>
                    <p className="text-2xl font-bold text-red-500 mt-4">
                      {driverHistory.canceledRides}
                    </p>
                  </div>
                </Link>
                <div className="bg-white shadow rounded p-6">
                  <h3 className="text-lg font-bold text-gray-700">Accidents</h3>
                  <p className="text-2xl font-bold text-yellow-500 mt-4">
                    {driverHistory.accidents}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Driver Earnings Section */}
          {activeSection === "earnings" && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">
                Driver Earnings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white shadow rounded p-6">
                  <h3 className="text-lg font-bold text-gray-700">
                    Total Earnings
                  </h3>
                  <p className="text-2xl font-bold text-green-500 mt-4">
                    ${driverEarnings.totalEarnings}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Monthly Earnings
                </h3>
                <div className="bg-white p-6 shadow rounded">
                  <Bar
                    data={{
                      labels: driverEarnings.months,
                      datasets: [
                        {
                          label: "Earnings ($)",
                          data: driverEarnings.monthlyEarnings,
                          backgroundColor: "rgba(54, 162, 235, 0.8)",
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
