import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [anns, setAnns] = useState([]);
  const load = async () => setAnns(await api.get('/api/announcements'));
  useEffect(() => { load(); }, []);
  const create = async (e) => {
    e.preventDefault();
    await api.post('/api/admin/announcements', { title, content, audience: 'all' });
    setTitle(''); setContent('');
    load();
  };
  return (
    <div className="space-y-4">
      <form onSubmit={create} className="p-4 rounded bg-white/70 dark:bg-gray-900/60 space-y-2">
        <h3 className="font-semibold">Post Announcement</h3>
        <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)} />
        <button className="px-3 py-1 rounded bg-indigo-600 text-white">Publish</button>
      </form>
      <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">
        <h3 className="font-semibold mb-2">Existing Announcements</h3>
        <ul className="space-y-2">
          {anns.map((a) => (
            <li key={a._id}><b>{a.title}</b> — <span className="opacity-70">{a.content}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
