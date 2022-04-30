
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Header />
      <Routes>
       

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>

      </>
   
  );
}

export default App;
