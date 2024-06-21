import { Routes, Route, useLocation } from 'react-router-dom'
import LendingPage from "./LandingPage"
import Layout from './Layout'
import About from "./LandingPage/About"

function AllComponents() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />} >
                <Route index element={<LendingPage />} />
                <Route path='/about' element={<About />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;