import React from 'react';
import { X } from 'lucide-react';

export default function NotificationPanel({ notifications, setNotifications, onClose }) {
  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  return (
    <div style={{
      position: 'absolute', top: '45px', right: 0, width: '280px', maxWidth: '90vw',
      background: 'white', border: '1px solid var(--border-color)', borderRadius: '12px',
      boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.1)', zIndex: 100, overflow: 'hidden'
    }}>
      <div style={{
        padding: '10px 14px', backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-color)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 600 }}>Notifications</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={markAllRead} style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontSize: '0.75rem', cursor: 'pointer' }}>
            Read all
          </button>
          <X size={15} style={{ cursor: 'pointer' }} onClick={onClose} />
        </div>
      </div>
      <ul style={{ listStyle: 'none', maxHeight: '250px', overflowY: 'auto' }}>
        {notifications.map((item) => (
          <li key={item.id} style={{
            padding: '10px 14px', borderBottom: '1px solid var(--border-color)', fontSize: '0.82rem',
            backgroundColor: item.unread ? 'var(--accent-soft)' : 'white'
          }}>
            <div style={{ fontWeight: 600, wordBreak: 'break-word' }}>{item.title}</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '2px', wordBreak: 'break-word' }}>{item.message}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>{item.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}