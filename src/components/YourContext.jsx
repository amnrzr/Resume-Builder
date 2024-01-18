// YourContext.js

// Import necessary modules from React
import React, { createContext, useState, useContext } from 'react';

// Import components from specified paths
import Resume1 from './Details/resume1';
import Details from './Details/Details';
import Home from './Home/Home';

// Create a new context named YourContext
const YourContext = createContext();

// Create a provider component for YourContext
const YourProvider = ({ children }) => {
    // Define state variables using the useState hook
    const [pageno, setPage] = useState(0);

    // Render the provider with the provided value for the context
    return (
        <YourContext.Provider value={{ pageno, setPage }}>
            {/* Render child components */}
            <Resume1 />
            <Details />
            <Home />
        </YourContext.Provider>
    );
};

// Custom hook to easily access the YourContext values
const useYourContext = () => {
    // Use the useContext hook to get the current context values
    const context = useContext(YourContext);

    // If the context is not available, throw an error
    if (!context) {
        throw new Error('useYourContext must be used within a YourProvider');
    }

    // Return the context values
    return context;
};

// Export the provider and custom hook for external usage
export { YourProvider, useYourContext };
