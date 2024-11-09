import { createBrowserRouter } from "react-router-dom";
import Layout from "./shop/Layout";
import Home from "./shop/home/Home";
import About from "./shop/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
