"use client"
import "./style.scss"
import { useAuth } from "../hooks/useAuth"
import Heading from "../components/Heading";
import { useEffect } from "react";
import Image from "next/image";


function Profile() {
    const { user } = useAuth()

    // useEffect(callback, dependency)
    // is used to control the lifecycle of the component

    useEffect(() => {
        if (user) {
            console.log(user)
        }
    }, [user])

    return (
        <div className="profile-page page-wrapper">
            <header>
                <div className="profile-image-wrapper">
                    {
                        user?.photoURL ?
                            <img src={user?.photoURL} alt="profile" />
                            :
                            <img src={"https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"} alt="profile" />
                    }
                </div>
                <Heading size={2}>
                    Profile
                    {user ? ` of ${user.displayName}` : " Page"}
                </Heading>
            </header>
            <div className="profile-page-body">
                <p>
                    <b>Email: {user?.email}</b>
                </p>
            </div>
        </div >
    )
}

export default Profile