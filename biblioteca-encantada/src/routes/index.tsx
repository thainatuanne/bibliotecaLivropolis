import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import AddBook from "../pages/AddBook/AddBook";
import EditBook from "../pages/EditBook/EditBook";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/book/:id",
        element: <BookDetails />,
    },
    {
        path: "/add",
        element: <AddBook />,
    },
    {
        path: "/edit/:id",
        element: <EditBook />,
    },
]);
