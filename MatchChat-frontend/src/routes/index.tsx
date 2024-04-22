import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PathConstants } from "./paths/ContainerPaths";
import { MatchMapping } from "./mappings/MatchMapping";
import Layout from "../containers/Layout/Layout";

const Home = React.lazy(() => import("../containers/Home/Home"));

function Routes(): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <div>Not Found</div>,
      children: [
        { path: PathConstants.HOME, element: <Home /> },
        { path: PathConstants.LOGIN, element: <div>Login</div> },
        { path: PathConstants.ACCOUNT, element: <div>Account</div> },
        { path: "*", element: <div>No Match</div> },
        ...MatchMapping,
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
