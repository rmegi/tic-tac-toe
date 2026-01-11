import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Navbar from "./features/navbar/navbar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
