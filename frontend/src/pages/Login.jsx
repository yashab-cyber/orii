import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      await login(email, password);
      window.location.href = '/dashboard';
    } catch (e) {
      setErr(e.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white/80 dark:bg-gray-900/80 rounded-lg mt-16 shadow">
      <h1 className="text-2xl font-semibold mb-4">Member Login</h1>
      {err && <div className="text-red-500 mb-2">{err}</div>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" />
        <button className="w-full py-2 rounded bg-indigo-600 text-white">Login</button>
      </form>
      <p className="text-sm mt-3 opacity-70">No account? Register via Join Us and verify your email.</p>
    </div>
  );
}
