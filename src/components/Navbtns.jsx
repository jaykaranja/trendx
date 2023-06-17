import React from 'react';
import { Link } from "react-router-dom";

function Navbtn({ whereto }) {

  return (
        <Link to={'/'} className="navbar-btn">{ whereto }</Link>

  );
};

export default Navbtn;


