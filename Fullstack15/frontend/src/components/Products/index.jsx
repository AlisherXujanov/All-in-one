import UsageOfContext from "./usageOfContext"
import { CONTEXT } from "../../../store";
import { useContext } from 'react'


function Products() {
    const value = useContext(CONTEXT)
    // const {test, test2, test3} = useContext(CONTEXT)

    return (
        <>
            <h1>Products</h1>

            {/* <h1>{value.test}</h1>
            <h1>{value.test2}</h1>
            <h1>{value.test3}</h1> */}

            {/* <UsageOfContext /> */}
        </>
    );
}

export default Products;