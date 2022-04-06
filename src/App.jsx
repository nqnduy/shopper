import { Route, Routes } from "react-router-dom";
import styles from "./assets/styles/styles.scss";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
