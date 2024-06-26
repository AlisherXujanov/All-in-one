import Heading from "../../common/Heading"
import './style.scss'
import { Link } from 'react-router-dom'


function Navbar(props) {
    return (
        <nav className="navbar-wrapper">
            <Link to="/">
                <Heading size={1.5} title="Fonte" />
            </Link>

            <div className="links">
                <Link to="/about">О нас</Link>
                <a href="#">Команда</a>
                <Link to="/blog">Блог</Link>
                <Link to="/products">Продукты</Link>
                <Link to="/contacts">Контакты</Link>
            </div>

            <div className="auth-section">
                <button className='btn btn-warning'>
                    Войти
                </button>
                <a href="#">
                    <ins>Рус</ins>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;