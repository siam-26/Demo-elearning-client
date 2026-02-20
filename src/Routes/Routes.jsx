import { createBrowserRouter } from "react-router";
import Home from "../pages/Homepage/Home/Home";
import Mainroute from "../Layout/Mainroute";
import AdminLogin from "../Admin/AdminLogin/AdminLogin";
import AdminLayout from "../Admin/AdminLayout/AdminLayout";
import AddCourse from "../Admin/AddCourses/AddCourses";
import ChangePassword from "../Admin/ChangePassword/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroute />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "/login",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "/appoinment",
      //     element: <Appoinment></Appoinment>,
      //   },
      //   {
      //     path: "/signup",
      //     element: <Signup></Signup>,
      //   },
    ],
  },

  {
    path: "/adminDashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AddCourse />,
      },
      {
        path: "/adminDashboard/ChangePassword",
        element: <ChangePassword/>,
      },
    ],
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },
]);

export default router;