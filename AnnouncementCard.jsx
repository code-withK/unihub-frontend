import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Tag } from 'lucide-react';

export default function AnnouncementCard({ item, onMarkRead }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card" style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, wordBreak: 'break-word' }}>{item.title}</h3>
        <span className={`badge ${item.priority === 'High' ? 'badge-high' : 'badge-medium'}`}>
          {item.priority}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '8px', margin: '8px 0', fontSize: '0.78rem', color: 'var(--text-secondary)', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.source}</span>
        <span>•</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Calendar size={12} /> {item.date}</span>
        <span>•</span>
        <span className="badge badge-category"><Tag size={11} /> {item.category}</span>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.4, wordBreak: 'break-word' }}>{item.summary}</p>

      {expanded && (
        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed var(--border-color)', fontSize: '0.85rem', wordBreak: 'break-word' }}>
          {item.content}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
        <button className="btn-secondary" style={{ fontSize: '0.78rem', padding: '5px 10px' }} onClick={() => setExpanded(!expanded)}>
          {expanded ? <>Less Details <ChevronUp size={13} /></> : <>View Details <ChevronDown size={13} /></>}
        </button>
        
        {!item.isRead && onMarkRead && (
          <button onClick={() => onMarkRead(item.id)} style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontSize: '0.78rem', cursor: 'pointer' }}>
            Mark as read
          </button>
        )}
      </div>
    </div>
  );
}