// pages/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wind, Activity, Waves, Mountain, Thermometer, Phone, AlertTriangle } from 'lucide-react';

// Icon Map for dynamic rendering
const IconMap = { Wind, Activity, Waves, Mountain, Thermometer };

export default function HomePage({ data }) {
  const [search, setSearch] = useState('');

  const filteredDisasters = data.disasters.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* LEFT COLUMN: Search & Grid */}
      <div className="flex-1 w-full">
        {/* SEARCH INTERFACE */}
        <div className="mb-8 relative">
          <input 
            type="text" 
            autoFocus 
            placeholder="Type a calamity or your state..." 
            className="w-full text-lg md:text-xl p-4 md:p-5 rounded-xl border-2 border-slate-200 bg-white shadow-sm focus:border-slate-900 focus:ring-0 outline-none transition-all placeholder:text-slate-400 font-medium"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* QUICK ACCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDisasters.map((disaster) => {
            const Icon = IconMap[disaster.icon] || AlertTriangle;
            
            return (
              <Link 
                key={disaster.id} 
                to={`/calamity/${disaster.id}`}
                className="group relative flex items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-400 transition-all active:scale-95"
              >
                <div className="bg-slate-100 p-3 rounded-lg mr-4 group-hover:bg-slate-200 transition-colors">
                  <Icon className="w-8 h-8 text-slate-800" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900">{disaster.name}</h2>
                </div>
                {disaster.activeWarning && (
                  <span className="absolute top-4 right-4 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* RIGHT/BOTTOM COLUMN: Emergency Contacts */}
      <aside className="w-full md:w-80 shrink-0">
        <div className="bg-slate-900 text-white rounded-xl p-6 shadow-lg sticky top-24">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-6 h-6 text-red-400" />
            <h3 className="text-lg font-bold uppercase tracking-wide">Emergency SOS</h3>
          </div>
          <div className="space-y-4">
            {data.contacts.map((contact, idx) => (
              <a 
                key={idx} 
                href={`tel:${contact.number}`}
                className="flex items-center justify-between p-4 bg-slate-800 rounded-lg hover:bg-slate-700 active:bg-slate-600 transition-colors"
              >
                <span className="font-medium text-slate-200">{contact.name}</span>
                <span className="font-bold text-xl text-white tracking-wider">{contact.number}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}