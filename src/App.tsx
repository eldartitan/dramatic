import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./components/Layout";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/:category/:id" element={<DetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
