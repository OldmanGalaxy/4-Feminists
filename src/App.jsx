import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Navbar.jsx';
import Background from './Background.jsx';
import Wildlife from "./Wildlife.jsx";
import Mainblog from "./Mainblog.jsx";
import About from "./About.jsx";
import Blog1 from './blog1.jsx';
import Blog2 from './blog2.jsx';
import Blog3 from './blog3.jsx';
import Blog4 from './blog4.jsx';
import Blog5 from './blog5.jsx';
import Blog6 from './blog6.jsx';
import Footer from './Footer.jsx';

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <>
                <Navbar time="8000" gap="no" sticky="false" />
                <Background />
            </>
        },
        {
            path: "/wildlife",
            element: <>
                <Navbar />
                <Wildlife />
                <Footer />
            </>
        },
        {
            path: "/blog",
            element: <>
                <Navbar sticky="true" gap="false" />
                <Mainblog />
                <Footer />
            </>
        },
        {
            path: "/about",
            element: <>
                <Navbar sticky="true" gap="true" />
                <About />
                <Footer />
            </>
        },
        {
            path: "/blog1",
            element: <>
                <Navbar sticky="true" gap="true"/>
                <Blog1 />
                <Footer />
            </>
        },
        {
            path: "/blog2",
            element: <>
                <Navbar sticky="true" gap="true"/>
                <Blog2 />
                <Footer />
            </>
        },
        {
            path: "/blog3",
            element: <>
                <Navbar sticky="true" gap="true"/>
                <Blog3 />
                <Footer />
            </>
        }, 
        {
            path: "/blog4",
            element: <>
                <Navbar sticky="true" gap="true"/>
                <Blog4 />
                <Footer />
            </>
        },
        {
            path: "/blog5",
            element: <>
                <Navbar sticky="true" gap="true"/>
                <Blog5 />
                <Footer />
            </>
        },
        {
            path: "/blog6",
            element: <>
                <Navbar sticky="true" gap="true"/>
                <Blog6 />
                <Footer />
            </>
        }
    ])
    return (
        <>
        <RouterProvider router={router} />
        </>
    );
}