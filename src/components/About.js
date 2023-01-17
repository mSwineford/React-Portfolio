import React from "react";
import Me from "../imgs/Me.png";

const styles = {
    paragraph: {
        backgroundColor: "tan",
    }
}

export default function About() {
    return (
        <div className="container">
            <img src={Me}
            alt="photo"></img>
            <h2>About Me</h2>
            <p style={styles.paragraph}>Hi! I am Matthew Swineford, and I am a jr developer.  This is my Portfolio where I keep some examples of my work.  </p>
        </div>
    )
}