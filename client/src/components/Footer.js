import React from "react";
import "../styles/Footer.css";

const styles = {
    footerStyle: {
        background: "tan",
        marginBottom: "20px"
    },
    footingStyleH2: {

        marginBottom: "20px"
    },
    footingStyle: {
        background: "tan",
        fontSize: "20px",
    },
};

function Footer() {
    return (
        <footer className="footer" style={styles.footerStyle} >
            <h2 style={styles.footingStyleH2}>
                Contact Info: 
            </h2>
            <a style={styles.footingStyle}>
                Github: https://github.com/mSwineford
            </a>
            <a style={styles.footingStyle}>
                Email: m.swineford@yahoo.com
            </a>
        </footer>
    );
}

export default Footer;