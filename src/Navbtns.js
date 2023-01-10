import React from 'react';
import { Link } from "react-router-dom";

function Navbtn({ whereto }) {

  return (
        <Link
        style={{
          color:'rgb(235, 140, 31)',
          marginRight:'2rem',
          fontSize: '1.2rem',
          fontWeight: '600',

          
        }}
        to={'/'} className="navbarbtn">{ whereto }</Link>

  );
};

export default Navbtn;


