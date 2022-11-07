import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import DetailsPage from "../Pages/Home/DetailsPage/DetailsPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Home/Services/Services";
import MyReview from "../Pages/MyReview/MyReview";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main />,
         children:[
            {
                path:'/',
                loader:()=>fetch('services.json'),
                element: <Home />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/register',
                element: <Register />
            },
            {
                path:'/blogs',
                element:<Blogs />
            },
            {
                path:'/myreview',
                element: <MyReview />
            },
            {
                path:'addservice',
                element: <AddService />
            },
            {
                path:'/services',
                loader:()=>fetch('services.json'),
                element: <Services />
            },
            {
                path:'/detailspage/:id',
                element: <DetailsPage />
            }
         ]
    }
])