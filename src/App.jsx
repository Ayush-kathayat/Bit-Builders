import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landingPage/landing";
import Home from "./pages/homePage/home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
