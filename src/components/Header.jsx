import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500" />
          <span className="font-semibold tracking-tight">simple app</span>
        </div>
        <nav className="text-sm text-slate-600">
          <a href="#api" className="hover:text-slate-900 transition-colors">API Demo</a>
        </nav>
      </div>
    </header>
  );
}
