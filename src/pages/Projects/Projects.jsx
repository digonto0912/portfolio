import "./Projects.css";
import React, { useEffect, useState } from 'react';

const Projects = () => {

    const [ProjectLists, setProjectLists] = useState([]);

    useEffect(() => {
        fetch("../../../public/json data/projects.json")
            .then(res => res.json())
            .then(data => setProjectLists(data))
    }, []);

    // html part
    return (
        <div className="Projects">

            {/* projeect page hero secstion. what is shutdown now */}
            <div className="ProjectsHeader">
                <div>
                    <h1>
                        Perfect is greater than Pretty Good
                    </h1>
                    <h4>- my belive</h4>
                </div>
            </div>

            {/* projects with headline start from here */}
            <div className="ProjectsListDiv">
                <div className="ProjectsListDivHeadline">
                    <h1>my latest works</h1>
                    <h5>check my weork</h5>
                </div>

                {/* all projects start from here */}
                <div className="ProjectsList">

                    {
                        ProjectLists.map(ProjectList => <>
                            <a href={ProjectList?.link} target="_blank">
                                <div className="Project">
                                    <img src={ProjectList?.img} alt="" />
                                    <div>{ProjectList?.date}</div>
                                    <h3>{ProjectList?.title}</h3>
                                    <h5>{ProjectList?.desc}</h5>
                                </div>
                            </a>
                        </>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;