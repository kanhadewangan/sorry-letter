import EnvelopePage from './pages/EnvelopePage';
import LetterPage from './pages/LetterPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<EnvelopePage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </AnimatePresence>
  );
}

import BackgroundAudio from './components/BackgroundAudio';

function App() {
  return (
    <Router>
      <BackgroundAudio />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
