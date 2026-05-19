import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import TypeDetail from "./pages/TypeDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:type" element={<Result />} />
          <Route path="/type/:type" element={<TypeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
