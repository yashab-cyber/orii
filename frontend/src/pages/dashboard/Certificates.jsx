import { useEffect, useState } from 'react';
import { api, BASE_URL } from '../../lib/api';

export default function Certificates() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => setItems(await api.get('/api/certificates/mine')))();
  }, []);
  return (
    <div className="space-y-2">
      {items.map((c) => (
        <div key={c._id} className="p-3 rounded bg-white/70 dark:bg-gray-900/60">
          <div className="font-semibold">Certificate</div>
          <a className="text-sm text-indigo-600" href={`${BASE_URL}${c.certificateUrl}`} target="_blank">Download PDF</a>
        </div>
      ))}
    </div>
  );
}
