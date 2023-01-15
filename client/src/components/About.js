import React from "react";
import Me from "../imgs/Me.png";

export default function About() {
    return (
        <div className="container">
            <img src={Me}
            alt="photo"></img>
            <h2>About Me</h2>
            <p>Hi! I am Matthew Swineford, and I am a jr developer.  </p>
        </div>
    )
}