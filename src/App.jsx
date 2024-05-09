import React from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'; // Importing the specific icon you need
import './App.css';
import NavItems from './components/NavItems';
import Footer from './components/Footer';

function App() {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
      <button onClick={top} className="topbtn">
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </>
  );
}

export default App;
