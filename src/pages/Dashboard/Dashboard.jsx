import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  const [project, setProject] = useState([{
    projectNo: '',
    link: '',
    img: null,
    date: '',
    title: '',
    desc: ''
  }]);

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === 'img') {
      setProject({ ...project, img: e.target.files[0] });
    } else {
      setProject({ ...project, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('projectNo', project.projectNo);
    formData.append('link', project.link);
    formData.append('img', project.img);
    formData.append('date', project.date);
    formData.append('title', project.title);
    formData.append('desc', project.desc);

    try {
      await axios.post('/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Project added successfully');
      fetchProjects(); // Fetch projects again to update the list
    } catch (error) {
      console.error('Error adding project: ', error);
      alert('Error adding project');
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects: ', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  console.log(projects);

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="projectNo" placeholder="Project No." onChange={handleChange} />
          <input type="text" name="link" placeholder="Link" onChange={handleChange} />
          <input type="file" name="img" onChange={handleChange} />
          <input type="text" name="date" placeholder="Date" onChange={handleChange} />
          <input type="text" name="title" placeholder="Title" onChange={handleChange} />
          <textarea name="desc" placeholder="Description" onChange={handleChange} />
          <button type="submit">Add Project</button>
        </form>

        <h2>Projects</h2>
        <ul>
          {project && project?.map((proj, index) => (
            <li key={index}>
              <img src={proj.img} alt={`Project ${proj.projectNo}`} />
              <div>
                <p>Project No: {proj.projectNo}</p>
                <p>Link: <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a></p>
                <p>Date: {proj.date}</p>
                <p>Title: {proj.title}</p>
                <p>Description: {proj.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
