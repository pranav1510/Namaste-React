import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

/*
* Header
    - logo
    - navlinks
* Body
    - Search
    - RestCardContainer
        -RestCard
* Footer
* - CopyRight
* - Email
* - Contact us
*/ 

const App = () => {

    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}

const user = {
    'name': "Pranav",
    'location': "Jagtial",
    'contact': "pranav_07"
}

const Grocery = lazy(() => import("./components/Grocery"))

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About user={user}/>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
            }
        ],
        errorElement: <Error />
    },
])

root.render(
    <RouterProvider router={appRouter} />
)

