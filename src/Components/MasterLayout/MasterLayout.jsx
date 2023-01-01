import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../Navbars/Navbars'

const MasterLayout = ({ userData, logout }) => {
    return (
        <div>
            <Navbars userData={userData} logout={logout}/>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    )
}
export default MasterLayout