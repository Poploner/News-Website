import Tech from "./assets/components/Tech"
import Politics from "./assets/components/Politics"
import { BrowserRouter as Router, Routes, Route } from "react-router"
export default function App () {
    return (

        <>
            <Routes>
                <Route index element={<Politics />} />
                <Route path="/Tech" element={<Tech />}/>
            </Routes>
        </>
    )
}
