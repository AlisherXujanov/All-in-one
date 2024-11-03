import Link from "next/link";


function Nav(props) {
    return (
        <div className="container bg-slate-800 text-white text-center">
            <Link className={"px-3"} href={"/"}>Home</Link>
            <Link className={"px-3"} href={"/about"}>About</Link>
        </div>
    );
}

export default Nav;