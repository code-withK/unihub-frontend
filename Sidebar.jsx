import React from 'react';
import { LayoutDashboard, BellRing, Calendar, Briefcase, Clock, Bot, User, Sparkles } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'announcements', label: 'Announcements', icon: BellRing },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
    { id: 'deadlines', label: 'Deadlines', icon: Clock },
    { id: 'ai-assistant', label: 'AI Assistant', icon: Bot },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <>
      <style>{`
        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--bg-card);
          border-right: 1px solid var(--border-color);
          height: 100vh;
          position: fixed;
          left: 0; top: 0;
          display: flex; flex-direction: column;
          z-index: 100;
        }
        .sidebar-brand {
          padding: 16px 20px;
          display: flex; align-items: center; gap: 10px;
          border-bottom: 1px solid var(--border-color);
        }
        .brand-icon {
          background-color: var(--accent-primary);
          color: white; padding: 6px;
          border-radius: 8px; display: flex; align-items: center; justify-content: center;
        }
        .brand-name { font-weight: 700; font-size: 1.15rem; color: var(--text-primary); }
        .nav-list { list-style: none; padding: 12px 10px; display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .nav-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 8px;
          font-weight: 500; font-size: 0.9rem; color: var(--text-secondary);
          cursor: pointer; transition: all 0.2s;
        }
        .nav-item:hover { background-color: var(--bg-main); color: var(--text-primary); }
        .nav-item.active { background-color: var(--accent-soft); color: var(--accent-primary); }
        
        .mobile-nav { display: none; }
        @media (max-width: 768px) {
          .sidebar { display: none; }
          .mobile-nav {
            display: flex; position: fixed; bottom: 0; left: 0; right: 0;
            width: 100vw;
            background: white; border-top: 1px solid var(--border-color);
            justify-content: space-around; padding: 8px 0; z-index: 1000;
          }
          .mobile-nav-item {
            display: flex; flex-direction: column; align-items: center;
            font-size: 0.65rem; color: var(--text-secondary);
            border: none; background: transparent; cursor: pointer; gap: 2px;
          }
          .mobile-nav-item.active { color: var(--accent-primary); }
        }
      `}</style>

      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Sparkles size={18} />
          </div>
          <span className="brand-name">CampusAI</span>
        </div>
        <ul className="nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`mobile-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}