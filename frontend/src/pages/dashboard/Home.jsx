import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

export default function Home() {
  const [stats, setStats] = useState({ projects: 0, updates: 0, certs: 0 });
  const [anns, setAnns] = useState([]);
  useEffect(() => {
    (async () => {
      const [assigned, updates, certs, announcements] = await Promise.all([
        api.get('/api/member/projects/assigned'),
        api.get('/api/updates/mine'),
        api.get('/api/certificates/mine'),
        api.get('/api/announcements'),
      ]);
      setStats({ projects: assigned.length, updates: updates.length, certs: certs.length });
      setAnns(announcements);
    })();
  }, []);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">Assigned Projects: <b>{stats.projects}</b></div>
        <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">Submitted Updates: <b>{stats.updates}</b></div>
        <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">Certificates: <b>{stats.certs}</b></div>
      </div>
      <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">
        <h3 className="font-semibold mb-2">Announcements</h3>
        <ul className="space-y-2">
          {anns.map((a) => (
            <li key={a._id} className="border-b border-gray-200/40 pb-2"><b>{a.title}</b><div className="text-sm opacity-70">{a.content}</div></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
