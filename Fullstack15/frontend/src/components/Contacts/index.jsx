import './style.scss'
import Heading from '../common/Heading'
import { useState } from 'react'

function Contacts() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })


    function submit(e) {
        e.preventDefault()
        console.log("Submitted ...")
    }

    function handleInput(e) {
        const input_val = e.target.value
        const input_name = e.target.name
        setForm({...form, [input_name]: input_val })
    }

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

                <div className="info-section">
                    <h3>Testing form information</h3>
                    <hr />
                    <p>Name: {form.name}</p>
                    <p>Email: {form.email}</p>
                    <p>Phone: {form.phone}</p>
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
                        <input type="number" placeholder='Телефон'
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