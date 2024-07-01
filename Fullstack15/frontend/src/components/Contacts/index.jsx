import './style.scss'
import Heading from '../common/Heading'
import { useState } from 'react'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { CONTEXT } from "../../../store";
import { useContext, useEffect } from 'react'


const NAME_PATTERN = /^[a-zA-Z]*$/
const PHONE_PATTERN = /^[0-9]{7,12}$/


function Contacts() {
    const value = useContext(CONTEXT)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone
    }
    function submit(e) {
        e.preventDefault()
        emailjs.send('service_8aytxhp', 'template_dbx4qji', templateParams, { publicKey: 'mbcCG18ZiPltCRfB-' })
            .then((result) => {
                toast.success("Email sent successfully!", { theme: "dark" })
            }, (error) => {
                toast.error(`Error happened - ${error}`, { theme: "dark" })
            });
        e.target.reset()
    }
    function handleInput(e) {
        const input_val = e.target.value
        const input_name = e.target.name
        if (validateForm(e)) {
            setForm({ ...form, [input_name]: input_val })
        } else {
            // pass
        }
    }
    function validateForm(e) {
        const success_color = '#FF6600'
        const error_color = '#FF0000'

        const input = e.target
        if (input.name === 'email') return true

        const PATTERN = input.name === 'name' ? NAME_PATTERN : PHONE_PATTERN

        if (input.value.length === 0) {
            return false
        } else {
            if (PATTERN.test(input.value)) {
                input.style.border = `1px solid ${success_color}`
                return true
            } else {
                input.style.border = `3px solid ${error_color}`
                return false
            }
        }
    }


    // SET GEOLOCATION FIRST TIME
    function setGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const COORDINATES = position.coords
                console.log("Latitude: " + COORDINATES.latitude)
                console.log("Longitude: " + COORDINATES.longitude)
            });
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }
    useEffect(() => {
        setGeolocation()
    }, [])
    

    return (
        <main className='contacts-wrapper'>
            <div className="left">
                <Heading title='Контакты' size={1.5} />

                <div className="info-section">
                    <h3>Задайте нам любой вопрос</h3>
                    <p>+7 701 776 24 20</p>
                </div>
                <div className="info-section">
                    <h3>Электронная почта</h3>
                    <p>client@fonte.kz</p>
                </div>
                <div className="info-section">
                    <h3>Юридический адрес</h3>
                    <p>050040/A15E3H4, проспект Аль-Фараби, 77/7​, 10 этаж, Алматы, Казахстан
                        Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346, Астана, Казахстан</p>
                </div>
            </div>

            <div className="right">
                <form onSubmit={submit}>
                    <div className="form-control">
                        <input type="text" placeholder='Full name'
                            onChange={handleInput} name='name'
                        />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder='Email'
                            onChange={handleInput} name='email'
                        />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder='Телефон (7-12 цифр)'
                            onChange={handleInput} name='phone'
                        />
                    </div>
                    <div className="form-control">
                        <button className='btn btn-warning' type='submit'>Отправить</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Contacts;