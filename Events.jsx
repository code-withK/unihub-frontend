import React from 'react';
import EventCard from '../components/EventCard';

export default function Events({ events, searchQuery }) {
  const filtered = events.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Campus Events & Workshops</h1>
        <p>Explore hackathons, workshops, and tech orientations.</p>
      </div>

      <div className="grid-2">
        {filtered.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </div>
  );
}