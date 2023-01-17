import React from "react";
import "../styles/Portfolio.css"
import Scheduler from "../imgs/Scheduler.png";


const styles ={
    pictureStyle: {
        height: "300px",
        width: "300px"
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
                        <div>Github: </div>
                        <a href="https://github.com/mSwineford/E-Commerce-Back-End">
                            <li>https://github.com/mSwineford/E-Commerce-Back-End</li>
                        </a>
                    </section>

                    <section className="card">
                        <h3>Work Day Scheduler</h3>
                        <img src={Scheduler} style={styles.pictureStyle} alt="photo"></img>
                        <div>A program that schedules work hours.</div>
                            <a href="https://github.com/mSwineford/MSWebAPIsChallenge">
                                <li>Github</li>
                            </a>
                            <a href="https://mswineford.github.io/MSWebAPIsChallenge/">
                                <li>Deployed Application:</li>
                            </a>

                    </section>
                </main>

                <main style={styles.mainStyle}>

                </main>
        </div>
    );
}


