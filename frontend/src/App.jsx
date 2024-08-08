import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Protected from "./pages/Protected"
import NavBar from "./components/NavBar"
import CustomAlert from "./components/CustomAlert"

function App() {
  return (
    <>
      <NavBar/>
      <CustomAlert/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/protected" element={<Protected/>}/>
      </Routes>
    </>
  )
}

export default App
