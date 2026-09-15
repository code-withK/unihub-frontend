import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventCard({ event }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <span className="badge badge-category">{event.category}</span>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: '8px', wordBreak: 'break-word' }}>{event.title}</h3>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '10px' }}>Organized by {event.organizer}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={13} /> {event.date}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={13} /> {event.time}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={13} /> {event.location}</div>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', wordBreak: 'break-word' }}>{event.description}</p>
      </div>

      <button className="btn-primary" style={{ marginTop: '14px', width: '100%', justifyContent: 'center' }}>
        Register Now
      </button>
    </div>
  );
}