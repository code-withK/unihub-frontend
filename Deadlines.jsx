import React from 'react';
import DeadlineCard from '../components/DeadlineCard';

export default function Deadlines({ deadlines }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Academic & Campus Deadlines</h1>
        <p>Track assignment due dates and registration cutoffs.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {deadlines.map((dl) => (
          <DeadlineCard key={dl.id} deadline={dl} />
        ))}
      </div>
    </div>
  );
}