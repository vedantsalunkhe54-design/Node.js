// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DisasterPage from './pages/DisasterPage';
import data from './data/store.json';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-200">
    {/* EMERGENCY BANNER */}
    {data.activeAlert && (
      <div className="bg-red-600 text-white font-bold text-sm py-2 px-4 text-center tracking-wide uppercase shadow-sm">
        {data.activeAlert}
      </div>
    )}
    
    {/* GLOBAL HEADER */}
    <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 hover:text-slate-700 transition-colors">
          RESCUE_INFO
        </Link>
      </div>
    </header>

    {/* MAIN CONTENT */}
    <main className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 leading-relaxed">
      {children}
    </main>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/calamity/:id" element={<DisasterPage data={data} />} />
        </Routes>
      </Layout>
    </Router>
  );
}