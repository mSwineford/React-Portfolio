import React from "react";

const Portfolio = (project) => {
    const portfolioList = [
        {
            title: "sample",
            description: "sample",
            github: "sample"
        },
    ];

    return (
        <div key={project.title}>
            <div className="flex-row">
                {
                    portfolioList.map((project) => (
                        <Projects project={project}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Portfolio;