export const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const jsonHeaders = () => ({ 'Content-Type': 'application/json' });
const authHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const handle = async (res) => {
  const ct = res.headers.get('content-type') || '';
  const body = ct.includes('application/json') ? await res.json() : await res.text();
  if (!res.ok) throw (typeof body === 'object' ? body : { message: body || res.statusText });
  return body;
};

export const api = {
  get: (path) => fetch(`${BASE_URL}${path}`, { headers: { ...authHeader() } }).then(handle),
  post: (path, data) =>
    fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { ...jsonHeaders(), ...authHeader() },
      body: JSON.stringify(data),
    }).then(handle),
  put: (path, data) =>
    fetch(`${BASE_URL}${path}`, {
      method: 'PUT',
      headers: { ...jsonHeaders(), ...authHeader() },
      body: JSON.stringify(data),
    }).then(handle),
  del: (path) => fetch(`${BASE_URL}${path}`, { method: 'DELETE', headers: { ...authHeader() } }).then(handle),
  upload: (path, formData) =>
    fetch(`${BASE_URL}${path}`, { method: 'POST', headers: { ...authHeader() }, body: formData }).then(handle),
};

export const setToken = (token) => {
  if (token) localStorage.setItem('token', token);
  else localStorage.removeItem('token');
};
