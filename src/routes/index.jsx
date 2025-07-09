import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import { createBrowserRouter } from "react-router";
import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact-us",
                element: <Contact/>
            },
            {
                path: "/services",
                element: <Services/>
            },
        ]
    }
])

export default router