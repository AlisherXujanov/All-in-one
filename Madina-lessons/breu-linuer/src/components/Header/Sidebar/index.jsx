"use client"
import "./style.scss"


function Sidebar(props) {
    return (
        <div className="nav-sidebar-wrapper">
            <div className={props.showSidebar ? "sidebar show" : "sidebar"}>
                <div className="sidebar-body">
                    <div className="header">
                        <span id="close-nav-sidebar" onClick={() => { props.setShowSidebar(false) }}>
                            &times;
                        </span>
                        <hr />
                    </div>
                    <div className="main">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;