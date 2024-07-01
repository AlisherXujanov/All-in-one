import { createContext, useContext } from "react";

const CONTEXT = createContext()

function C1(props) {
    return (
        <>
            <C2 />
        </>
    );
}
function C2(props) {
    return (
        <>
            <C3 />
        </>
    );
}
function C3(props) {
    return (
        <>
            <C4 />
        </>
    );
}
function C4(props) {
    return (
        <>
            <C5 />
        </>
    );
}
function C5(props) {
    const value = useContext(CONTEXT)

    return (
        <>
            { value }
        </>
    );
}



// provide = обеспечивать

function UsageOfContext() {
    const title = "Context"

    return (
        <CONTEXT.Provider value={title}>
            <div className="products-wrapper">
                <h1>
                    <C1 />
                </h1>
            </div>
        </CONTEXT.Provider>
    );
}

export default UsageOfContext;