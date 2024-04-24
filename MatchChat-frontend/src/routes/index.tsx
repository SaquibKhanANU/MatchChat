import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PathConstants } from "./paths";
import { MatchMapping } from "./mappings/MatchMapping";
import Layout from "../containers/Layout/Layout";
import Login from "../containers/Login/Login";

const Home = React.lazy(() => import("../containers/Home/Home"));

function Routes(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: PathConstants.LOGIN,
      element: <Login />,
    },
    {
      element: <Layout />,
      errorElement: <div>Not Found</div>,
      children: [
        { path: PathConstants.HOME, element: <Home /> },
        { path: PathConstants.ACCOUNT, element: <div>Account</div> },
        ...MatchMapping,
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
