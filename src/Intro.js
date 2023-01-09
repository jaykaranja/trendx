import React from 'react'

function Intro() {
  return (
    <div className='intro'>
        <div className='intro-content'>
            <h1>TrendX</h1>
            <h3>Where your love of movies is appreciated the most.</h3>
            <br></br>
            <div className='introbtns'>
                <button className='introbtn'>Today's Releases</button>
                <button className='introbtn'>World's Top 10</button>
            </div>
        </div>
        <div className='intro-fadebottom'></div>
    </div>
    
  )
}

export default Intro