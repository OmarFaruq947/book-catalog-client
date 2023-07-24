import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddNewBooks from "../Pages/AddNewBooks";
import AllBooks from "../Pages/AllBooks";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import BooksDetails from "../Pages/BooksDetails";
import EditBook from "../Pages/EditBook";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/all-books",
        element: <AllBooks />,
      },

      {
        path: "/add-new-book",
        element: <AddNewBooks />,
      },

      {
        path: "/book-details/:id",
        element: <BooksDetails />,
      },

      {
        path: "/edit-book",
        element: <EditBook />,
      },

      {
        path: "/sign-in",
        element: <SignIn />,
      },

      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
