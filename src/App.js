import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav"
import VerticalNavigation from "./components/navigation/VerticalNavigation"
import SpecComponent from "./components/Estimating/SpecComponent";
import EstimatingStartScreen from "./components/Estimating/EstimatingStartScreen"
import EstimatingDetails from "./components/Estimating/EstimatingDetails"
import Header from "./components/Header"
import EstimatingNav from "./components/Estimating/EstimatingNav"


const App =()=>{
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return(
        <>
        <Header />
        <VerticalNavigation toggle={toggleSidebar} isOpen={sidebarIsOpen}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<EstimatingNav />} />
        </Routes>
        </>
    )
}

export default App