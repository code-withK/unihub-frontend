export const initialAnnouncements = [
  {
    id: 'ann-1',
    title: 'Mid-Semester Exam Schedule Released',
    source: 'Academic Affairs Office',
    date: '2026-09-12',
    category: 'Academics',
    summary: 'The timetable for Mid-Semesters is out. Exams begin next month.',
    content: 'The academic office has released the official schedule for upcoming Mid-Semesters. Seating arrangements will be notified 2 days prior to examinations. Attendance threshold is strictly 75%.',
    priority: 'High',
    isRead: false
  },
  {
    id: 'ann-2',
    title: 'Merit-Cum-Means Scholarship Applications Open',
    source: 'Financial Aid Desk',
    date: '2026-09-11',
    category: 'Scholarships',
    summary: 'Eligible students can submit income certificates for up to 50% tuition waiver.',
    content: 'Applications are open for undergraduates with annual family income below threshold. Submit income proof and last semester marksheets to Student Welfare.',
    priority: 'High',
    isRead: false
  },
  {
    id: 'ann-3',
    title: 'HackCampus 2026 Registration Begins',
    source: 'Coding Club',
    date: '2026-09-10',
    category: 'Events',
    summary: '36-hour flagship hackathon with cash prizes worth $2,000.',
    content: 'Join us for the biggest campus tech event. Tracks include AI, Web3, and Open Innovation. Free food, schwag, and mentor sessions provided.',
    priority: 'Medium',
    isRead: true
  },
  {
    id: 'ann-4',
    title: 'Guest Lecture on Generative AI Architecture',
    source: 'Computer Science Dept.',
    date: '2026-09-09',
    category: 'Workshops',
    summary: 'Industry expert talk on Large Language Models in Seminar Hall 2 this Friday.',
    content: 'Dr. Aris Thorne from AI Labs will break down Transformer models, LLM deployment, and practical application pipelines. Certificates will be awarded.',
    priority: 'Medium',
    isRead: true
  }
];

export const initialDeadlines = [
  {
    id: 'dl-1',
    title: 'Data Structures Assignment 2',
    course: 'CS201',
    dueDate: '2026-09-15',
    category: 'Academics',
    priority: 'High'
  },
  {
    id: 'dl-2',
    title: 'Merit Scholarship Submission',
    course: 'Financial Aid',
    dueDate: '2026-09-20',
    category: 'Scholarships',
    priority: 'High'
  },
  {
    id: 'dl-3',
    title: 'HackCampus Team Registration',
    course: 'Innovation Cell',
    dueDate: '2026-09-22',
    category: 'Events',
    priority: 'Medium'
  }
];

export const initialEvents = [
  {
    id: 'ev-1',
    title: 'HackCampus 2026 Hackathon',
    organizer: 'Coding Club & Innovation Cell',
    date: '2026-09-25',
    time: '09:00 AM - Sept 26 09:00 PM',
    location: 'Auditorium Block A',
    category: 'Events',
    description: 'Annual 36-hour hackathon to build solutions for modern campus problems.'
  },
  {
    id: 'ev-2',
    title: 'GenAI & Transformers Deep Dive',
    organizer: 'CS Department',
    date: '2026-09-18',
    time: '04:00 PM - 06:00 PM',
    location: 'Seminar Hall 2',
    category: 'Workshops',
    description: 'Technical session with practical code walk-throughs on LLM inference.'
  }
];

export const initialOpportunities = [
  {
    id: 'op-1',
    title: 'Summer Research Internship 2027',
    provider: 'AI Research Lab',
    type: 'Internship',
    stipend: '$800/month',
    deadline: '2026-10-15',
    category: 'Opportunities',
    description: 'Work alongside senior researchers on NLP and Computer Vision projects.'
  },
  {
    id: 'op-2',
    title: 'State Technical Scholarship',
    provider: 'Dept of Higher Education',
    type: 'Scholarship',
    stipend: 'Up to $1,500/year',
    deadline: '2026-09-30',
    category: 'Scholarships',
    description: 'Need and merit based financial assistantships for Computer Science students.'
  }
];

export const mockNotifications = [
  { id: 'notif-1', title: 'Assignment Due Soon', message: 'Data Structures Assignment 2 due in 3 days.', time: '10 mins ago', unread: true },
  { id: 'notif-2', title: 'New Timetable Out', message: 'Mid-Semester Exam Schedule published.', time: '1 hour ago', unread: true }
];

export const mockAiResponses = {
  "What deadlines do I have this week?": "You have **1 urgent deadline** this week:\n- **Data Structures Assignment 2** (CS201) due on **Sept 15, 2026**.",
  "What events are happening tomorrow?": "No immediate events tomorrow, but coming up on **Sept 18**: 'GenAI & Transformers Deep Dive' at Seminar Hall 2.",
  "Show me scholarships.": "Active Scholarships:\n1. **Merit-Cum-Means Scholarship** (Deadline: Sept 20)\n2. **State Technical Scholarship** (Deadline: Sept 30)",
  "What should I focus on today?": "⚡ **Recommended Priority Focus:**\n1. Finish & submit **Data Structures Assignment 2**.\n2. Review the new **Mid-Semester Timetable**."
};