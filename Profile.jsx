import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Profile() {
  const [interests, setInterests] = useState(['Computer Science', 'Design']);
  const available = ['Computer Science', 'Business', 'Design', 'Sports', 'Entrepreneurship', 'Research', 'AI'];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Student Profile</h1>
        <p>Personalize your interests for AI recommendation filters.</p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>Alex Student</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>B.Tech CS - Semester 3</p>
          <div style={{ marginTop: '12px', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div><strong>Email:</strong> alex.s@campus.edu</div>
            <div><strong>Student ID:</strong> CS2026-0941</div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>Your Preferred Tags</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {available.map((tag) => {
              const selected = interests.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => {
                    setInterests(selected ? interests.filter(i => i !== tag) : [...interests, tag]);
                  }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 10px', borderRadius: '20px',
                    border: selected ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                    backgroundColor: selected ? 'var(--accent-soft)' : 'white',
                    color: selected ? 'var(--accent-primary)' : 'var(--text-secondary)', cursor: 'pointer',
                    fontSize: '0.78rem'
                  }}
                >
                  {selected && <Check size={12} />} {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}