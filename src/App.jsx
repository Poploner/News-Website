import Tech from "./assets/components/Tech"
import Politics from "./assets/components/Politics"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Sports from "./assets/components/Sport"
import Business from "./assets/components/business"
import Home from "./assets/components/Home"
import Hailth from "./assets/components/Hailth"
import Footer from "./assets/components/Footer"
export default function App () {
    return (

        <>
            <Routes>
                <Route path="/" element={<Footer />} />
                <Route path="/Politics" element={<Politics />} />
                <Route path="/Home" element={<Home />}/>
                 <Route path="/health" element={<Hailth />}/>
                <Route path="/Tech" element={<Tech />}/>
                <Route path="/Sports" element={<Sports />}/>
                <Route path="/Business" element={<Business />}/>
            </Routes>
            
            
        </>
    )
}
