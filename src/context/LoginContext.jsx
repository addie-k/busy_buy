import { createContext, useState, useContext } from "react";

// Create the Login Context
const IsLoggedIn = createContext(false);
// Custom Hook to consume Login Context
const useLoginContextValues = () => {
    const values = useContext(IsLoggedIn);
    return values;
};
// LoginContextProvider Component
const LoginContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Function to toggle login state
    const toggleLogin = () => {
        setIsLoggedIn((prevState) => !prevState);
    };
    return (
            <IsLoggedIn.Provider value={{ isLoggedIn, toggleLogin }}>
                {children}
            </IsLoggedIn.Provider>
    );
};

export { IsLoggedIn, useLoginContextValues };
export default LoginContextProvider;
