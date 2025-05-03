"use client"
import "./style.scss"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa6";
import { auth } from "@/firebase/config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { toast } from "react-toastify"  
import { setSessionCookie } from "@/utils/cookies"


function Auth(props) {
    const [isRegistered, setIsRegistered] = useState(false)
    const toggleRegistered = (e) => {
        e.preventDefault()
        setIsRegistered(!isRegistered)
    }
    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            setSessionCookie(user.uid)
            toast.success("Signed in with Google successfully!", { theme: "dark" })
            props.closeModal()
        } catch (error) {
            toast.error(error.message, { theme: "dark" })
        }
    }
    return (
        <div className="auth-container">
            {isRegistered ? <SignUp /> : <SignIn closeModal={props.closeModal} />}

            <div className="toggle-auth-btn-container">
                {
                    isRegistered
                        ?
                        <p>
                            Already have an account?
                            <a href="#" onClick={toggleRegistered} className="toggle-auth-btn">Sign in</a>
                        </p>
                        :
                        <p>
                            Don't have an account?
                            <a href="#" onClick={toggleRegistered} className="toggle-auth-btn">Sign up</a>
                        </p>
                }
            </div>


            <hr width='50%' style={{ margin: "0 auto " }} />
            <p style={{ textAlign: "center", color: "gray" }}>
                Or continue with
                <div className="action-btns-container">
                    <span className="google-btn social-auth-btn" onClick={handleGoogleSignIn}>
                        <FcGoogle />
                    </span>
                    <span className="facebook-btn social-auth-btn">
                        <ImFacebook2 />
                    </span>
                    <span className="apple-btn social-auth-btn">
                        <FaApple />
                    </span>
                </div>
            </p>
        </div>
    );
}

export default Auth;