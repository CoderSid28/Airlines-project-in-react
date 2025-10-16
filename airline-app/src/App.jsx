import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login.jsx';
import OurAircraft from './pages/OurAircraft';
import Safety from './pages/Safety';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import './index.css'; 
import Charters from './pages/Charters';


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                   
                    <Route path="/" element={<Home />} />
                    
                    
                    <Route path="/aircraft" element={<OurAircraft />} />
                    <Route path="/safety" element={<Safety />} />
                    
                   
                    <Route path="/charters" element={<Charters />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;