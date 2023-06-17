import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-text'>
            TrendX is a film database app powered by TMDB API v3 used to see what films one can view using real-time charts
             to show the data. Bored for the weekend? Check out what movies you could binge to here. 
             <br></br><br></br>

             Developed with <i className="fa-sharp fa-solid fa-heart" style={{color:"red"}}></i> by <a href='https://jaykaranja.github.io'><span className='footerdata-piece'> <i className="fa-brands fa-github"></i> Jay</span></a>
        </div>
        <div className='footer-links'>
        <div className='footer-subtitle'>
        </div>
            <div className='link-divs'>
                <ul>
                    <li key={'Home'}>Home</li>
                    <li key={'FAQS'}>FAQS</li>
                    <li key={'Donate'}>Donate</li>
                    <li key={'Favs'}>Your Favourites</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer