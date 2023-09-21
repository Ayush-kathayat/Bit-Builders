import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./pages/landingPage/landingPage";
import Home from "./pages/homePage/Home";
import Quiz from './pages/quizPage/Quiz';
import Auth from './pages/authentication/Auth'

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/auth" element={<Auth />} />

      </Routes>
    </Router>
  );
};

export default App;
