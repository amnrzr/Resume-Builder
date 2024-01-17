// YourContext.js
import React, { createContext, useState, useContext } from 'react';
import Resume1 from './Details/resume1';
import Details from './Details/Details';
import Home from './Home/Home';
const YourContext = createContext();

const YourProvider = ({ children }) => {
    const [pageno,setPage] =useState(0);

  return (
    <YourContext.Provider value={{ pageno, setPage }}>
<Resume1/>
<Details/>
<Home/>
    </YourContext.Provider>
  );
};

const useYourContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useYourContext must be used within a YourProvider');
  }
  return context;
};

export { YourProvider, useYourContext };
