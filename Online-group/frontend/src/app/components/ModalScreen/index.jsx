import "./style.scss"


function ModalScreen(props) {
    return (
        <section className="modal-screen-wrapper">
            <div className="modal-content">
                <span id="close-modal-btn" onClick={props.closeModal}>
                    &times;
                </span>
                {props.children}
            </div>
        </section>
    );
}

export default ModalScreen;