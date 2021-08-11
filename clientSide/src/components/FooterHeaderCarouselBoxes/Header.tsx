import React from "react";
import Logo from "../../images/general/myLogo2.png";
import { Link} from "react-router-dom";



function Header() {
  return (
      <nav id="mosttopnav" className="mostTop">
        <p className="welcomeMessage" id="">
          Log in to get started
        </p>
        <img src={Logo} alt="Logo" className="logo" />
        <Link to="/log_in"><h5 style={{color: 'black'}}>Log In</h5></Link>
        {/* <button className="btn btn-success"><span>Sign Up</span></button> */}
        {/* <form className="login">
          <input
            type="text"
            placeholder="first name"
            className="userInput"
            id="fname"
          />

          <input
            type="text"
            placeholder="last name"
            className="userInput"
            id="lname"
          />
          <button className="loginButton">&rarr;</button>
        </form> */}
      </nav>
  );
}

export default Header;
