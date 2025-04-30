"use client"
import "./style.scss"
import Image from "next/image"
import LogoPng from "../../assets/icons/logo.png"
import Link from "next/link"
import { RiSearchLine } from "react-icons/ri"
import { usePathname } from 'next/navigation'
import ModalScreen from "../ModalScreen"
import Auth from "../auth"
import { links } from "../../store"
import { useState } from "react"

import { FiLogIn } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { auth } from '@/firebase/config'
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { removeSessionCookie } from "@/utils/cookies"


// Hook  ->  component controls (different types of hooks exist)
// RULES:
// 1. You should import them from react and use them only in client-side-components
// 2. You should always call them before any other 
//    functions inside component (at the top level)
// --------------------------------------------------------------------------
// The simple tag <a href="..."> here is changed by the component <Link href="..."> from next/link
// The component <Link> is used to navigate between pages
// --------------------------------------------------------------------------
// RU:
// Простой тег <a href="..."> здесь заменен на компонент <Link href="..."> из next/link
// Компонент <Link> используется для навигации между страницами
// --------------------------------------------------------------------------
function Nav(props) {
    // Call hooks here
    const pathname = usePathname()
    const [showModal, setShowModal] = useState(false)
    const NAVBAR_LINKS = props.user ? links.authLinks : links.nonAuthLinks
    const router = useRouter()


    async function logout(e) {
        e.preventDefault()
        try {
            await auth.signOut()
            toast.success('Logged out successfully', { theme: 'dark' })
            removeSessionCookie()
            router.push("/")
        } catch (error) {
            toast.error(error.message, { theme: 'dark' })
        }
    }

    // ...
    // ---------------------
    // Other functions and variables
    // ...
    return (
        <nav className="global-nav">
            <div className="left">
                <Link href="/">
                    <Image
                        src={LogoPng}
                        alt="NFTs logo"
                        width={60}
                        height={20}
                    />
                </Link>
                <div className="global-searchbox">
                    <RiSearchLine />
                    {/* TODO: className="active" */}
                    <input
                        className="global-nav-search"
                        type="search"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="right">
                {
                    NAVBAR_LINKS.map(l => {
                        return (
                            <Link
                                href={l.path}
                                className={pathname == l.path ? "active" : ""}
                                key={l.name}
                            >
                                {l.name}
                            </Link>
                        )
                    })
                }

                {
                    props.user ?
                        <button className="auth-button warning-btn" onClick={(e) => { logout(e) }}>
                            <TbLogout />
                            Logout
                        </button>
                        :
                        <button className="auth-button success-btn" onClick={() => setShowModal(true)}>
                            <FiLogIn />
                            Sign up
                        </button>
                }
            </div>
            {
                showModal &&
                <ModalScreen closeModal={() => setShowModal(false)}>
                    <Auth closeModal={() => setShowModal(false)} />
                </ModalScreen>
            }
        </nav>
    );
}

export default Nav;


// DRY  -> Don't repeat yourself
