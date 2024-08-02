import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Background from './Background.jsx'
import Wildlife from './Wildlife.jsx'
// import About from './About.jsx'

export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <>
                <Navbar gap="false" sticky="no" time="8000" />
                <Background />
            </>
        },
        {
            path: "/wildlife",
            element: <>
                <Navbar gap="false" sticky="false"/>
                <Wildlife />
            </>
        },
        {
            path: "/about",
            element: <>
                <Navbar sticky="true" gap="true" />
                {/* <About /> */}
            </>
        },
        {
            path: "/blog",
            element: <>
                <Navbar sticky="false" gap="true" />
            </>
        },
        {
            path: "/awareness",
            element: <>
                <Navbar sticky="false" gap="true" />
            </>
        },
        {
            path: "/contact",
            element: <>
                <Navbar sticky="false" gap="true" />
            </>
        },
    ]);

    return (
        <>
            <Navbar time="8000"/>
            <RouterProvider router={router} />
        </>
    );
};