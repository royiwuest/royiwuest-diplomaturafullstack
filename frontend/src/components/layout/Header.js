import React from "react";
import "../../styles/components/layout/Header.css"
const Header = (props) => {
    return (
        <header>
          <div className="holder">
            <img src="./images/logo.png" alt="logo"/>
            <h1>Sabores del Sur</h1>
        </div>
    </header>
    );
}

export default Header;
