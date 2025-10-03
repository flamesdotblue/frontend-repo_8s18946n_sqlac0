export default function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const raw = (req.query && (req.query.name || req.query.n)) || '';
  const name = typeof raw === 'string' ? raw.trim() : '';
  const safeName = name.length ? name : 'amigo';

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.status(200).json({ message: `¡Hola, ${safeName}!` });
}
