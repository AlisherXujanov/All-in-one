"use client"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { toast } from "react-toastify"
import { auth } from "@/firebase/config"
import { useRouter } from "next/navigation"
import { setSessionCookie } from "@/utils/cookies"
import "./style.scss"


function SignIn(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const router = useRouter()


    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function submitForm(e) {
        e.preventDefault()

        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                return
            }
        }

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user
                toast.success("Signed in successfully!", { theme: "dark" })
                setSessionCookie(user.uid)
                setFormData({})
                props.closeModal()
                router.push("/nfts")
            })
            .catch((error) => {
                toast.error(error.message, { theme: "dark" })
            })
    }

    return (
        <div className="auth-signin-container">
            <h1>Sign In</h1>
            <form onSubmit={submitForm}>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;