import Heading from "../common/Heading"
import { Link, useNavigate } from 'react-router-dom'

// 1. Create a burger
// 2. Put the input checkbox onto the burger and make it invisible
// 3. Open the Nav-width div when the checkbox is checked

function Nav(props) {
    const navigate = useNavigate();

    const goToTeamsHash = () => {
        navigate('/about');
        setTimeout(() => {
            const element = document.getElementById('teams');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    function initiateChangeLanguage(e) {
        console.log('Change language');
    }

    return (
        <div className="nav-wrapper">
            <div className="logo">
                <h2>
                    <Link to={"/"}>
                        <Heading size={1.5}>Fonte</Heading>
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">
                    <Link to={"/about"}>About</Link>
                    <a onClick={goToTeamsHash}>Team</a>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/products"}>Products</Link>
                    <Link to={"/contacts"}>Contacts</Link>
                </div>

                <div className="auth">
                    <button className="warning-btn">Login</button>
                    <span onClick={initiateChangeLanguage} >
                        <ins>Рус</ins>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nav;