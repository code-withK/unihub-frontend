import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div style={{ 
      display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '16px',
      maxWidth: '100%', scrollbarWidth: 'none'
    }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          style={{
            backgroundColor: selectedCategory === cat ? 'var(--accent-primary)' : 'white',
            color: selectedCategory === cat ? 'white' : 'var(--text-secondary)',
            border: selectedCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
            padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap',
            flexShrink: 0
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}