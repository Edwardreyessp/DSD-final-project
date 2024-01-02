import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alumno from "./Alumno";
import AddStudent from "./AddStudent";
import DashboardAdmin from "./DashboardAdmin";
import Materias from "./Materias";
import Alumnos from "./Alumnos";
import Asignadas from "./Asignadas";
import TableAdmin from "./TableAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/student",
    element: <Alumno />,
  },
  {
    path: "/admin/addStudent",
    element: <AddStudent />,
  },
  {
    path: "/admin",
    element: <DashboardAdmin />,
  },
  {
    path: "/admin/materias",
    element: <Materias />,
  },
  {
    path: "/admin/materias/calificaciones",
    element: <TableAdmin />,
  },
  {
    path: "/admin/alumnos",
    element: <Alumnos />,
  },
  {
    path: "/admin/alumnos/asignadas",
    element: <Asignadas />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
