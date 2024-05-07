import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import './App.css';

function App() {
  return (
    <div id = 'body'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
