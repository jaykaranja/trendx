import React from 'react'
import Navbtns from './Navbtns';

function Navbar() {
  return (
    <div className='body'>
      <div className='navbar'>
          <div className='navbar-brand'>
              <h2 className='brand-name'>TrendX</h2>
          </div>
          <div className='burger'>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div className='navbar-btns'>
            <Navbtns whereto="Home" />
            <Navbtns whereto="Your List" />
            <Navbtns whereto="About Us" />
            <Navbtns whereto="FAQS" />
          </div>
      </div>
    </div>
  );
};

export default Navbar;