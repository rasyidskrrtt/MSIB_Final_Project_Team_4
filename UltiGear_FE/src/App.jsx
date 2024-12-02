import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Regist from './pages/Regist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/regist" element={<Regist />} />
      </Routes>
    </Router>
  );
}

export default App;
