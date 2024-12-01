import React, { useEffect, useState } from "react";

const Toast = ({ message, setToastMessage }) => {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (message && message.trim() !== "") {
      setShowToast(true); 
      const hideTimeout = setTimeout(() => {
        setShowToast(false); 
      }, 2500);
      const removeTimeout = setTimeout(() => {
        setToastMessage(""); 
      }, 3000);
      return () => {
        clearTimeout(hideTimeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [message, setToastMessage]);

  if (!message || message.trim() === "") return null;

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg max-w-xs z-50 bg-gray-800 text-white 
      transition-all duration-500 min-w-[5rem]
      ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-1rem]"}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
