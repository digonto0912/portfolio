import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

const Blog = () => {

    const [BlogsLists, setBlogsLists] = useState([]);

    useEffect(() => {
        fetch("../../../public/json data/blogs.json")
            .then(res => res.json())
            .then(data => setBlogsLists(data))
    }, []);

    // html part
    return (
        <div>
            <div className="Projects">
                <div className="ProjectsListDiv">
                    <div className="ProjectsListDivHeadline">
                        <h1>Blogs</h1>
                        <h5>Explore deeper insights on my blog for a richer understanding.</h5>
                    </div>
                    {/* all projects start from here */}
                    <div className="ProjectsList">

                        {
                            BlogsLists.map(BlogsList => <>
                                <a href={BlogsList?.link} target="_blank">
                                    <div className="Project">
                                        <img src={BlogsList?.img} alt="" />
                                        <div>{BlogsList?.date}</div>
                                        <h3>{BlogsList?.title}</h3>
                                        <h5>{BlogsList?.desc}</h5>
                                    </div>
                                </a>
                            </>)
                        }

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;