import './style.scss'
import { CONTEXT } from '../../db';
import { useContext } from 'react';

function Products(props) {
    const state = useContext(CONTEXT)

    return (
        <div id="products-wrapper">
            <h2>{state.test}</h2>

            <hr />
            <button className='warning-btn' onClick={(e) => {state.dispatch({ type: 'setFarzod', payload: "This is Farzod!" })}}>
                Farzona
            </button>
            <button className='warning-btn' onClick={(e) => {state.dispatch({ type: 'setFarzona', payload: "This is Farzona!" })}}>
                Farzod
            </button>
        </div>
    );
}

export default Products;
