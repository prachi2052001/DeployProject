import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Foremployers from "pages/Foremployers";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "foremployers",
      element: <Foremployers />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
