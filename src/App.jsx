import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardComponent from "./components/CardComponent";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
