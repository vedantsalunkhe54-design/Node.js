// pages/DisasterPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function DisasterPage({ data }) {
  const { id } = useParams();
  const disaster = data.disasters.find(d => d.id === id);

  if (!disaster) return <Navigate to="/" />;

  return (
    <div className="w-full">
      {/* BACK NAVIGATION */}
      <Link 
        to="/" 
        className="inline-flex items-center text-slate-600 font-semibold mb-6 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Safety Portal
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900">{disaster.name} Protocol</h1>
        {disaster.activeWarning && (
          <span className="px-3 py-1 bg-red-100 text-red-700 font-bold rounded-md uppercase text-sm border border-red-200 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Active Threat
          </span>
        )}
      </div>

      {/* 3-STEP ACTION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* PHASE 1: BEFORE */}
        <section className="bg-white rounded-xl border border-yellow-200 shadow-sm overflow-hidden flex flex-col">
          <header className="bg-yellow-400 p-4 border-b border-yellow-500">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-wide">1. Preparation</h2>
            <p className="text-slate-800 text-sm font-medium">Before the disaster strikes</p>
          </header>
          <ul className="p-6 space-y-4 flex-1">
            {disaster.phases.before.map((step, idx) => (
              <li key={idx} className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs flex items-center justify-center mr-3 shrink-0 mt-0.5">{idx + 1}</span>
                <span className="text-slate-700 font-medium text-lg leading-snug">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PHASE 2: DURING (CRITICAL) */}
        <section className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden flex flex-col">
          <header className="bg-red-600 p-4 border-b border-red-700">
            <h2 className="text-xl font-black text-white uppercase tracking-wide">2. Immediate Survival</h2>
            <p className="text-red-100 text-sm font-medium">During the event</p>
          </header>
          <ul className="p-6 space-y-5 flex-1 bg-red-50/30">
            {disaster.phases.during.map((step, idx) => (
              <li key={idx} className="flex items-start border-l-4 border-red-500 pl-3">
                <span className="text-slate-900 font-bold text-xl leading-snug uppercase tracking-tight">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PHASE 3: AFTER */}
        <section className="bg-white rounded-xl border border-green-200 shadow-sm overflow-hidden flex flex-col">
          <header className="bg-green-600 p-4 border-b border-green-700">
            <h2 className="text-xl font-black text-white uppercase tracking-wide">3. Recovery</h2>
            <p className="text-green-100 text-sm font-medium">After the threat passes</p>
          </header>
          <ul className="p-6 space-y-4 flex-1">
            {disaster.phases.after.map((step, idx) => (
              <li key={idx} className="flex items-start">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 mr-3 shrink-0"></div>
                <span className="text-slate-700 font-medium text-lg leading-snug">{step}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}