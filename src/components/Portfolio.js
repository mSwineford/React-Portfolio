import React from "react";
import "../styles/Portfolio.css"
import Scheduler from "../imgs/Scheduler.png";
import PasswordGen from "../imgs/PasswordGen.png";
import PaintMood from "../imgs/PaintYourMood.png";


const styles ={
    pictureStyle: {
        height: "300px",
        width: "600px"
    },
    mainStyle: {
        display: "flex",
        justifyContent: "spaceEvenly",
        marginTop: "25px"
    },
    sectionStyle: {
        flex: "1 1 300px",
        padding: "0 15px 15px",
        margin: "0 50px 50px"
    }
};
export default function Portfolio() {
    return (
        <div>
            <h2>My Projects</h2>
                <main style={styles.mainStyle}>
                    <section className="card">
                        <h3>E-Commerce Back End</h3>
                        <div>GitHub: </div>
                        <a href="https://github.com/mSwineford/E-Commerce-Back-End">
                            <li>https://github.com/mSwineford/E-Commerce-Back-End</li>
                        </a>
                    </section>

                    <section className="card">
                        <h3>Work Day Scheduler</h3>
                        <img src={Scheduler} style={styles.pictureStyle} alt="photo"></img>
                        <div>A program that schedules work hours.</div>
                            <a href="https://github.com/mSwineford/MSWebAPIsChallenge">
                                <li>GitHub</li>
                            </a>
                            <a href="https://mswineford.github.io/MSWebAPIsChallenge/">
                                <li>Deployed Application:</li>
                            </a>
                    </section>
                </main>

                <main style={styles.mainStyle}>
                    <section className="card">
                        <h3>Password Generator</h3>
                        <img src={PasswordGen} style={styles.pictureStyle} alt="pass"></img>
                        <div>A program that schedules work hours.</div>
                            <a href="https://github.com/mSwineford/MSWebAPIsChallenge">
                                <li>GitHub</li>
                            </a>
                            <a href="https://mswineford.github.io/MSWebAPIsChallenge/">
                                <li>Deployed Application:</li>
                            </a>
                    </section>

                    <section className="card">
                        <h3>Paint Your Mood</h3>
                        <img src={PaintMood} style={styles.pictureStyle} alt="pass"></img>
                        <div>A group project that attempts to select art based on how youu are feeling.</div>
                            <a href="https://github.com/mSwineford/Paint-your-mood">
                                <li>GitHub</li>
                            </a>
                            <a href="https://mswineford.github.io/Paint-your-mood/">
                                <li>Deployed Application:</li>
                            </a>
                    </section>
                </main>
        </div>
    );
}


