// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hammer, Zap, Star, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Expose from './pages/Expose';
import ExposeReadingPage from './pages/ExposeReadingPage';
import News from './pages/News';
import NewsReadingPage from './pages/NewsReadingPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-worker-black-950 via-revolutionary-red-950 to-worker-black-950 revolutionary-bg">
        {/* Revolutionary background overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-revolutionary-red-950/20 via-transparent to-revolutionary-red-950/20 pointer-events-none z-0"></div>
        
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-revolutionary-red-600/5 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-revolutionary-red-600/5 rounded-full animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/expose" element={<Expose />} />
              <Route path="/expose/:id" element={<ExposeReadingPage />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id/:slug" element={<NewsReadingPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
        
        {/* Floating revolutionary symbols using Lucide icons */}
        <div className="fixed top-1/4 left-4 text-revolutionary-red-600 opacity-10 animate-pulse pointer-events-none z-0">
          <Hammer size={64} />
        </div>
        <div className="fixed bottom-1/4 right-4 text-revolutionary-red-600 opacity-10 animate-pulse pointer-events-none z-0" style={{animationDelay: '1s'}}>
          <Shield size={64} />
        </div>
        <div className="fixed top-1/2 right-1/4 text-revolutionary-red-600 opacity-10 animate-pulse pointer-events-none z-0" style={{animationDelay: '2s'}}>
          <Star size={56} />
        </div>
        <div className="fixed bottom-1/3 left-1/4 text-revolutionary-red-600 opacity-10 animate-pulse pointer-events-none z-0" style={{animationDelay: '3s'}}>
          <Zap size={56} />
        </div>
      </div>
    </Router>
  );
}

export default App;