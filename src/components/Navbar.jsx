import React from 'react'
import Navbtns from './Navbtns';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Navbar() {
  return (
    <>
      <div className='layout'>
        <div className='navbar'>
            <div className='navbar-brand'>
                <h2 className='brand-name'>MovieMania</h2>
            </div>
            <div className='burger'>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className='navbar-btns'>
              <Navbtns whereto="Quick search" />
              <Navbtns whereto="My list" />
              <Navbtns whereto="Help" />
              <i className='navbar-btn fa-regular fa-user' style={{
                color:'rgb(235, 140, 31)',
                marginRight:'2rem',
                fontSize: '1.2rem',
                fontWeight: '600',
              }}></i>
            </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;