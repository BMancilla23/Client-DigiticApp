import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./dashboard/DashboardLayout";
import Overview from "./dashboard/overview/Overview";
import Blog from "./shop/blog/Blog";
import Contact from "./shop/contact/Contact";
import Home from "./shop/home/Home";
import { default as ShopLayout } from "./shop/ShopLayout";
import Store from "./shop/store/Store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ path: "", element: <Overview /> }],
  },
]);
