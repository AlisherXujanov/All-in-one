import { memo } from 'react'


function Test(props) {
    console.log("Компонент Test запущен")
    return (  
        <>
            <h1>Test</h1>
        </>
    )
}

export default memo(Test);