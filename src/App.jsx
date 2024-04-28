import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./pages/NavBar/NavBar"
import HomePage from "./pages/HomePage/HomePage"
import About from "./pages/About/About"
import Footer from "./pages/Footer/Footer"
import Page404 from "./pages/Page404/Page404"

function App() {

  return (
    <Router>

      <div className='completePage'>
        <NavBar></NavBar>

        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/blog">
            <Page404 />
          </Route>
          <Route path="/about">
            <About />
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
