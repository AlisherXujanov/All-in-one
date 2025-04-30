import "./style.scss"


function Spinner(props) {
    return (
        <div className="spinner-wrapper">
            <div className="spring-spinner">
                <div className="spring-spinner-part top">
                    <div className="spring-spinner-rotator"></div>
                </div>
                <div className="spring-spinner-part bottom">
                    <div className="spring-spinner-rotator"></div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;