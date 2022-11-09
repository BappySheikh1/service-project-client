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
import UpdateReview from "../Pages/MyReview/UpdateReview";
import PrivateRouter from '../Router/PrivateRouter'

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main />,
         children:[
            {
                path:'/',
                loader:()=>fetch('https://service-project-server.vercel.app/services/limit'),
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
                element:  <PrivateRouter><MyReview /></PrivateRouter>
            },
            {
                path:'addservice',
                element: <PrivateRouter><AddService /></PrivateRouter>
            },
            {
                path:'/services',
                loader:()=>fetch(`https://service-project-server.vercel.app/services`),
                element: <Services />
            },
            {
                path:'/detailspage/:id',
                loader:({params})=>fetch(`https://service-project-server.vercel.app/services/${params.id}`),
                element: <DetailsPage />
            },
            {
                path:'/update/:id',
                loader:({params})=>fetch(`https://service-project-server.vercel.app/review/${params.id}`),
                element: <PrivateRouter><UpdateReview /></PrivateRouter> 
            }
         ]
    } 
])