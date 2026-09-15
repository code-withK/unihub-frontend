import React from 'react';
import OpportunityCard from '../components/OpportunityCard';

export default function Opportunities({ opportunities, searchQuery }) {
  const filtered = opportunities.filter(op => op.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Opportunities Hub</h1>
        <p>Discover internships, campus roles, and financial aid.</p>
      </div>

      <div className="grid-2">
        {filtered.map((op) => (
          <OpportunityCard key={op.id} opportunity={op} />
        ))}
      </div>
    </div>
  );
}