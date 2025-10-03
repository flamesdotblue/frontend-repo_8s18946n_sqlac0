import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-slate-600">
        <span>© {new Date().getFullYear()} simple app</span>
        <a className="hover:text-slate-900" href="#top">Back to top</a>
      </div>
    </footer>
  );
}
