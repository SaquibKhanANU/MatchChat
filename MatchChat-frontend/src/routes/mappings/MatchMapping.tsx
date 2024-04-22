import { lazy } from "react";
import { PathConstantsHome } from "../paths/MatchPaths";
import { RouteObject } from "react-router-dom";

const Match = lazy(() => import("../../containers/Match/Match"));

export const MatchMapping: RouteObject[] = [
  {
    path: PathConstantsHome.MATCH,
    element: <Match />,
  },
];
