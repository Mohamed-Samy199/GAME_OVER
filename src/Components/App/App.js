import React, { useEffect, useState } from "react"
import MasterLayout from "../MasterLayout/MasterLayout"
import Home from "../Home/Home"
import All from "../All/All"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Login from "../Login/Login"
import Register from "../Register/Register"
import NotFound from "../NotFound/NotFound"
import { ToastContainer } from 'react-toastify'
import jwtDecode from "jwt-decode"
import ProtectRoute from "../ProtectRoute/ProtectRoute"
import Movies from "../Movies/Movies"
import Tvshows from "../Tvshows/Tvshows"
import People from "../People/People"
import Popular from "../Popular/Popular"
import Theater from "../Theater/Theater"
import Drama from "../Drama/Drama"
import Kids from "../Kids/Kids"
import Search from "../Search/Search"
import Details from "../Details/Details"
import { Offline, Online } from "react-detect-offline"

const App = () => {
    let [userData, setUserData] = useState(null)
    let saveUserData = () => {
        let encodeToken = localStorage.getItem('token');
        let decodeToken = jwtDecode(encodeToken)
        setUserData(decodeToken);
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            saveUserData()
        }
    }, [])
    let logout = () => {
        localStorage.removeItem('token')
        setUserData(null)
        return <Navigate to='login' />
    }
    let routes = createBrowserRouter([
        {
            path: '/', element: <MasterLayout userData={userData} logout={logout} />,
            errorElement: <NotFound />, children: [
                { index: true, element: <ProtectRoute userData={userData}><Home /></ProtectRoute> },
                { path: 'home', element: <ProtectRoute userData={userData}><Home /></ProtectRoute> },
                { path: 'all', element: <ProtectRoute userData={userData}><All /></ProtectRoute> },
                { path: "movies", element: <ProtectRoute userData={userData}><Movies /></ProtectRoute> },
                { path: "tvshows", element: <ProtectRoute userData={userData}><Tvshows /></ProtectRoute> },
                { path: "people", element: <ProtectRoute userData={userData}><People /></ProtectRoute> },
                { path: "search", element: <ProtectRoute userData={userData}><Search /></ProtectRoute> },
                { path: "popular", element: <ProtectRoute userData={userData}><Popular /></ProtectRoute> },
                { path: "theater", element: <ProtectRoute userData={userData}><Theater /></ProtectRoute> },
                { path: "drama", element: <ProtectRoute userData={userData}><Drama /></ProtectRoute> },
                { path: "kids", element: <ProtectRoute userData={userData}><Kids /></ProtectRoute> },
                { path: "details/:id/:media_type", element: <ProtectRoute userData={userData}><Details /></ProtectRoute> },
                { path: "login", element: <Login saveUserData={saveUserData} userData={userData} /> },
                { path: "register", element: <Register /> },
            ]
        }
    ])
    return (
        <div>
            <ToastContainer />
            <div>
                <Online><RouterProvider router={routes} /></Online>
                <Offline><div className="h1 text-center mt-5">you are offline</div></Offline>
            </div>
        </div>
    )
}
export default App