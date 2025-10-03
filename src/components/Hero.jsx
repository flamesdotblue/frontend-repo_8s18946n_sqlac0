import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          simple app
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
          This homepage calls a serverless API that responds with a friendly Spanish greeting.
          Type your name and see it in action.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/60 via-cyan-50/40 to-transparent" />
    </section>
  );
}
