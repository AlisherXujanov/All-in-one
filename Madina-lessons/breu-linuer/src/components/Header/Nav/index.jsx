import { IoLocationOutline } from "react-icons/io5"
import { CiMail } from "react-icons/ci"
import { MdKeyboardArrowDown } from "react-icons/md"

import Link from "next/link"
import "./style.scss"

function Nav(props) {
    return (
        <>
            <nav className="main-nav text-sm">
                <div className="left">
                    <Link href="#"><IoLocationOutline />Visit a boutique</Link>
                    <Link href="#"><CiMail />Contact us</Link>
                </div>
                <div className="right">
                    <Link href="#">
                        Accessibility adjustment<MdKeyboardArrowDown />
                    </Link>

                    <Link href="#">
                        United States ($) - Language: English<MdKeyboardArrowDown />
                    </Link>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Nav;