import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Formation from "./pages/Formation";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formation" element={<Formation />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;