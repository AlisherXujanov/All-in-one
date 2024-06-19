import { useState } from 'react'


function Test() {
    // let a 
    // a == undefined

    const [counter, setCounter] = useState(10) 
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
        else if (name=='decrement') { 
            if (counter > 0) { setCounter(counter - 1) } 
            else { alert("Ты чёёё ??") }
        }
        else {
            console.log("Incorrect button name")
        }
    }

    return (
        <>
            <h1>Test</h1>

            <br />  <br />  <br />

            <h2>{counter}</h2>

            <br />  <br />  <br />

            <button className='btn btn-warning' onClick={clickHandler} name="increment">
                Increment
            </button>
            <button className='btn btn-warning' onClick={clickHandler} name="decrement">
                Decrement
            </button>
        </>
    );
}

export default Test;