import { BrowserRouter } from 'react-router-dom'
import AllComponents from "./components/AllComponents"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CONTEXT, globalMemory } from "../store"

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

