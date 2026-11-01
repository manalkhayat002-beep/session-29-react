import { Route, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Food from "./Pages/Food"



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Food" element={<Food />}/>
        <Route path="/Drinks" element={<h1>Drinks</h1>}/>
    </Routes>

    </>
  )
}

export default App
