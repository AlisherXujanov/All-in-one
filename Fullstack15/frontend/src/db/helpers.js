function globalReducer(state, action) {
    // state = {}
    // action = {type: 'SET', payload: "..."}

    switch (action.type) {
        case "setFarzod":
            return { ...state, test: action.payload }
        case "setFarzona":
            return { ...state, test: action.payload }
        case "inc":
            return { ...state, counter: state.counter + 1 }
        case "dec":
            return { ...state, counter: state.counter - 1 }
    }
}


export { globalReducer }

