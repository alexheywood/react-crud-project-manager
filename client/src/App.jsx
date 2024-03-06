import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateProcess from "./CreateProcess"
import UpdateProcess from "./UpdateProcess"
import Processes from "./Processes"
import Header from "./Header"
import Footer from "./Footer"
import Process from "./Process"
import NotFound from './NotFound'

function App() {


  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Processes />}></Route>
          <Route path='/create' element={<CreateProcess />}></Route>
          <Route path='/update/:id' element={<UpdateProcess />}></Route>
          <Route path='/process/:id' element={<Process />}></Route>
          <Route path="*" element={<NotFound />}
          />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
