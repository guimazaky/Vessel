import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/loginpage" element={<LoginPage />} />
    </Routes>
  </Router>
);
