import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLoginContextValues } from "../context/LoginContext";
import Toast from "./Toast";
import users from "../data/userData";

const Nav = () => {
  const { isLoggedIn, toggleLogin } = useLoginContextValues();
  const [modal, toggleModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [toastMessage, setToastMessage] = useState("");
  const [cart,setCart] = useState([])
  const [orders,setOrders]= useState([])

  useEffect(() => setIsSignUp(false), [modal]);

  const handleCloseModal = () => {
    toggleModal(false);
  };

  const toggleForm = () => {
    setIsSignUp(prevState => !prevState);
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    if (data.username !== undefined) {
      const formData = {
        email: data.email,
        password: data.password,
        username: data.username
      };
      users.push(formData)
      setToastMessage('User Registered.');
    } else {
      const filteredUser = users.filter(user => data.email == user.email && data.password == user.password).shift()
      if (filteredUser) {
        // console.log(filteredUser)
        toggleLogin();
        setToastMessage('User Logged in.');
      } else setToastMessage('Invalid credentials.')


    }
    setEmail('');
    setUsername('');
    setPassword('');
    toggleModal(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    toggleLogin();
    navigate('/')
    setToastMessage('User Logged out.');
  };

  return (
    <>
      <Toast message={toastMessage} setToastMessage={setToastMessage} />

      <nav className=" fixed top-0 z-40 w-full flex justify-between items-center bg-purple-700 text-white shadow-md p-4">
        <p className="text-3xl font-bold hover:scale-110 transition-transform duration-300 ml-4">
          <Link to="/" className="text-white">
            Busy Buy
          </Link>
        </p>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-lg font-semibold mr-10">
          <p className="hover:underline hover:text-purple-200 transition duration-200">
            <Link to="/">Home</Link>
          </p>

          {isLoggedIn ? (
            <>
              <p className="hover:underline hover:text-purple-200 transition duration-200">
                <Link to="/cart">Cart</Link>
              </p>
              <p className="hover:underline hover:text-purple-200 transition duration-200">
                <Link to="/orders">Orders</Link>
              </p>
              <p
                className="hover:underline hover:text-purple-200 transition duration-200 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </p>
            </>
          ) : (
            <p
              className="hover:underline hover:text-purple-200 transition duration-200 cursor-pointer"
              onClick={() => toggleModal(true)}
            >
              Sign In
            </p>
          )}
        </div>

        {/* Sign-In / Sign-Up Modal */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-bold text-purple-800">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>

              {/* Form */}
              <form
                className="mt-4 space-y-4"
                onSubmit={(e) =>
                  isSignUp
                    ? handleSubmit(e, { username, email, password })
                    : handleSubmit(e, { email, password })
                }
              >
                {/* Username Field (for Sign Up only) */}
                {isSignUp && (
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-black"
                      placeholder="Enter your username"
                      value={username} // Bind state to input
                      onChange={(e) => setUsername(e.target.value)} // Handle input change
                      disabled={!isSignUp} // Only show for signup
                    />
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-black"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Handle email input change
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-black"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Handle password input change
                  />
                </div>

                {/* Action Button */}
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  {isSignUp ? (
                    <>
                      Already have an account?{" "}
                      <span
                        className="text-purple-600 font-medium hover:underline cursor-pointer"
                        onClick={toggleForm}
                      >
                        Sign In
                      </span>
                    </>
                  ) : (
                    <>
                      Don't have an account?{" "}
                      <span
                        className="text-purple-600 font-medium hover:underline cursor-pointer"
                        onClick={toggleForm}
                      >
                        Sign Up
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
      <Outlet context={{cart,setCart,toastMessage, setToastMessage, orders,setOrders,isLoggedIn}}/>
    </>
  );
};

export default Nav;
