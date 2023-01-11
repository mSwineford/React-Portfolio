import React from "react";
import "../styles/Header.css";

const styles = {
    headerStyle: {
        background: "blue",
    },
    headingStyle: {
        fontSize: "80px",
    },
};

function Header() {
    return (
        <header>
            <h2 className="header">
                Matthew Swineford
            </h2>
        </header>
    );
}

export default Header;