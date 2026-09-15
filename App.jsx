import React, { useMemo, useState } from "react";
import {
  Bell,
  Bot,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Info,
  LogOut,
  Menu,
  Moon,
  Palette,
  Plus,
  Search,
  Settings as SettingsIcon,
  Sparkles,
  Sun,
  Trash2,
  User,
  Users,
  X,
  Briefcase,
  Trophy,
  Megaphone,
  BookOpen,
} from "lucide-react";
import "./App.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* -------------------- FEED NOTICES -------------------- */
/* These are intentionally ONLY used on Feed. */

const feedNotices = [
  {
    id: 1,
    type: "Internship",
    title: "Software Engineering Internship",
    description:
      "A new internship opportunity for students interested in software development.",
    date: "2026-09-15",
    deadline: "2026-09-20",
    source: "Career & Internship Cell",
    eligibility: "CSE / IT students",
    registration:
      "https://www.google.com/search?q=IGDTUW+internship",
    urgent: true,
    interests: ["Coding", "Placements"],
  },
  {
    id: 2,
    type: "Scholarship",
    title: "Student Scholarship Applications",
    description:
      "Eligible students can submit their scholarship documents within the application window.",
    date: "2026-09-14",
    deadline: "2026-09-25",
    source: "Student Affairs",
    eligibility: "Eligible IGDTUW students",
    registration:
      "https://www.google.com/search?q=IGDTUW+scholarship",
    urgent: true,
    interests: [],
  },
  {
    id: 3,
    type: "Notice",
    title: "CSE Freshers Coding Workshop",
    description:
      "Beginner-friendly coding workshop for CSE first-year students.",
    date: "2026-09-13",
    deadline: "2026-09-18",
    eventDate: "2026-09-18",
    eventTime: "11:00 AM",
    venue: "Computer Lab",
    source: "CSE Department",
    eligibility: "CSE 1st Year",
    registration:
      "https://www.google.com/search?q=IGDTUW+CSE+workshop",
    interests: ["Coding"],
  },
  {
    id: 4,
    type: "Notice",
    title: "AI/ML Student Club Orientation",
    description:
      "Orientation session for students interested in AI, ML and technology projects.",
    date: "2026-09-12",
    eventDate: "2026-09-23",
    eventTime: "2:00 PM",
    venue: "Seminar Hall",
    source: "AI/ML Student Club",
    eligibility: "All students",
    registration:
      "https://www.google.com/search?q=IGDTUW+AI+ML+club",
    interests: ["AI/ML"],
  },
];

/* -------------------- NOTICE UPDATED -------------------- */

const updatedNotices = [
  {
    id: 101,
    title: "CSE Freshers Orientation",
    source: "CSE Department",
    updatedAgo: "10 mins ago",
    changes: [
      {
        label: "Time",
        previous: "10:00 AM",
        current: "11:00 AM",
      },
      {
        label: "Venue",
        previous: "Seminar Hall",
        current: "Auditorium",
      },
    ],
  },
  {
    id: 102,
    title: "AI/ML Workshop Batch A",
    source: "Technical Team",
    updatedAgo: "1 hour ago",
    changes: [
      {
        label: "Date",
        previous: "Today",
        current: "Tomorrow",
      },
      {
        label: "Venue",
        previous: "Lab 102",
        current: "Lab 304 (IT Block)",
      },
    ],
  },
];

/* -------------------- EVENTS -------------------- */
/* Events are NOT feed notices. They appear only on Events page
   and in Calendar when their date matches. */

const eventsData = [
  {
    id: 201,
    category: "Hackathon",
    title: "IGDTUW Hackathon",
    description:
      "Build, collaborate and solve a real-world problem with your team.",
    date: "2026-09-18",
    time: "10:00 AM",
    venue: "Main Auditorium",
    eligibility: "All students",
    registration:
      "https://www.google.com/search?q=IGDTUW+hackathon",
  },
  {
    id: 202,
    category: "Vibeathon",
    title: "Vibeathon 2026",
    description:
      "A creative technology event where students can build and showcase ideas.",
    date: "2026-09-22",
    time: "11:00 AM",
    venue: "Innovation Lab",
    eligibility: "All students",
    registration:
      "https://www.google.com/search?q=IGDTUW+Vibeathon",
  },
  {
    id: 203,
    category: "Orientation",
    title: "CSE Freshers Orientation",
    description:
      "Introduction to academics, student communities and campus opportunities.",
    date: "2026-09-23",
    time: "11:00 AM",
    venue: "Auditorium",
    eligibility: "CSE 1st Year",
    registration:
      "https://www.google.com/search?q=IGDTUW+CSE+orientation",
  },
  {
    id: 204,
    category: "Induction",
    title: "Student Induction Programme",
    description:
      "Campus induction programme for newly joined students.",
    date: "2026-09-24",
    time: "10:00 AM",
    venue: "Main Auditorium",
    eligibility: "First-year students",
    registration:
      "https://www.google.com/search?q=IGDTUW+induction",
  },
  {
    id: 205,
    category: "Workshop",
    title: "Git & GitHub Beginners Session",
    description:
      "Learn Git basics, repositories, branches and collaborative workflows.",
    date: "2026-09-22",
    time: "3:00 PM",
    venue: "Computer Lab",
    eligibility: "All students",
    registration:
      "https://www.google.com/search?q=IGDTUW+Git+GitHub+workshop",
  },
  {
    id: 206,
    category: "Competition",
    title: "Coding Challenge",
    description:
      "A beginner-friendly coding challenge for students who want to practise problem solving.",
    date: "2026-09-26",
    time: "12:00 PM",
    venue: "Online",
    eligibility: "All students",
    registration:
      "https://www.google.com/search?q=IGDTUW+coding+competition",
  },
  {
    id: 207,
    category: "Club",
    title: "AI/ML Club Meet",
    description:
      "Meet the student team and learn about upcoming AI/ML projects.",
    date: "2026-09-27",
    time: "2:00 PM",
    venue: "Seminar Hall",
    eligibility: "All students",
    registration:
      "https://www.google.com/search?q=IGDTUW+AI+ML+club",
  },
  {
    id: 208,
    category: "Seminar",
    title: "Women in Technology Seminar",
    description:
      "A student-focused seminar around technology, careers and innovation.",
    date: "2026-09-29",
    time: "1:00 PM",
    venue: "Seminar Hall",
    eligibility: "All students",
    registration:
      "https://www.google.com/search?q=IGDTUW+technology+seminar",
  },
];

/* -------------------- CALENDAR -------------------- */
/* Independent calendar data. */

const calendarEvents = [
  {
    id: 301,
    title: "CSE Coding Workshop",
    date: "2026-09-20",
    time: "11:00 AM",
    venue: "Computer Lab",
  },
  {
    id: 302,
    title: "Placement Preparation",
    date: "2026-09-21",
    time: "2:00 PM",
    venue: "Seminar Hall",
  },
  {
    id: 303,
    title: "Git & GitHub Session",
    date: "2026-09-22",
    time: "3:00 PM",
    venue: "Computer Lab",
  },
  {
    id: 304,
    title: "AI/ML Club Orientation",
    date: "2026-09-23",
    time: "2:00 PM",
    venue: "Seminar Hall",
  },
  {
    id: 305,
    title: "Mid-Sem Exams Begin",
    date: "2026-09-28",
    time: "9:00 AM",
    venue: "Examination Block",
  },
];

/* -------------------- RESOURCES -------------------- */

const resourcesData = [
  {
    id: 401,
    title: "Data Structures PYQs",
    group: "CSE Resources",
    shared: "2 hours ago",
    type: "PDF",
  },
  {
    id: 402,
    title: "Programming in C Notes",
    group: "CSE Freshers Resources",
    shared: "Yesterday",
    type: "PDF",
  },
  {
    id: 403,
    title: "Mid-Sem Syllabus",
    group: "Academic Resources",
    shared: "Yesterday",
    type: "PDF",
  },
  {
    id: 404,
    title: "GitHub Cheat Sheet",
    group: "Coding Resources",
    shared: "2 days ago",
    type: "PDF",
  },
];

/* -------------------- HELPERS -------------------- */

function formatDate(dateString) {
  if (!dateString) return "Not specified";

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatLongDate(dateString) {
  if (!dateString) return "";

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}

/* -------------------- APP -------------------- */

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("feed");
  const [darkMode, setDarkMode] = useState(true);
  const [accent, setAccent] = useState("purple");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [profile, setProfile] = useState({
    name: "Student",
    email: "",
    enrollment: "",
    branch: "CSE",
    year: "1st",
    mobile: "",
    interests: ["Coding", "AI/ML", "Internships"],
  });

  const [search, setSearch] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);

  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [calendarDate, setCalendarDate] = useState(
    new Date(2026, 8, 15)
  );

  const [selectedCalendarDate, setSelectedCalendarDate] = useState(
    "2026-09-25"
  );

  const [tasks, setTasks] = useState([
    {
      id: 501,
      title: "Submit scholarship documents",
      date: "2026-09-25",
      completed: false,
    },
    {
      id: 502,
      title: "Prepare DSA assignment",
      date: "2026-09-20",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      text:
        "Hey! 👋 I’m UniHub AI. Ask me about coding, college work, projects, internships, or general questions.",
    },
  ]);

  const [chatInput, setChatInput] = useState("");

  const [feedFilter, setFeedFilter] = useState("All");

  const filteredFeed = useMemo(() => {
    let items = [...feedNotices];

    if (feedFilter !== "All") {
      items = items.filter((item) => item.type === feedFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();

      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q)
      );
    }

    return items;
  }, [search, feedFilter]);

  /* -------------------- LOGIN -------------------- */

  if (!loggedIn) {
    return (
      <LoginScreen
        profile={profile}
        setProfile={setProfile}
        onLogin={() => setLoggedIn(true)}
        darkMode={darkMode}
      />
    );
  }

  /* -------------------- CALENDAR DATA -------------------- */

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells = [];

  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  const selectedDateEvents = calendarEvents.filter(
    (event) => event.date === selectedCalendarDate
  );

  const selectedDateTasks = tasks.filter(
    (task) => task.date === selectedCalendarDate
  );

  const accentClass = `accent-${accent}`;

  /* -------------------- NAVIGATION -------------------- */

  const goTo = (page) => {
    setActivePage(page);
    setMobileMenu(false);
    setNotificationOpen(false);
  };

  /* -------------------- TASKS -------------------- */

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newTask.trim(),
        date: selectedCalendarDate,
        completed: false,
      },
    ]);

    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  /* -------------------- CHATBOT -------------------- */

  const sendChat = () => {
    const text = chatInput.trim();

    if (!text) return;

    setChatMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    setChatInput("");

    setTimeout(() => {
      const lower = text.toLowerCase();

      let reply =
        "I can help with that! Tell me a little more about what you’re trying to do.";

      if (
        lower.includes("javascript") ||
        lower.includes("react") ||
        lower.includes("python") ||
        lower.includes("coding") ||
        lower.includes("code")
      ) {
        reply =
          "Sure! I can explain the concept, debug your code, or help you build it step-by-step. Paste the code/problem here.";
      } else if (
        lower.includes("internship") ||
        lower.includes("career")
      ) {
        reply =
          "For internships, focus on DSA + projects + a clean resume. I can also help you prepare for coding rounds and interviews.";
      } else if (
        lower.includes("calendar") ||
        lower.includes("event")
      ) {
        reply =
          "You can use Calendar for your personal tasks and campus dates. The Events section contains event-type updates in one place.";
      } else if (
        lower.includes("hello") ||
        lower.includes("hi")
      ) {
        reply =
          "Hey! 👋 What are we working on today — coding, college, projects, or something else?";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);
    }, 500);
  };

  /* -------------------- RENDER -------------------- */

  return (
    <div
      className={`app ${darkMode ? "dark" : "light"} ${accentClass}`}
    >
      <Sidebar
        activePage={activePage}
        goTo={goTo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onLogout={() => setLoggedIn(false)}
        mobileMenu={mobileMenu}
      />

      {mobileMenu && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenu(false)}
        />
      )}

      <main className="main-content">
        <header className="topbar">
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={22} />
          </button>

          <div className="topbar-title">
            <h1>
              {activePage === "feed" && "Good morning, Student 👋"}
              {activePage === "chatbot" && "AI Chatbot"}
              {activePage === "calendar" && "Calendar"}
              {activePage === "events" && "Events"}
              {activePage === "internships" && "Internships"}
              {activePage === "scholarships" && "Scholarships"}
              {activePage === "resources" && "Resources"}
              {activePage === "settings" && "Settings"}
            </h1>

            <p>
              {activePage === "feed"
                ? "Your campus, simplified."
                : activePage === "events"
                ? "Hackathons, vibeathons, orientations and more."
                : activePage === "calendar"
                ? "Click any date to see events and your personal tasks."
                : ""}
            </p>
          </div>

          <div className="topbar-actions">
            <div className="search-box">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
            </div>

            <div className="notification-wrap">
              <button
                className="icon-button"
                onClick={() =>
                  setNotificationOpen((value) => !value)
                }
              >
                <Bell size={20} />
                <span className="notification-dot" />
              </button>

              {notificationOpen && (
                <div className="notification-dropdown">
                  <div className="dropdown-header">
                    <strong>Notifications</strong>
                    <span>2 new</span>
                  </div>

                  <div className="notification-item">
                    <Sparkles size={18} />
                    <div>
                      <strong>Notice updated</strong>
                      <p>CSE Freshers Orientation was updated.</p>
                    </div>
                  </div>

                  <div className="notification-item">
                    <Briefcase size={18} />
                    <div>
                      <strong>New internship</strong>
                      <p>A new opportunity was added to your feed.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              className="profile-mini"
              onClick={() => goTo("settings")}
            >
              <div className="avatar">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <span>{profile.name}</span>
            </button>
          </div>
        </header>

        <div className="page-container">
          {activePage === "feed" && (
            <FeedPage
              profile={profile}
              notices={filteredFeed}
              filter={feedFilter}
              setFilter={setFeedFilter}
              setSelectedNotice={setSelectedNotice}
              setSelectedUpdate={setSelectedUpdate}
              updatedNotices={updatedNotices}
            />
          )}

          {activePage === "chatbot" && (
            <ChatbotPage
              messages={chatMessages}
              input={chatInput}
              setInput={setChatInput}
              sendChat={sendChat}
            />
          )}

          {activePage === "calendar" && (
            <CalendarPage
              year={year}
              month={month}
              calendarDate={calendarDate}
              setCalendarDate={setCalendarDate}
              calendarCells={calendarCells}
              selectedCalendarDate={selectedCalendarDate}
              setSelectedCalendarDate={setSelectedCalendarDate}
              selectedDateEvents={selectedDateEvents}
              selectedDateTasks={selectedDateTasks}
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
              toggleTask={toggleTask}
            />
          )}

          {activePage === "events" && (
            <EventsPage
              events={eventsData}
              search={search}
              setSelectedEvent={setSelectedEvent}
            />
          )}

          {activePage === "internships" && (
            <InternshipsPage
              notices={feedNotices.filter(
                (item) => item.type === "Internship"
              )}
              setSelectedNotice={setSelectedNotice}
            />
          )}

          {activePage === "scholarships" && (
            <ScholarshipsPage
              notices={feedNotices.filter(
                (item) => item.type === "Scholarship"
              )}
              setSelectedNotice={setSelectedNotice}
            />
          )}

          {activePage === "resources" && (
            <ResourcesPage resources={resourcesData} />
          )}

          {activePage === "settings" && (
            <SettingsPage
              profile={profile}
              setProfile={setProfile}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              accent={accent}
              setAccent={setAccent}
            />
          )}
        </div>
      </main>

      {/* NOTICE DETAILS */}
      {selectedNotice && (
        <NoticeDetailsModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}

      {/* SMART DIFF */}
      {selectedUpdate && (
        <DiffModal
          update={selectedUpdate}
          onClose={() => setSelectedUpdate(null)}
        />
      )}

      {/* EVENT DETAILS */}
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar({
  activePage,
  goTo,
  darkMode,
  setDarkMode,
  onLogout,
  mobileMenu,
}) {
  const nav = [
    {
      label: "MAIN",
      items: [
        {
          id: "feed",
          label: "Feed",
          icon: Megaphone,
        },
        {
          id: "chatbot",
          label: "AI Chatbot",
          icon: Bot,
        },
        {
          id: "calendar",
          label: "Calendar",
          icon: CalendarDays,
        },
      ],
    },
    {
      label: "CAMPUS",
      items: [
        {
          id: "events",
          label: "Events",
          icon: Trophy,
        },
        {
          id: "internships",
          label: "Internships",
          icon: Briefcase,
        },
        {
          id: "scholarships",
          label: "Scholarships",
          icon: GraduationCap,
        },
        {
          id: "resources",
          label: "Resources",
          icon: BookOpen,
        },
      ],
    },
    {
      label: "ACCOUNT",
      items: [
        {
          id: "settings",
          label: "Settings",
          icon: SettingsIcon,
        },
      ],
    },
  ];

  return (
    <aside className={`sidebar ${mobileMenu ? "mobile-open" : ""}`}>
      <div className="brand">
        <div className="brand-icon">
          <Sparkles size={21} />
        </div>

        <div>
          <strong>UniHub</strong>
          <span>Your Campus, Simplified.</span>
        </div>
      </div>

      <div className="sidebar-scroll">
        {nav.map((group) => (
          <div className="nav-group" key={group.label}>
            <p className="nav-label">{group.label}</p>

            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className={`nav-item ${
                    activePage === item.id ? "active" : ""
                  }`}
                  onClick={() => goTo(item.id)}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span>{darkMode ? "Light mode" : "Dark mode"}</span>
        </button>

        <button className="logout-button" onClick={onLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

/* =========================================================
   LOGIN
========================================================= */

function LoginScreen({
  profile,
  setProfile,
  onLogin,
  darkMode,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!email.endsWith("@igdtuw.ac.in")) {
      alert("Please use your IGDTUW college email.");
      return;
    }

    setProfile((prev) => ({
      ...prev,
      email,
    }));

    onLogin();
  };

  return (
    <div className={`login-page ${darkMode ? "dark" : "light"}`}>
      <div className="login-card">
        <div className="login-logo">
          <Sparkles size={28} />
        </div>

        <h1>UniHub</h1>

        <p className="login-tagline">
          Your Campus, Simplified.
        </p>

        <div className="login-welcome">
          <h2>Welcome back 👋</h2>
          <p>Sign in with your IGDTUW college account.</p>
        </div>

        <label>College Email</label>
        <input
          type="email"
          placeholder="yourname@igdtuw.ac.in"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-button login-button" onClick={login}>
          Login
        </button>

        <p className="demo-note">
          Demo: use any email ending with @igdtuw.ac.in
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   FEED
========================================================= */

function FeedPage({
  profile,
  notices,
  filter,
  setFilter,
  setSelectedNotice,
  setSelectedUpdate,
  updatedNotices,
}) {
  return (
    <div className="feed-page">
      <div className="welcome-card">
        <div>
          <span className="eyebrow">PERSONALIZED FOR YOU</span>
          <h2>
            CSE • {profile.year} Year
          </h2>
          <p>
            Showing relevant internships, scholarships and campus
            notices.
          </p>
        </div>

        <div className="welcome-icon">
          <Sparkles size={30} />
        </div>
      </div>

      {/* ONLY 2 MAIN FEED AREAS */}

      <section>
        <div className="section-heading">
          <div>
            <h2>🔥 Latest</h2>
            <p>Important updates for you right now.</p>
          </div>

          <div className="filter-tabs">
            {["All", "Internship", "Scholarship", "Notice"].map(
              (item) => (
                <button
                  key={item}
                  className={filter === item ? "selected" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item === "Internship"
                    ? "Internships"
                    : item === "Scholarship"
                    ? "Scholarships"
                    : item}
                </button>
              )
            )}
          </div>
        </div>

        <div className="feed-grid">
          {notices.length === 0 ? (
            <div className="empty-state">
              <Info size={28} />
              <h3>No matching updates</h3>
              <p>Try another search or filter.</p>
            </div>
          ) : (
            notices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onClick={() => setSelectedNotice(notice)}
              />
            ))
          )}
        </div>
      </section>

      {/* NOTICE UPDATED MUST STAY ON FEED */}

      {updatedNotices.length > 0 && (
        <section className="notice-updated-section">
          <div className="section-heading">
            <div>
              <h2>🔔 Notice Updated</h2>
              <p>
                Smart Diff Detector highlights what changed.
              </p>
            </div>
          </div>

          <div className="updated-card">
            {updatedNotices.map((update) => (
              <div className="updated-item" key={update.id}>
                <div className="updated-main">
                  <div className="updated-title-row">
                    <div>
                      <h3>{update.title}</h3>
                      <p>
                        {update.source} • {update.updatedAgo}
                      </p>
                    </div>
                  </div>

                  <div className="diff-preview">
                    {update.changes.map((change) => (
                      <div
                        className="diff-row"
                        key={change.label}
                      >
                        <strong>{change.label}</strong>

                        <div className="previous-value">
                          {change.previous}
                        </div>

                        <div className="arrow">→</div>

                        <div className="current-value">
                          {change.current}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="view-changes-button"
                    onClick={() => setSelectedUpdate(update)}
                  >
                    View changes <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function NoticeCard({ notice, onClick }) {
  return (
    <button className="notice-card" onClick={onClick}>
      <div className="card-top-row">
        <span
          className={`type-pill type-${notice.type.toLowerCase()}`}
        >
          {notice.type}
        </span>

        {notice.urgent && (
          <span className="urgent-pill">Important</span>
        )}
      </div>

      <h3>{notice.title}</h3>

      <p>{notice.description}</p>

      <div className="card-meta">
        <span>
          <Clock3 size={15} />
          {notice.deadline
            ? `Deadline: ${formatDate(notice.deadline)}`
            : "Updated recently"}
        </span>

        <span className="open-arrow">
          View details <ChevronRight size={16} />
        </span>
      </div>
    </button>
  );
}

/* =========================================================
   EVENTS
========================================================= */

function EventsPage({
  events,
  search,
  setSelectedEvent,
}) {
  const filtered = events.filter((event) => {
    if (!search.trim()) return true;

    const q = search.toLowerCase();

    return (
      event.title.toLowerCase().includes(q) ||
      event.category.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <div className="page-intro">
        <div>
          <span className="eyebrow">ONE PLACE FOR CAMPUS EVENTS</span>
          <h2>🎪 Events</h2>
          <p>
            Hackathons, Vibeathons, orientations, inductions,
            workshops and more — all together.
          </p>
        </div>
      </div>

      <div className="events-grid">
        {filtered.map((event) => (
          <button
            className="event-card"
            key={event.id}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="event-card-top">
              <span className="event-category">
                {event.category}
              </span>
              <Trophy size={21} />
            </div>

            <h3>{event.title}</h3>

            <p>{event.description}</p>

            <div className="event-info">
              <span>
                <CalendarDays size={16} />
                {formatDate(event.date)}
              </span>

              <span>
                <Clock3 size={16} />
                {event.time}
              </span>

              <span>
                <Info size={16} />
                {event.venue}
              </span>
            </div>

            <div className="event-view">
              View details <ChevronRight size={16} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   INTERNSHIPS
========================================================= */

function InternshipsPage({ notices, setSelectedNotice }) {
  return (
    <div>
      <div className="page-intro">
        <span className="eyebrow">CAREER OPPORTUNITIES</span>
        <h2>💼 Internships</h2>
        <p>
          Internship opportunities relevant to students.
        </p>
      </div>

      <div className="feed-grid">
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            notice={notice}
            onClick={() => setSelectedNotice(notice)}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SCHOLARSHIPS
========================================================= */

function ScholarshipsPage({ notices, setSelectedNotice }) {
  return (
    <div>
      <div className="page-intro">
        <span className="eyebrow">STUDENT SUPPORT</span>
        <h2>🎓 Scholarships</h2>
        <p>
          Scholarship and financial assistance opportunities.
        </p>
      </div>

      <div className="feed-grid">
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            notice={notice}
            onClick={() => setSelectedNotice(notice)}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   RESOURCES
========================================================= */

function ResourcesPage({ resources }) {
  return (
    <div>
      <div className="page-intro">
        <span className="eyebrow">WHATSAPP RESOURCES</span>
        <h2>📚 Resources</h2>
        <p>
          PYQs, notes, syllabus and useful files shared by
          student groups.
        </p>
      </div>

      <div className="resources-grid">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.id}>
            <div className="resource-icon">
              <FileText size={22} />
            </div>

            <div className="resource-content">
              <h3>{resource.title}</h3>

              {/* GROUP NAME UNDER FILE NAME */}
              <p className="resource-group">
                {resource.group}
              </p>

              <span className="resource-time">
                Shared {resource.shared}
              </span>
            </div>

            <button
              className="download-button"
              onClick={() =>
                alert(
                  `Demo download: ${resource.title}`
                )
              }
            >
              <Download size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   CHATBOT
========================================================= */

function ChatbotPage({
  messages,
  input,
  setInput,
  sendChat,
}) {
  return (
    <div className="chat-page">
      <div className="chat-header-card">
        <div className="chat-ai-icon">
          <Bot size={28} />
        </div>

        <div>
          <h2>UniHub AI</h2>
          <p>
            Coding, college, projects, internships & general
            questions.
          </p>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.role}`}
            >
              <div className="chat-bubble">
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendChat();
            }}
            placeholder="Ask anything..."
          />

          <button className="primary-button" onClick={sendChat}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CALENDAR
========================================================= */

function CalendarPage({
  year,
  month,
  calendarDate,
  setCalendarDate,
  calendarCells,
  selectedCalendarDate,
  setSelectedCalendarDate,
  selectedDateEvents,
  selectedDateTasks,
  newTask,
  setNewTask,
  addTask,
  toggleTask,
}) {
  const previousMonth = () => {
    setCalendarDate(
      new Date(
        calendarDate.getFullYear(),
        calendarDate.getMonth() - 1,
        1
      )
    );
  };

  const nextMonth = () => {
    setCalendarDate(
      new Date(
        calendarDate.getFullYear(),
        calendarDate.getMonth() + 1,
        1
      )
    );
  };

  const selectedDay = Number(
    selectedCalendarDate.split("-")[2]
  );

  return (
    <div className="calendar-page">
      <div className="calendar-top">
        <div>
          <span className="eyebrow">YOUR CAMPUS CALENDAR</span>
          <h2>Calendar</h2>
          <p>
            Click any date to see events and your personal tasks.
          </p>
        </div>

        <button
          className="today-button"
          onClick={() => {
            const today = new Date(2026, 8, 15);

            setCalendarDate(
              new Date(
                today.getFullYear(),
                today.getMonth(),
                1
              )
            );

            setSelectedCalendarDate(toDateKey(today));
          }}
        >
          <CalendarDays size={18} />
          Today
        </button>
      </div>

      <div className="calendar-layout">
        {/* LEFT CALENDAR */}

        <div className="calendar-card">
          <div className="calendar-header">
            <button
              className="calendar-nav-button"
              onClick={previousMonth}
            >
              <ChevronLeft size={22} />
            </button>

            <h2>
              {MONTHS[month]} {year}
            </h2>

            <button
              className="calendar-nav-button"
              onClick={nextMonth}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="week-row">
            {WEEKDAYS.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="calendar-grid">
            {calendarCells.map((day, index) => {
              if (!day) {
                return (
                  <div
                    className="calendar-cell empty"
                    key={index}
                  />
                );
              }

              const date = new Date(year, month, day);
              const dateKey = toDateKey(date);

              const eventsForDay = calendarEvents.filter(
                (event) => event.date === dateKey
              );

              const tasksForDay = selectedDateTasks.filter(
                (task) => task.date === dateKey
              );

              const isSelected =
                dateKey === selectedCalendarDate;

              return (
                <button
                  key={dateKey}
                  className={`calendar-cell ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() =>
                    setSelectedCalendarDate(dateKey)
                  }
                >
                  <span className="calendar-day-number">
                    {day}
                  </span>

                  <div className="calendar-events-mini">
                    {eventsForDay.slice(0, 2).map((event) => (
                      <span key={event.id}>
                        {event.title}
                      </span>
                    ))}
                  </div>

                  {tasksForDay.length > 0 && (
                    <span className="task-count">
                      {tasksForDay.length} task
                      {tasksForDay.length > 1 ? "s" : ""}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT SELECTED DATE PANEL */}

        <div className="selected-date-card">
          <div className="selected-date-heading">
            <div>
              <span className="small-label">SELECTED DATE</span>
              <h2>{formatLongDate(selectedCalendarDate)}</h2>
            </div>

            <CalendarDays size={28} />
          </div>

          <div className="selected-section">
            <h3>Campus Events</h3>

            {selectedDateEvents.length === 0 ? (
              <div className="no-data">
                No campus events on this date.
              </div>
            ) : (
              selectedDateEvents.map((event) => (
                <div className="selected-event" key={event.id}>
                  <div className="selected-event-icon">
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <strong>{event.title}</strong>
                    <p>
                      {event.time} • {event.venue}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="selected-section">
            <h3>Your Tasks</h3>

            {selectedDateTasks.length === 0 ? (
              <div className="no-data">
                No personal tasks for this date.
              </div>
            ) : (
              selectedDateTasks.map((task) => (
                <div className="task-item" key={task.id}>
                  <button
                    className={`task-check ${
                      task.completed ? "completed" : ""
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.completed && <Check size={15} />}
                  </button>

                  <div>
                    <strong
                      className={
                        task.completed ? "task-done" : ""
                      }
                    >
                      {task.title}
                    </strong>
                    <p>Personal task</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="selected-section add-task-section">
            <h3>Add task for this date</h3>

            <div className="add-task-row">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask();
                }}
                placeholder="e.g. Submit assignment"
              />

              <button onClick={addTask}>
                <Plus size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function SettingsPage({
  profile,
  setProfile,
  darkMode,
  setDarkMode,
  accent,
  setAccent,
}) {
  const accents = [
    { id: "purple", label: "Purple" },
    { id: "blue", label: "Blue" },
    { id: "green", label: "Green" },
    { id: "pink", label: "Pink" },
    { id: "orange", label: "Orange" },
    { id: "cyan", label: "Cyan" },
  ];

  const updateInterest = (interest) => {
    setProfile((prev) => {
      const exists = prev.interests.includes(interest);

      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const interests = [
    "Coding",
    "AI/ML",
    "Internships",
    "Hackathons",
    "Design",
    "Research",
  ];

  return (
    <div className="settings-page">
      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon">
            <User size={22} />
          </div>

          <div>
            <h2>Profile</h2>
            <p>Your information and personalization.</p>
          </div>
        </div>

        <div className="settings-form-grid">
          <div className="form-field">
            <label>Name</label>
            <input
              value={profile.name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="form-field">
            <label>College Email</label>
            <input
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email: e.target.value,
                })
              }
              placeholder="name@igdtuw.ac.in"
            />
          </div>

          <div className="form-field">
            <label>Enrollment Number</label>
            <input
              value={profile.enrollment}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  enrollment: e.target.value,
                })
              }
              placeholder="Enter enrollment number"
            />
          </div>

          <div className="form-field">
            <label>Mobile</label>
            <input
              value={profile.mobile}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  mobile: e.target.value,
                })
              }
              placeholder="Enter mobile number"
            />
          </div>

          <div className="form-field">
            <label>Branch</label>
            <select
              value={profile.branch}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  branch: e.target.value,
                })
              }
            >
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>MAE</option>
              <option>AI/ML</option>
            </select>
          </div>

          <div className="form-field">
            <label>Year</label>
            <select
              value={profile.year}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  year: e.target.value,
                })
              }
            >
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon">
            <Palette size={22} />
          </div>

          <div>
            <h2>Personalization</h2>
            <p>
              Choose what you are interested in seeing.
            </p>
          </div>
        </div>

        <h3 className="settings-subheading">Interests</h3>

        <div className="interest-list">
          {interests.map((interest) => (
            <button
              key={interest}
              className={`interest-chip ${
                profile.interests.includes(interest)
                  ? "selected"
                  : ""
              }`}
              onClick={() => updateInterest(interest)}
            >
              {profile.interests.includes(interest) && (
                <Check size={15} />
              )}
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon">
            {darkMode ? (
              <Moon size={22} />
            ) : (
              <Sun size={22} />
            )}
          </div>

          <div>
            <h2>Appearance</h2>
            <p>Customize the look of UniHub.</p>
          </div>
        </div>

        <div className="appearance-row">
          <div>
            <strong>Dark mode</strong>
            <p>
              Use a deeper dark background with readable white
              text.
            </p>
          </div>

          <button
            className={`toggle ${darkMode ? "on" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <span />
          </button>
        </div>

        <h3 className="settings-subheading">
          Accent colour
        </h3>

        <div className="accent-options">
          {accents.map((item) => (
            <button
              key={item.id}
              className={`accent-option ${item.id} ${
                accent === item.id ? "selected" : ""
              }`}
              onClick={() => setAccent(item.id)}
            >
              <span />
              {item.label}
              {accent === item.id && <Check size={16} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   NOTICE DETAILS MODAL
========================================================= */

function NoticeDetailsModal({ notice, onClose }) {
  const openRegistration = () => {
    window.open(
      notice.registration,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="details-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <span className="type-pill type-notice">
          {notice.type}
        </span>

        <h2>{notice.title}</h2>
        <p className="modal-description">
          {notice.description}
        </p>

        <div className="details-list">
          <div>
            <span>Deadline</span>
            <strong>
              {notice.deadline
                ? formatDate(notice.deadline)
                : "Not specified"}
            </strong>
          </div>

          {notice.eventDate && (
            <div>
              <span>Event date</span>
              <strong>{formatDate(notice.eventDate)}</strong>
            </div>
          )}

          {notice.eventTime && (
            <div>
              <span>Time</span>
              <strong>{notice.eventTime}</strong>
            </div>
          )}

          {notice.venue && (
            <div>
              <span>Venue</span>
              <strong>{notice.venue}</strong>
            </div>
          )}

          <div>
            <span>Eligibility</span>
            <strong>{notice.eligibility}</strong>
          </div>

          <div>
            <span>Source</span>
            <strong>{notice.source}</strong>
          </div>
        </div>

        <div className="modal-actions">
          <button
            className="primary-button"
            onClick={openRegistration}
          >
            Registration / Details
            <ExternalLink size={17} />
          </button>

          <button className="secondary-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SMART DIFF MODAL
========================================================= */

function DiffModal({ update, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="diff-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="diff-modal-header">
          <div className="diff-icon">
            <Sparkles size={23} />
          </div>

          <div>
            <span className="eyebrow">SMART DIFF DETECTOR</span>
            <h2>{update.title}</h2>
            <p>
              Updated {update.updatedAgo} • {update.source}
            </p>
          </div>
        </div>

        <div className="diff-large">
          {update.changes.map((change) => (
            <div className="diff-large-row" key={change.label}>
              <div className="diff-label">
                {change.label}
              </div>

              <div className="diff-box previous">
                <span>Previous</span>
                <strong>{change.previous}</strong>
              </div>

              <div className="diff-arrow">
                <ChevronRight size={22} />
              </div>

              <div className="diff-box current">
                <span>Current</span>
                <strong>{change.current}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="change-note">
          <Info size={18} />
          <p>
            These are the fields detected as changed in the
            latest version of the notice.
          </p>
        </div>

        <button className="secondary-button full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   EVENT DETAILS MODAL
========================================================= */

function EventDetailsModal({ event, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="details-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <span className="event-category">
          {event.category}
        </span>

        <h2>{event.title}</h2>

        <p className="modal-description">
          {event.description}
        </p>

        <div className="details-list">
          <div>
            <span>Date</span>
            <strong>{formatDate(event.date)}</strong>
          </div>

          <div>
            <span>Time</span>
            <strong>{event.time}</strong>
          </div>

          <div>
            <span>Venue</span>
            <strong>{event.venue}</strong>
          </div>

          <div>
            <span>Eligibility</span>
            <strong>{event.eligibility}</strong>
          </div>
        </div>

        <div className="modal-actions">
          <button
            className="primary-button"
            onClick={() =>
              window.open(
                event.registration,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Register / Details
            <ExternalLink size={17} />
          </button>

          <button className="secondary-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}