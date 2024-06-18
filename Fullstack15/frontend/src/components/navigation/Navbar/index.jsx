import Heading from "../../common/Heading"
import './style.scss'

function Navbar(props) {
    return (
        <nav className="navbar-wrapper">
            <Heading size={1.5} title="Fonte" />

            <div className="links">
                <a href="#">О нас</a>
                <a href="#">Команда</a>
                <a href="#">Блог</a>
                <a href="#">Продукты</a>
                <a href="#">Контакты</a>
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