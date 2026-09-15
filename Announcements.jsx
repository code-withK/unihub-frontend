import React from 'react';

export default function Announcements({ announcements = [], selectedCategory = 'All', setSelectedCategory, searchQuery = '' }) {
  const safeAnnouncements = Array.isArray(announcements) ? announcements : [];

  const filtered = safeAnnouncements.filter((item) => {
    const matchesCategory = selectedCategory && selectedCategory !== 'All' 
      ? item.category === selectedCategory 
      : true;
    const matchesSearch = searchQuery 
      ? item.title?.toLowerCase().includes(searchQuery.toLowerCase()) 
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Announcements</h2>
      {filtered.length > 0 ? (
        filtered.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
            <h3>{item.title}</h3>
            <p>{item.content || item.description}</p>
          </div>
        ))
      ) : (
        <p>No announcements found.</p>
      )}
    </div>
  );
}