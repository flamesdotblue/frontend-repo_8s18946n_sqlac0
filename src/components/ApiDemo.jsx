import React, { useState } from 'react';

export default function ApiDemo() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const qs = new URLSearchParams({ name: name.trim() || '' }).toString();
      const res = await fetch(`/api/sayhelloinspanish?${qs}`);
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      setResponse(data?.message || '');
    } catch (err) {
      setError(err.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="api" className="w-full">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
          <h2 className="text-base md:text-lg font-semibold tracking-tight">Say hello (in Spanish)</h2>
          <p className="text-sm text-slate-600">This calls the serverless function at <code className="font-mono">/api/sayhelloinspanish</code>.</p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="text"
              className="w-full h-11 rounded-lg border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Name"
            />
            <button
              type="submit"
              className="h-11 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Calling API…' : 'Greet me'}
            </button>
          </form>

          <div className="mt-6">
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                {error}
              </div>
            )}
            {response && !error && (
              <div className="rounded-lg border border-green-200 bg-green-50 text-green-800 px-4 py-3 text-sm">
                {response}
              </div>
            )}
            {!response && !error && (
              <div className="text-sm text-slate-600">
                Tip: Try entering a name like <span className="font-medium text-slate-900">Lucía</span> and click "Greet me".
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
