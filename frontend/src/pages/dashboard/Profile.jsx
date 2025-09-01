import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

export default function Profile() {
  const [form, setForm] = useState({ name: '', institution: '', bio: '', researchInterests: [] });
  const [msg, setMsg] = useState('');
  useEffect(() => {
    (async () => {
      const me = await api.get('/api/auth/me');
      const u = me.user;
      setForm({
        name: u.name || '',
        institution: u.institution || '',
        bio: u.bio || '',
        researchInterests: u.researchInterests || [],
      });
    })();
  }, []);
  const save = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await api.put('/api/auth/profile', form);
      setMsg('Saved');
    } catch (e) {
      setMsg(e.message || 'Failed');
    }
  };
  return (
    <form onSubmit={save} className="space-y-2 p-4 rounded bg-white/70 dark:bg-gray-900/60">
      <h3 className="font-semibold">Profile</h3>
      {msg && <div className="text-sm">{msg}</div>}
      <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" />
      <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })} placeholder="Institution" />
      <textarea className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} placeholder="Bio" />
      <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" value={form.researchInterests.join(', ')} onChange={(e) => setForm({ ...form, researchInterests: e.target.value.split(',').map(s=>s.trim()).filter(Boolean) })} placeholder="Research interests (comma separated)" />
      <button className="px-3 py-1 rounded bg-indigo-600 text-white">Save</button>
    </form>
  );
}
