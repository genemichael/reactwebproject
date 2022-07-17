import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav"
import SideBar from "./components/Sidebar"
import SpecComponent from "./components/Estimating/SpecComponent";


const App =()=>{
    return(
        <>
        <SideBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<SpecComponent />} />
        </Routes>
        </>
    )
}

export default App