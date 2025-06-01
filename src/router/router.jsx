import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/signIn',
        element: <SignIn />,
      },
      //  {
      //   path: '/jobs/:id',
      //   element:<JobDetails></JobDetails>,
      //   loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
      //  }  
      {
  path: "/jobs/:id",
  element: <JobDetails />,
  loader: async ({ params }) => {
    console.log(params.id); // Check if this is undefined
    return fetch(`http://localhost:3000/jobs/${params.id}`);
  }
}
 
    ]
  },
]);

export default router;