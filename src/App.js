import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav"
import SideBar from "./components/Sidebar"
import SpecComponent from "./components/Estimating/SpecComponent";
import EstimatingStartScreen from "./components/Estimating/EstimatingStartScreen"



const App =()=>{
    return(
        <>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<EstimatingStartScreen />} />
        </Routes>
        </>
    )
}

export default App