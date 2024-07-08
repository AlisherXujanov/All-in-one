import { createContext } from 'react'
import { globalReducer } from './helpers.js'
const CONTEXT = createContext()


const globalMemory = {
    counter: 0,
    test: "Hello Farzod!",
    // test2: "Hello Farzona!",
    // test3: "Hello Ramiz!",
    geolocation: {
        lat: 0,  // широта
        lon: 0   // долгота
    }
}



export { CONTEXT, globalMemory, globalReducer }
