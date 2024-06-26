import { BrowserRouter } from 'react-router-dom'
import AllComponents from "./components/AllComponents"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// router   =>  путь к странице
function App() {

  return (
    <>
      <ToastContainer />
      
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </>
  )
}
export default App

