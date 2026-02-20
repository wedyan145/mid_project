import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Facepage from './comp/Facepage'
import Signin from './comp/signin'
import './assets/css/page.css'
import "./assets/css/signin.css"
import "./assets/css/button.css"
import Button1 from './comp/button1'
import "./assets/css/tabel.css"
import './assets/css/theme.css'
import Button2 from './comp/button2'
import "./assets/css/button2.css"
import ExamPage from './comp/exam'
import "./assets/css/exam.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Facepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/button1" element={<Button1 />} />
        <Route path="*" element={<Facepage />} />
        <Route path='/button2' element={<Button2/>}/>
        <Route path='/exam' element={<ExamPage/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
