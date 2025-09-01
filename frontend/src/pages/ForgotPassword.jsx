import { useState } from 'react';
import { api } from '../lib/api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    setMsg('');
    try { await api.post('/api/auth/forgot-password', { email }); setMsg('If the email exists, a reset link has been sent.'); } catch (e) { setMsg(e.message || 'Failed'); }
  };
  return (
    <div className="max-w-md mx-auto p-6 mt-16 bg-white/80 dark:bg-gray-900/80 rounded">
      <h1 className="text-xl mb-2">Forgot Password</h1>
      {msg && <div className="text-sm mb-2">{msg}</div>}
      <form onSubmit={submit} className="space-y-2">
        <input className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <button className="px-3 py-1 rounded bg-indigo-600 text-white">Send Reset Link</button>
      </form>
    </div>
  );
}
