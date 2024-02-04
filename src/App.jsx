import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Footer from './Components/Footer'
import Main from './Pages/Main'
import Dashboard from './Pages/Dashboard'
import Header from './components/Header'



function App() {

  return (
    <>
    <Header/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/main' element={<Main/>}></Route>
  <Route path='/dash' element={<Dashboard/>}></Route>
  <Route path='/*' element={<Navigate to={'/'}/>}></Route>

</Routes>
<Footer/>
    </>
  )
}

export default App
