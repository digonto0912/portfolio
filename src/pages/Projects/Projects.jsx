// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../Firebase/Firebase_init';
import webDevProjectData from "./webDevProjectData/webDevProjectData.json";
import "./Projects.css";
import WebDevelopment from './Modules/WebDevelopment';
import MLDevelopment from './Modules/MLDevelopment';
import Footer from '../Footer/Footer';

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
        <div>
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
                    <WebDevelopment
                        active_Project_Lists_Is_Web_Development={active_Project_Lists_Is_Web_Development}
                        projectLists={projectLists}
                    />

                    {/* Machine Learning related project showing section */}
                    <MLDevelopment
                        active_Project_Lists_Is_Web_Development={active_Project_Lists_Is_Web_Development}
                        projectLists={projectLists}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
