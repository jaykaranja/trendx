import React, { useState, useEffect } from 'react';
import Navbtns from './Navbtns';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Navbar() {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const checkNavigationStatus = () => {
      const { history } = window;

      const canGoBack = history.state?.idx != 0;
      const canGoForward = history.state?.idx < history.length - 1;

      console.log(history.length)
      console.log(history.state)

      setCanGoBack(canGoBack);
      setCanGoForward(canGoForward);
    };

    window.addEventListener('popstate', checkNavigationStatus);
    checkNavigationStatus();

    return () => {
      window.removeEventListener('popstate', checkNavigationStatus);
    };
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  return (
    <>
      <div className="layout">
        <div className="navbar">
          <div className="navbar-brand">
            <h2 className="brand-name">MovieMania</h2>
          </div>
          <div className="burger">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="navbar-btns">
            <Navbtns whereto="Quick search" />
            <Navbtns whereto="My list" />
            <Navbtns whereto="Help" />
            <i
              className="navbar-btn fa-regular fa-user"
              style={{
                color: 'rgb(235, 140, 31)',
                marginRight: '2rem',
                fontSize: '1.2rem',
                fontWeight: '600',
              }}
            ></i>
          </div>
        </div>
        <div className="sysnav-icons">
          <div className="sysnav-icon">
            <button
              className={`fa-solid fa-angle-left${canGoBack ? '' : ' disabled'}`}
              disabled={!canGoBack}
              onClick={handleBack}
            ></button>
          </div>
          <div className="sysnav-icon">
            <button
              className={`fa-solid fa-angle-right${canGoForward ? '' : ' disabled'}`}
              disabled={!canGoForward}
              onClick={handleForward}
            ></button>
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Navbar;
