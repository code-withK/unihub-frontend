import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import NotificationPanel from './NotificationPanel';

export default function Navbar({ searchQuery, setSearchQuery, notifications, setNotifications, setActiveTab }) {
  const [showNotifs, setShowNotifs] = useState(false);
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <>
      <style>{`
        .navbar {
          height: var(--header-height);
          background-color: var(--bg-card);
          border-bottom: 1px solid var(--border-color);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 20px; position: sticky; top: 0; z-index: 90;
          width: 100%; box-sizing: border-border-box;
        }
        .search-bar {
          display: flex; align-items: center; gap: 8px;
          background-color: var(--bg-main); border: 1px solid var(--border-color);
          padding: 6px 12px; border-radius: 20px; width: 280px; max-width: 50%;
        }
        .search-input { border: none; background: transparent; outline: none; width: 100%; font-size: 0.85rem; }
        .nav-actions { display: flex; align-items: center; gap: 12px; position: relative; }
        .icon-btn {
          background: transparent; border: 1px solid var(--border-color);
          padding: 7px; border-radius: 50%; cursor: pointer;
          display: flex; align-items: center; justify-content: center; position: relative;
        }
        .notification-badge {
          position: absolute; top: -2px; right: -2px;
          background-color: var(--priority-high); color: white;
          font-size: 0.6rem; font-weight: 700; width: 15px; height: 15px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
        .profile-btn { display: flex; align-items: center; gap: 8px; border: none; background: transparent; cursor: pointer; }
        .avatar {
          width: 30px; height: 30px; border-radius: 50%;
          background-color: var(--accent-soft); color: var(--accent-primary);
          display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.8rem;
        }
        @media (max-width: 640px) {
          .search-bar { width: 140px; }
          .profile-name { display: none; }
        }
      `}</style>

      <header className="navbar">
        <div className="search-bar">
          <Search size={15} color="var(--text-secondary)" />
          <input
            type="text"
            className="search-input"
            placeholder="Search updates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setShowNotifs(!showNotifs)}>
            <Bell size={17} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>

          {showNotifs && (
            <NotificationPanel
              notifications={notifications}
              setNotifications={setNotifications}
              onClose={() => setShowNotifs(false)}
            />
          )}

          <button className="profile-btn" onClick={() => setActiveTab('profile')}>
            <div className="avatar">JS</div>
            <span className="profile-name" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Alex Student</span>
          </button>
        </div>
      </header>
    </>
  );
}