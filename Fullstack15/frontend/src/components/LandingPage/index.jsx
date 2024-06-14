import About from "./About"
import OurValues from "./OurValues"
import OurTeam from "./OurTeam"
import "./style.scss"

function LandingPage() {
    return (
        <main className="landing-page-main-wrapper">
            <div className="about-wrapper">
                <About />
            </div>
            <div className="our-values-wrapper">
                <OurValues />
            </div>
            <div className="our-team-wrapper">
                <OurTeam />
            </div>
        </main>
    );
}

export default LandingPage;