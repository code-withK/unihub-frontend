import React from 'react';
import { Clock } from 'lucide-react';

export default function DeadlineCard({ deadline }) {
  const calculateDaysLeft = (targetDate) => {
    const today = new Date('2026-09-12');
    const target = new Date(targetDate);
    return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  };

  const daysLeft = calculateDaysLeft(deadline.dueDate);

  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
        <div style={{ 
          backgroundColor: daysLeft <= 3 ? 'var(--priority-high-bg)' : 'var(--accent-soft)',
          color: daysLeft <= 3 ? 'var(--priority-high)' : 'var(--accent-primary)',
          padding: '10px', borderRadius: '8px', flexShrink: 0
        }}>
          <Clock size={18} />
        </div>
        <div style={{ minWidth: 0 }}>
          <h4 style={{ fontSize: '0.92rem', fontWeight: 600, wordBreak: 'break-word' }}>{deadline.title}</h4>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{deadline.course} • Due {deadline.dueDate}</span>
        </div>
      </div>

      <span className={`badge ${daysLeft <= 3 ? 'badge-high' : 'badge-medium'}`} style={{ flexShrink: 0 }}>
        {daysLeft > 0 ? `${daysLeft}d left` : 'Today'}
      </span>
    </div>
  );
}