// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../Firebase/Firebase_init';
import webDevProjectData from "./webDevProjectData/webDevProjectData.json";
import "./Projects.css";

const Projects = () => {
    const [WDProjectLists, setWDProjectLists] = useState([]);
    const [MLProjectLists, setMLProjectLists] = useState([]);
    const [projectLists, setProjectLists] = useState([]);
    const [active_Project_Lists_Is_Web_Development, set_Active_Project_Lists_Is_Web_Development] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            // fetching machine learning and data science related projects
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = querySnapshot.docs.map(doc => doc.data());
            setMLProjectLists(projectsData);

            // fetching web development related projects
            setWDProjectLists(webDevProjectData);
            setProjectLists(webDevProjectData); // by default we show web development projects 
        };

        fetchProjects();
    }, []);

    const showWebDevelopmentProjects = () => {
        setProjectLists(WDProjectLists)
        set_Active_Project_Lists_Is_Web_Development(true)
    };

    const showMachineLearningProjects = () => {
        setProjectLists(MLProjectLists)
        set_Active_Project_Lists_Is_Web_Development(false)
    };

    return (
        <div className="Projects">
            <div className="ProjectsListDiv">
                <div className="ProjectsListDivHeadline">
                    <h1>My Latest Works</h1>
                </div>

                {/* project type seleting buttons */}
                <div className='projectTypeButton'>
                    <button
                        onClick={showWebDevelopmentProjects}
                        className={active_Project_Lists_Is_Web_Development ? "projects_active_btn" : ""}
                    >
                        Web Development
                    </button>
                    <button
                        onClick={showMachineLearningProjects}
                        className={!active_Project_Lists_Is_Web_Development ? "projects_active_btn" : ""}
                    >
                        Data Science & Machine Learning
                    </button>
                </div>

                {/* Web Development related projects showing section */}
                <div className={`${!active_Project_Lists_Is_Web_Development ? "d-none" : ""} WDProjectsList`}>
                    <a href={""} target="_blank" >
                        <div className={"TopProject WDProject"}>
                            <div>
                            <iframe src="https://drive.google.com/file/d/1iGTVep8GuOHe5KGNT4uksKmf7K8NjvoG/preview" width="550" height="350" allow="autoplay"></iframe>

                                <div>
                                    <div>date/date</div>
                                    <h3>Title</h3>
                                    <h5>desc</h5>
                                    <ol>
                                        <li>at first we experiance chatgpt</li>
                                        <li>then feel how powerful that, how power able to become in future</li>
                                        <li>what is the growth retio, how fast growing</li>
                                        <li>then think about, how that come in this world?</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </a>

                    {projectLists.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="WDProject">
                                <div>
                                    <img src={project.img} alt={project.title} />
                                    <div>
                                        <div>{project.date}</div>
                                        <h3>{project.title}</h3>
                                        <h5>{project.desc}</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Machine Learning related project showing section */}
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
            </div>
        </div>
    );
};

export default Projects;
