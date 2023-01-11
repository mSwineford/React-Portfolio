import React from "react";
import "../styles/Navbar.css";

const styles = {
    navbarStyle: {
        background: "grey",
        justifyContent: "flex-end"
    },
};

function Navbar() {
    return (
        <nav style={styles.navbarStyle} className="navbar">
            <a href="/">about me</a>
            <a 
                href="/"
                onClick={() => handlePageChange("Portfolio")}
                >
                Portfolio
            </a>
        </nav>
    );
}

export default Navbar;