import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

export default function Projects() {
  const [assigned, setAssigned] = useState([]);
  const [open, setOpen] = useState([]);
  const [msg, setMsg] = useState('');
  useEffect(() => {
    (async () => {
      setAssigned(await api.get('/api/member/projects/assigned'));
      setOpen(await api.get('/api/member/projects/open'));
    })();
  }, []);
  const join = async (projectId) => {
    setMsg('');
    try {
      const res = await api.post('/api/member/projects/join', { projectId });
      setMsg(res.message);
    } catch (e) {
      setMsg(e.message || 'Failed');
    }
  };
  return (
    <div className="space-y-6">
      <section>
        <h3 className="font-semibold mb-2">Assigned Projects</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {assigned.map((p) => (
            <div key={p._id} className="p-4 rounded bg-white/70 dark:bg-gray-900/60">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm opacity-70">{p.description}</div>
              <div className="text-xs mt-1">Status: {p.status}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-semibold mb-2">Open Projects</h3>
        {msg && <div className="mb-2 text-sm">{msg}</div>}
        <div className="grid md:grid-cols-2 gap-3">
          {open.map((p) => (
            <div key={p._id} className="p-4 rounded bg-white/70 dark:bg-gray-900/60">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm opacity-70">{p.description}</div>
              <button onClick={() => join(p._id)} className="mt-2 px-3 py-1 rounded bg-indigo-600 text-white text-sm">Request to Join</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
