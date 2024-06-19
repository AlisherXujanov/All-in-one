import { useState } from 'react'


function Test() {
    // let a 
    // a == undefined

    const [counter, setCounter] = useState(10) 
    const [position, setPosition] = useState(0) 
    //    счетчик, обновитьСчетчик


    // function callIncrement(e) {
    //     setCounter(counter + 1)
    // }
    // function callDecrement(e) {
    //     setCounter(counter - 1)
    // }

    function clickHandler(e) {
        let name = e.target.name
        if (name=='increment') { setCounter(counter + 1) }
        else if (name=='decrement') { setCounter(counter - 1) }
        else if (name=='left') { setPosition(-200) }
        else if (name=='right') { setPosition(200) }
        else if (name=='center') { setPosition(0) }
        else {
            console.log("Incorrect button name")
        }
    }

    return (
        <>
            <h1>Test</h1>

            <br />  <br />  <br />

            <h2 style={{textAlign: 'center', transform: `translateX(${position}px)`}}>
                {counter}
            </h2>

            <br />  <br />  <br />

            <button className='btn btn-warning' onClick={clickHandler} name="increment">
                Increment
            </button>
            <button className='btn btn-warning' onClick={clickHandler} name="decrement">
                Decrement
            </button>
            <button className='btn btn-warning' onClick={clickHandler} name="left">
                To left
            </button>
            <button className='btn btn-warning' onClick={clickHandler} name="right">
                To right
            </button>
            <button className='btn btn-warning' onClick={clickHandler} name="center">
                Center
            </button>
        </>
    );
}

export default Test;