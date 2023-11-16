import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About from "./pages/About"
import Nav from "./Layouts/Navbar"
import Footer from "./Layouts/Footer";
import Contacts from "./pages/Contact";
import Projects from "./pages/Projects";

import './app.css'

export function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contacts />
    },
    {
      path: "/project",
      element: <Projects />
    }
  ])
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <main className="flex-shrink-0 vh-100 ">
        <div className="container">
          <RouterProvider router={router} />
          <Footer className="mt-5" />
        </div>
      </main>
    </div>
  )
}
