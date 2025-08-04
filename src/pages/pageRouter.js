
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";




export default function PageRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

