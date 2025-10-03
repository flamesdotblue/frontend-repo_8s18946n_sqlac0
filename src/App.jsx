import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ApiDemo from './components/ApiDemo.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="max-w-6xl mx-auto px-6 pb-16" aria-labelledby="api-demo-heading">
          <h2 id="api-demo-heading" className="sr-only">API Demo</h2>
          <ApiDemo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
