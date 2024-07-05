import { BrowserRouter } from 'react-router-dom'
import AllComponents from "./components/AllComponents"
import 'react-toastify/dist/ReactToastify.css'
import { CONTEXT, globalMemory } from './db'
import { ToastContainer } from 'react-toastify'

// router   =>  путь к странице
function App() {

  return (
    <CONTEXT.Provider value={globalMemory}>
      <ToastContainer />

      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </CONTEXT.Provider>
  )
}
export default App

