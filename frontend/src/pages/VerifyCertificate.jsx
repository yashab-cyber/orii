import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../lib/api';

export default function VerifyCertificate() {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true, valid: false, cert: null, error: '' });
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/api/public/verify/${id}`);
        setState({ loading: false, valid: res.valid, cert: res.certificate, error: '' });
      } catch (e) {
        setState({ loading: false, valid: false, cert: null, error: e.message || 'Not found' });
      }
    })();
  }, [id]);
  if (state.loading) return <div className="max-w-xl mx-auto p-6 mt-16">Verifying…</div>;
  if (!state.valid) return <div className="max-w-xl mx-auto p-6 mt-16">Invalid or not found.</div>;
  const c = state.cert;
  return (
    <div className="max-w-xl mx-auto p-6 mt-16 bg-white/80 dark:bg-gray-900/80 rounded">
      <h1 className="text-2xl font-semibold mb-2">ORII Certificate Verification</h1>
      <div>Member: <b>{c.userId?.name}</b></div>
      <div>Project: <b>{c.projectId?.title}</b></div>
      <div>Issued: {new Date(c.issuedAt).toLocaleDateString()}</div>
      <div className="text-sm opacity-70 mt-2">Certificate ID: {c.certificateId}</div>
    </div>
  );
}
