import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../lib/api';

export default function ResetPassword() {
  const [sp] = useSearchParams();
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      await api.post('/api/auth/reset-password', { token: sp.get('token'), password });
      setMsg('Password updated. You can now log in.');
    } catch (e) {
      setMsg(e.message || 'Failed');
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 mt-16 bg-white/80 dark:bg-gray-900/80 rounded">
      <h1 className="text-xl mb-2">Reset Password</h1>
      {msg && <div className="text-sm mb-2">{msg}</div>}
      <form onSubmit={submit} className="space-y-2">
        <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="New Password" type="password" />
        <button className="px-3 py-1 rounded bg-indigo-600 text-white">Set Password</button>
      </form>
    </div>
  );
}
