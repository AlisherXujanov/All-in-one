import Heading from "../components/Heading";
import Link from "next/link";

export const metadata = {
    title: "About page",
}

function About() {
    return (
        <div className="about-page page-wrapper">
            <Heading size={2}>About Page</Heading>

            {/* https://.../about/company */}
            <Link href="/about/company">About company</Link>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam numquam deleniti quidem fugiat inventore excepturi quam voluptates fuga nisi in unde, iste, commodi perspiciatis nesciunt consequuntur temporibus! Delectus, consequatur inventore?</p>
        </div>
    )
}

export default About;




