"use client"
import Image from "next/image"
import MandMs from "../assets/images/MandMs.jpg"
import { useState } from "react"
import "./style.scss"

export default function Home() {
    const [showP, setShowP] = useState(false)
    const [color, setColor] = useState("black")
    const [text, setText] = useState("")
    const [size, setSize] = useState("10")

    
    function toggle(event) { setShowP(!showP) }
    function changeColor(event) {
        setColor(event.target.value)
    }
    function updateText(e) {
        setText(e.target.value)
    }
    function updateTextSize(e) {
        setSize(e.target.value)
    }

    return (
        <main>
            <h1>Home</h1>
            {/* <Image src={MandMs} width="300" height="200" alt="MandMs"/> */}
            <div className="wrapper">
                <p style={{fontSize:size+"px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, corrupti? Modi iure dolore culpa dolorem perspiciatis. Ex veritatis quaerat blanditiis fugit, possimus asperiores aut sapiente dolorem voluptatibus ducimus vitae libero!</p>
                <input type="range" min={10} max={30} onChange={updateTextSize}/>
            </div>
            <div className="wrapper">
                {
                    text.length > 0 ? text 
                    :
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic laborum natus eaque nemo consequuntur impedit deserunt error soluta. Architecto repellat aliquid inventore illo id illum aliquam eligendi quod facilis.</p>
                }
                <input type="text" onChange={updateText}/>
            </div>
            <div className="wrapper" style={{color:color}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deleniti, nam quibusdam alias iure, mollitia asperiores cum praesentium explicabo officiis voluptatum, perspiciatis a nemo ex illum cumque. Assumenda, hic in.</p>
                <input type="color" onChange={changeColor} />
            </div>
            <div className="wrapper">
                <button className="toggle-paragraph" onClick={toggle} >
                    Show paragraph
                </button>

                {
                    showP == true ?
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita iusto inventore cupiditate ipsum aliquid eum animi. Qui inventore itaque incidunt aperiam minus, fugit soluta, labore asperiores magnam molestiae saepe.</p>
                        : ""
                    // ... ? show : hide
                }
            </div>
        </main>
    )
}
