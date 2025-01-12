import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./pages/NavBar/NavBar"
import HomePage from "./pages/HomePage/HomePage"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Skills from "./pages/Skills/Skills"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Resume from "./pages/Resume/Resume"
import Dashboard from "./pages/Dashboard/Dashboard"
import Footer from "./pages/Footer/Footer"
import ProjectsDetails from './pages/ProjectsDetails/ProjectsDetails';

function App() {

  return (
    <Router>

      <div className='completePage'>
        <NavBar></NavBar>

        <Switch className="pageRootContain">
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project-details/:id">
            <ProjectsDetails />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact-info">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

      </div>

    </Router>
  )


  // Routers
  //   const router = createBrowserRouter([
  //     {
  //       // temp file
  //       path: "/",
  //       element: <><MainButton /></>
  //     },
  //   ])

  //   return (
  //     <>
  //       <RouterProvider router={router} />
  //     </>
  //   )
  // }

}

export default App
