import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Formation from "./pages/Formation";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Projetos from "./pages/Projetos";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formation" element={<Formation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projetos />} />
                <Route path="/thanks" element={<Thanks />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;