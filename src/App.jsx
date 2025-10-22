import Tech from "./assets/components/Tech"
import Politics from "./assets/components/Politics"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Sports from "./assets/components/Sport"
import Business from "./assets/components/business"
import Home from "./assets/components/Home"
import Hailth from "./assets/components/Hailth"
export default function App () {
    return (

        <>
            <Routes>
                <Route index element={<Politics />} />
                <Route path="/home" element={<Home />}/>
                 <Route path="/health" element={<Hailth />}/>
                <Route path="/Tech" element={<Tech />}/>
                <Route path="/Sports" element={<Sports />}/>
                <Route path="/Business" element={<Business />}/>
            </Routes>
            
            
        </>
    )
}
