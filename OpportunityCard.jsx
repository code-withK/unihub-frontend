import React from 'react';
import { DollarSign } from 'lucide-react';

export default function OpportunityCard({ opportunity }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
          <span className="badge badge-category">{opportunity.type}</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--priority-high)', fontWeight: 600 }}>Due: {opportunity.deadline}</span>
        </div>

        <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: '8px', wordBreak: 'break-word' }}>{opportunity.title}</h3>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{opportunity.provider}</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--priority-low)', marginBottom: '10px' }}>
          <DollarSign size={14} /> Benefits: {opportunity.stipend}
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', wordBreak: 'break-word' }}>{opportunity.description}</p>
      </div>

      <button className="btn-secondary" style={{ marginTop: '14px', width: '100%', justifyContent: 'center' }}>
        Apply Now
      </button>
    </div>
  );
}