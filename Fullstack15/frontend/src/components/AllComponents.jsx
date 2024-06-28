import { Routes, Route, useLocation } from 'react-router-dom'
import LendingPage from "./LandingPage"
import Layout from './Layout'
import About from "./LandingPage/About"
import Contacts from './Contacts'
import Blog from './Blog'
import BlogDetails from './Blog/BlogDetails.jsx'

function AllComponents() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />} >
                <Route index element={<LendingPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:id' element={<BlogDetails />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;