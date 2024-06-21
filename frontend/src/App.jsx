import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FTPage from "./pages/FTPage/FTPage.jsx";
import STPage from "./pages/STPage/STPage.jsx";
import TTPage from "./pages/TTPage/TTPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<HomePage />} />
          <Route path="/ft" element={<FTPage />} />
          <Route path="/st/" element={<STPage />} />
          <Route path="/tt/" element={<TTPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
