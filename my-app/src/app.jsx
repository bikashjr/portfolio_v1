import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About from "./pages/About"
import Contacts from "./pages/Contact";
import Projects from "./pages/Projects";
import Skill from "./pages/Skills";

import './app.css'

export const router = createBrowserRouter([
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
    path: "/skills",
    element: <Skill />
  },
  {
    path: "/project",
    element: <Projects />
  }
]);
export function App() {
  return (
    <RouterProvider router={router} />
  )
}
