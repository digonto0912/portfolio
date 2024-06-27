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
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Resume from "./pages/Resume/Resume"
import Footer from "./pages/Footer/Footer"

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
          <Route path="/projects">
            <Projects />
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

        <Footer></Footer>
      </div>

    </Router>
  )
}

export default App
