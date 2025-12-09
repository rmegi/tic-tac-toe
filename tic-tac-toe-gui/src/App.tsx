import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Navbar from "./features/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
