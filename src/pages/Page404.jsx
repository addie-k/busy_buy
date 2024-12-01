import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-200 text-gray-800 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center border border-gray-300">
        {/* 404 Heading */}
        <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Page Not Found</h2>

        {/* Error Message */}
        <p className="text-gray-600 mb-6">
          Oops! The page <code className="bg-gray-100 text-purple-700 px-2 py-1 rounded">{location.pathname}</code> does not exist.
        </p>

        {/* Back to Home Button */}
        <button
          className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Page404;
