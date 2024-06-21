import Navbar from "./navigation/Navbar"
import Footer from "./navigation/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    )
}

export default Layout;