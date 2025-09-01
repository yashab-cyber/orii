import { useEffect, useState } from 'react';
import { api, BASE_URL } from '../../lib/api';

export default function Updates() {
  const [mine, setMine] = useState([]);
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', projectId: '' });
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');
  useEffect(() => {
    (async () => {
      setMine(await api.get('/api/updates/mine'));
      setProjects(await api.get('/api/member/projects/assigned'));
    })();
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    setMsg('');
    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('description', form.description);
    fd.append('projectId', form.projectId);
    if (file) fd.append('file', file);
    try {
      const res = await api.upload('/api/updates/submit', fd);
      setMsg('Submitted');
      setMine([res, ...mine]);
      setForm({ title: '', description: '', projectId: '' });
      setFile(null);
    } catch (e) {
      setMsg(e.message || 'Failed');
    }
  };
  return (
    <div className="space-y-6">
      <form onSubmit={submit} className="p-4 rounded bg-white/70 dark:bg-gray-900/60 space-y-2">
        <h3 className="font-semibold">Submit Update</h3>
        {msg && <div className="text-sm">{msg}</div>}
        <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <select className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" value={form.projectId} onChange={(e) => setForm({ ...form, projectId: e.target.value })}>
          <option value="">Select Project</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>{p.title}</option>
          ))}
        </select>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button className="px-3 py-1 rounded bg-indigo-600 text-white">Submit</button>
      </form>
      <div>
        <h3 className="font-semibold mb-2">Past Updates</h3>
        <div className="space-y-2">
          {mine.map((u) => (
            <div key={u._id} className="p-3 rounded bg-white/70 dark:bg-gray-900/60">
              <div className="font-semibold">{u.title} <span className="text-xs opacity-70">({u.status})</span></div>
              <div className="text-sm opacity-70">{u.description}</div>
              {u.fileUrl && <a className="text-indigo-600 text-sm" href={`${BASE_URL}${u.fileUrl}`} target="_blank">View file</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
