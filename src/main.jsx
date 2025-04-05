import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);
