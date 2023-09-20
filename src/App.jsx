import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landingPage/landingPage";
import Home from "./pages/homePage/home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
