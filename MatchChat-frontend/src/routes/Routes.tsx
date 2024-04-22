import React from "react";
import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PathConstants } from "./paths/ContainerPaths";
import Layout from "../containers/Layout/Layout";

const Home = React.lazy(
    () => import("../containers/Layout/Layout")
); /* TODO: Change to HOME path */

function Routes(): ReactElement {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            errorElement: <div>Not Found</div>,
            children: [
                { path: PathConstants.HOME, element: <Home /> },
                { path: PathConstants.LOGIN, element: <div>Login</div> },
                { path: PathConstants.ACCOUNT, element: <div>Account</div> },
                { path: "*", element: <div>No Match</div> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Routes;
