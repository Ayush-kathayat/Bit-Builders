import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./pages/landingPage/landingPage";
import Home from "./pages/homePage/home";
import Quiz from './pages/quizPage/Quiz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
