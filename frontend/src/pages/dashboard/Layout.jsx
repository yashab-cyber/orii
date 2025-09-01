import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NavItem = ({ to, label }) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link to={to} className={`block px-3 py-2 rounded ${active ? 'bg-indigo-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`}>
      {label}
    </Link>
  );
};

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  return (
    <div className="flex min-h-[70vh] max-w-7xl mx-auto">
      <aside className="w-60 p-4 space-y-2 bg-white/70 dark:bg-gray-900/60 rounded mr-4">
        <div className="mb-4">
          <div className="text-sm opacity-70">Signed in as</div>
          <div className="font-semibold">{user?.name}</div>
          <div className="text-xs opacity-60">{user?.role}</div>
        </div>
        <NavItem to="/dashboard" label="Home" />
        <NavItem to="/dashboard/projects" label="Projects" />
        <NavItem to="/dashboard/updates" label="Updates" />
        <NavItem to="/dashboard/certificates" label="Certificates" />
        <NavItem to="/dashboard/profile" label="Profile" />
        {(user?.role === 'admin' || user?.role === 'lead') && <NavItem to="/dashboard/admin" label="Admin" />}
        <button onClick={logout} className="mt-4 w-full py-2 rounded bg-gray-200 dark:bg-gray-800">Logout</button>
      </aside>
      <main className="flex-1 p-2">
        <Outlet />
      </main>
    </div>
  );
}
