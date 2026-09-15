import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import AnnouncementCard from '../components/AnnouncementCard';
import DeadlineCard from '../components/DeadlineCard';

export default function Dashboard({ announcements, deadlines, setActiveTab }) {
  return (
    <div className="page-container">
      {/* Hero Banner */}
      <div style={{ 
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', 
        color: 'white', padding: '20px', borderRadius: '12px', marginBottom: '20px'
      }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Welcome back, Alex! 👋</h1>
        <p style={{ marginTop: '4px', opacity: 0.9, fontSize: '0.88rem' }}>"Less scrolling. Less confusion. More action."</p>
      </div>

      {/* AI Smart Insight Card */}
      <div className="card" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#166534', fontWeight: 600, marginBottom: '4px', fontSize: '0.9rem' }}>
          <Sparkles size={16} /> Daily AI Campus Briefing
        </div>
        <p style={{ fontSize: '0.85rem', color: '#14532d', marginBottom: '10px', lineHeight: 1.4 }}>
          You have <strong>3 critical updates</strong> today: Mid-Sem timetable released, DS assignment due in 3 days, and open scholarship applications.
        </p>
        <button 
          className="btn-primary" 
          style={{ backgroundColor: '#166534', fontSize: '0.8rem', padding: '5px 10px' }}
          onClick={() => setActiveTab('ai-assistant')}
        >
          Ask Assistant <ArrowRight size={13} />
        </button>
      </div>

      {/* Dashboard Grid */}
      <div className="grid-2">
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Recent Announcements</h2>
            <button onClick={() => setActiveTab('announcements')} style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: 500, fontSize: '0.82rem' }}>
              View all
            </button>
          </div>
          {announcements.slice(0, 2).map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Urgent Deadlines</h2>
            <button onClick={() => setActiveTab('deadlines')} style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: 500, fontSize: '0.82rem' }}>
              View all
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {deadlines.slice(0, 3).map((dl) => (
              <DeadlineCard key={dl.id} deadline={dl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}