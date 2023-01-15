import React from "react";
import "../styles/Header.css";

const styles = {
    headerStyle: {
        background: "light-blue",
    },
    headingStyle: {
        fontSize: "60px",
        margin: "10px"
    },
};

function Header() {
    return (
        <header style={styles.headerStyle} >
            <h2 style={styles.headingStyle}className="header">
                Matthew Swineford
            </h2>
        </header>
    );
}

export default Header;