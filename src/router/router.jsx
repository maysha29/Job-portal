import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        Component:Home,
      }, 
      {
        path:'/register',
        Component:Register,
      },
      {
        path:'/signIn',
        Component:SignIn,
      }
    ]
  },
]);

export default router;