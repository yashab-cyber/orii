import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../lib/api';

export default function Verify() {
  const [sp] = useSearchParams();
  const [msg, setMsg] = useState('Verifying…');
  useEffect(() => {
    (async () => {
      try {
        const token = sp.get('token');
        if (!token) return setMsg('Missing token');
        await api.get(`/api/auth/verify?token=${encodeURIComponent(token)}`);
        setMsg('Email verified. You can now log in.');
      } catch (e) {
        setMsg(e.message || 'Verification failed');
      }
    })();
  }, []);
  return <div className="max-w-md mx-auto p-6 mt-16 bg-white/80 dark:bg-gray-900/80 rounded">{msg}</div>;
}
