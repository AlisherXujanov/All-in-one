"use client"
import { IoLocationOutline } from "react-icons/io5"
import { CiMail } from "react-icons/ci"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useState } from "react"

import Link from "next/link"
import "./style.scss"
import Sidebar from "@/components/Header/Sidebar"


function Nav(props) {
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <>
            <nav className="main-nav text-sm">
                <div className="left">
                    <Link href="#"><IoLocationOutline />Visit a boutique</Link>
                    <Link href="#"><CiMail />Contact us</Link>
                </div>
                <div className="right">
                    <Link href="#" onClick={() => { setShowSidebar(true) }}>
                        Accessibility adjustment <MdKeyboardArrowDown />
                    </Link>

                    <Link href="#" onClick={() => { setShowSidebar(true) }}>
                        United States ($) - Language: English<MdKeyboardArrowDown />
                    </Link>

                    <div className="sidebars">
                        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, esse aperiam! Amet possimus laboriosam consectetur, animi distinctio facilis laborum, praesentium labore quibusdam inventore magnam ad maiores reiciendis dicta at temporibus!</p>
                        </Sidebar>
                    </div>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Nav;