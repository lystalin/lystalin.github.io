import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import AboutMe from './components/about';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div id = 'whole'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path = '/about/' element = {<AboutMe />} exact />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
