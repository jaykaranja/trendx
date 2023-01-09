import React from 'react'

function Navbar() {
  return (
    <div className='body'>
      <div className='navbar'>
          <div className='navbar-brand'>
              <h2 className='brand-name'>TrendX</h2>
          </div>
          <div className='navbar-btns'>
              <button className='navbar-btn'>Home</button>
              <button className='navbar-btn'>My List</button>
              <button className='navbar-btn'>Donate</button>
              <button className='navbar-btn'>FAQ</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar