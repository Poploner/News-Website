import Tech from "./assets/components/Tech"
import Politics from "./assets/components/Politics"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Sports from "./assets/components/Sport"
import Business from "./assets/components/business"
import Home from "./assets/components/Home"
import Hailth from "./assets/components/Hailth"
import Footer from "./assets/components/Footer"
import Header from "./assets/components/Header"
import ScrollToTop from "./assets/components/Scroll"
export default function App () {
    return (

        <>
            <Header />
            <ScrollToTop />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/hailth" element={<Hailth />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/business" element={<Business />} />
            </Routes>
            <Footer />
            {/* <Route path="/business" element={<Business />} /> testing */}

            
        </>
    )
}
