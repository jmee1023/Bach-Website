import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import ImageDescription from './components/ImageDescription';
import Navbar from './components/Navbar';
import testImage from './resources/test.jpg'
import pool from './resources/pool.jpg'
import Team from './components/Team';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
