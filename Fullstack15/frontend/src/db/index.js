import { createContext } from 'react'
const CONTEXT = createContext()


const globalMemory = {
    // test: "Hello Farzod!",
    // test2: "Hello Farzona!",
    // test3: "Hello Ramiz!",
    geolocation: {
        lat: 0,  // широта
        lon: 0   // долгота
    }
}



export { CONTEXT, globalMemory }
