import React from "react"

const MLDevelopment = ({
    active_Project_Lists_Is_Web_Development,
    projectLists
}) => {
    return (
        <div className={`${active_Project_Lists_Is_Web_Development ? "d-none" : ""} ProjectsList`}>
            {projectLists.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={project.date === "none" ? "d-none" : ""}
                >
                    <div className="Project">
                        <img src={project.img} alt={project.title} />
                        <div>{project.date}</div>
                        <h3>{project.title}</h3>
                        <h5>{project.desc}</h5>
                    </div>
                </a>
            ))}
        </div>
    )
};

export default MLDevelopment;