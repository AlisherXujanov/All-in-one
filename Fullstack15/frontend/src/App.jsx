import { BrowserRouter } from 'react-router-dom'
import AllComponents from "./components/AllComponents"

// router   =>  путь к странице
function App() {

  return (
    <BrowserRouter>
      <AllComponents />
    </BrowserRouter>
  )
}
export default App

