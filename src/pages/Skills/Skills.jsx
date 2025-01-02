// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../Firebase/Firebase_init';
import "./Skills.css";

const Projects = () => {
    const [ProjectLists, setProjectLists] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = querySnapshot.docs.map(doc => doc.data());
            setProjectLists(projectsData);
        };

        fetchProjects();
    }, []);
    
    console.log(ProjectLists);
    
    return (
        <div className="Projects">
            <div className="ProjectsHeader">
                <div>
                    <h1>Perfect is greater than Pretty Good</h1>
                    <h4>- my belief</h4>
                </div>
            </div>

            <div className="ProjectsListDiv">
                <div className="ProjectsListDivHeadline">
                    <h1>my latest works</h1>
                    <h5>Please, checkout my work</h5>
                </div>

                <div className="ProjectsList">
                    {
                        ProjectLists.map((project, index) => (
                            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="Project">
                                    <img src={project.img} alt={project.title} />
                                    <div>{project.date}</div>
                                    <h3>{project.title}</h3>
                                    <h5>{project.desc}</h5>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
