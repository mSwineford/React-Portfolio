import React from "react";
import "../styles/Navbar.css";

const styles = {
    navbarStyle: {
        background: "grey",
        justifyContent: "flex-end"
    },
};

function Navbar({ currentPage, handlePageChange}) {
    return (
        <ul style={styles.navbarStyle} className="navbar">
            <li className="nav-item">
                <a 
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                    >
                    Home
                </a>
                <a 
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    >
                        About Me
                </a>
                <a 
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    >
                    Portfolio
                </a>
            </li>
        </ul>
    );
}

export default Navbar;