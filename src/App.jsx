// app css
import './App.css';

// react router 
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
import NavBar from "./pages/NavBar/NavBar"
import HomePage from "./pages/HomePage/HomePage"
import Footer from "./pages/Footer/Footer"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

function App() {

  return (
    <div className='completePage'>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  )
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

export default App
