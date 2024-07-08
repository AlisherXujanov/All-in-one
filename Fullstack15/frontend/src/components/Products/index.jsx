import './style.scss'
import { CONTEXT } from '../../db';
import { useContext } from 'react';

function Products(props) {
    const state = useContext(CONTEXT)

    return (
        <div id="products-wrapper">
            <h2>{state.test}</h2>

            <br />
            <br />
            <hr />
            <br />
            <br />

            <button onClick={
                (e) => { state.dispatch({ type: 'setFarzod', payload: "Hello Farzod!" }) }}
                className='warning-btn'>
                Farzod
            </button>
            <button onClick={
                (e) => { state.dispatch({ type: 'setFarzona', payload: "Hello Farzona!" }) }}
                className='warning-btn'>
                Farzona
            </button>
        </div>
    );
}

export default Products;
