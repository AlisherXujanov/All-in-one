import About from "./About"
import "./style.scss"

function LandingPage() {
    return (
        <main className="landing-page-main-wrapper">
            <div className="about-wrapper">
                <About />
            </div>
        </main>
    );
}

export default LandingPage;