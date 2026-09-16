import React, { useMemo, useState } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell,
  CalendarDays,
  Clock3,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Plus,
  Download,
  FileText,
  MessageCircle,
  Menu,
  X,
  Moon,
  Sun,
  User,
  Smartphone,
  GitBranch,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Send,
  Trash2,
  ExternalLink,
  Award,
} from "lucide-react";

import "./App.css";

const accentColors = {
  purple: {
    name: "Purple",
    main: "#7650c9",
    dark: "#4c287f",
    light: "#efe7fb",
    soft: "#f7f2fd",
  },
  blue: {
    name: "Blue",
    main: "#3f70d9",
    dark: "#21488f",
    light: "#e8f0ff",
    soft: "#f2f6ff",
  },
  pink: {
    name: "Pink",
    main: "#d04d91",
    dark: "#8e285f",
    light: "#fde8f2",
    soft: "#fff4f8",
  },
  green: {
    name: "Green",
    main: "#2e9b70",
    dark: "#176447",
    light: "#e5f6ef",
    soft: "#f2fbf7",
  },
  orange: {
    name: "Orange",
    main: "#d87932",
    dark: "#94471d",
    light: "#fff0e4",
    soft: "#fff7f1",
  },
};

const notices = [
  {
    id: 1,
    category: "Academic",
    title: "Mid-Semester Examination Datesheet Released",
    description:
      "Mid-semester examinations for eligible B.Tech students will commence from October 12.",
    source: "Academic Branch",
    time: "2 hours ago",
    date: "2026-09-16",
    deadline: "10 October 2026",
    details:
      "The official mid-semester examination datesheet has been released. Students should check their respective course and examination schedule.",
    link: "https://www.igdtuw.ac.in/",
    relevantBranches: ["CSE", "IT", "ECE", "AI & ML", "MAE"],
    years: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    category: "Academic",
    title: "DBMS Lab Class Rescheduled",
    description:
      "Tomorrow's DBMS lab for batch A1 and A2 has been shifted to Lab 304.",
    source: "CSE Department",
    time: "5 hours ago",
    date: "2026-09-17",
    deadline: "17 September 2026",
    details:
      "Students from DBMS Lab batches A1 and A2 should report to Lab 304 instead of the previously assigned laboratory.",
    link: "https://www.igdtuw.ac.in/",
    relevantBranches: ["CSE", "IT"],
    years: ["2", "3"],
  },
];

const internships = [
  {
    id: 11,
    category: "Internship",
    title: "Microsoft STEP Internship Drive",
    description:
      "Applications are open for eligible students interested in software engineering internships.",
    source: "Training & Placement Cell",
    time: "4 hours ago",
    date: "2026-09-16",
    deadline: "25 September 2026",
    details:
      "Eligible students can submit their application before the registration deadline. Check the official opportunity details before applying.",
    link: "https://www.igdtuw.ac.in/",
    relevantBranches: ["CSE", "IT"],
    years: ["1", "2"],
  },
];

const scholarships = [
  {
    id: 21,
    category: "Scholarship",
    title: "Student Scholarship Applications",
    description:
      "Eligible students can submit documents for the current scholarship cycle.",
    source: "Student Welfare Office",
    time: "6 hours ago",
    date: "2026-09-18",
    deadline: "30 September 2026",
    details:
      "Students who meet the eligibility requirements should prepare the required documents and complete the application before the deadline.",
    link: "https://www.igdtuw.ac.in/",
    relevantBranches: ["CSE", "IT", "ECE", "AI & ML", "MAE"],
    years: ["1", "2", "3", "4"],
  },
];

const events = [
  {
    id: 31,
    category: "Event",
    title: "AI/ML Workshop",
    description:
      "Hands-on workshop covering machine learning fundamentals and practical AI tools.",
    source: "IEEE Student Branch",
    time: "1 day ago",
    date: "2026-09-18",
    eventTime: "11:00 AM",
    venue: "Lab 304",
    details:
      "An introductory hands-on session focused on AI/ML concepts, practical tools and student projects.",
    link: "https://www.igdtuw.ac.in/",
  },
  {
    id: 32,
    category: "Event",
    title: "Coding Club Orientation",
    description:
      "Orientation session for students interested in coding and competitive programming.",
    source: "Coding Club",
    time: "1 day ago",
    date: "2026-09-20",
    eventTime: "2:00 PM",
    venue: "Seminar Hall",
    details:
      "Meet the coding community, learn about upcoming activities and discover ways to participate in coding contests.",
    link: "https://www.igdtuw.ac.in/",
  },
  {
    id: 33,
    category: "Event",
    title: "Women in Tech Hackathon",
    description:
      "Campus hackathon focused on building innovative technology solutions.",
    source: "Innovation Cell",
    time: "2 days ago",
    date: "2026-09-23",
    eventTime: "10:00 AM",
    venue: "Innovation Lab",
    details:
      "Students can participate individually or in teams. The event includes problem statements, mentoring and project presentations.",
    link: "https://www.igdtuw.ac.in/",
  },
  {
    id: 34,
    category: "Event",
    title: "Freshers Induction Programme",
    description:
      "Orientation and induction session for newly admitted students.",
    source: "Student Affairs",
    time: "3 days ago",
    date: "2026-09-24",
    eventTime: "9:30 AM",
    venue: "Auditorium",
    details:
      "An induction programme covering campus life, student societies, academic resources and important student services.",
    link: "https://www.igdtuw.ac.in/",
  },
];

const resources = [
  {
    id: 41,
    title: "DBMS Previous Year Questions",
    type: "PYQ",
    subject: "DBMS",
    size: "2.4 MB",
    source: "CSE 2nd Year Resources",
    whatsappGroup: "CSE 2nd Year • Academics",
  },
  {
    id: 42,
    title: "Data Structures Notes",
    type: "Notes",
    subject: "DSA",
    size: "5.8 MB",
    source: "Coding Club Resources",
    whatsappGroup: "IGDTUW Coding Community",
  },
  {
    id: 43,
    title: "Discrete Mathematics PYQs",
    type: "PYQ",
    subject: "Maths",
    size: "3.1 MB",
    source: "Academic Resources",
    whatsappGroup: "CSE 1st Year • Study Group",
  },
  {
    id: 44,
    title: "Mid-Sem Syllabus Circular",
    type: "Circular",
    subject: "Exams",
    size: "1.2 MB",
    source: "Academic Branch",
    whatsappGroup: "IGDTUW Official Updates",
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [needsProfile, setNeedsProfile] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    enrollment: "",
  });

  const [profile, setProfile] = useState({
    name: "",
    year: "",
    branch: "",
    mobile: "",
    interests: ["Coding", "AI/ML"],
  });

  const [page, setPage] = useState("feed");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [accent, setAccent] = useState("purple");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [notifications, setNotifications] = useState([
    "AI/ML Workshop venue has been updated.",
    "New internship opportunity is available.",
    "Scholarship application deadline is approaching.",
  ]);

  const [showNotifications, setShowNotifications] = useState(false);

  const [selectedNotice, setSelectedNotice] = useState(null);

  const [chatMessages, setChatMessages] = useState([
    {
      role: "ai",
      text:
        "Hey! 👋 I'm UniHub AI. Ask me about exams, events, internships, scholarships, deadlines or even coding/HTML questions.",
    },
  ]);

  const [chatInput, setChatInput] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 51,
      title: "Submit DBMS Assignment",
      date: "2026-09-16",
      type: "Deadline",
    },
    {
      id: 52,
      title: "AI/ML Workshop",
      date: "2026-09-18",
      type: "Event",
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(
    "2026-09-18"
  );

  const [showTaskModal, setShowTaskModal] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    type: "Task",
  });

  const allFeedData = [
    ...notices,
    ...internships,
    ...scholarships,
    ...events,
  ];

  const personalizedNotices = useMemo(() => {
    let data = [...notices];

    if (profile.branch && profile.year) {
      const relevant = notices.filter(
        (item) =>
          item.relevantBranches.includes(profile.branch) &&
          item.years.includes(profile.year)
      );

      if (relevant.length > 0) {
        data = relevant;
      }
    }

    return data;
  }, [profile.branch, profile.year]);

  const filteredNotices = personalizedNotices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || notice.category === filter;

    return matchesSearch && matchesFilter;
  });

  const loginContinue = () => {
    if (
      !loginData.email.toLowerCase().endsWith("@igdtuw.ac.in") ||
      !loginData.enrollment.trim()
    ) {
      alert(
        "Please enter your valid IGDTUW college email and enrollment number."
      );
      return;
    }

    setNeedsProfile(true);
  };

  const completeLogin = () => {
    if (!profile.name || !profile.year || !profile.branch) {
      alert("Please enter your name, year and branch.");
      return;
    }

    setLoggedIn(true);
    setNeedsProfile(false);
  };

  const logout = () => {
    setLoggedIn(false);
    setNeedsProfile(false);
    setPage("feed");
  };

  const saveProfile = () => {
    localStorage.setItem(
      "unihub-profile",
      JSON.stringify(profile)
    );

    localStorage.setItem("unihub-accent", accent);
    localStorage.setItem("unihub-dark", JSON.stringify(darkMode));

    alert("Profile and preferences saved successfully! 🎉");
  };

  const sendMessage = () => {
    const message = chatInput.trim();

    if (!message) return;

    setChatMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: message,
      },
    ]);

    setChatInput("");

    setTimeout(() => {
      const lower = message.toLowerCase();

      let reply =
        "I can help with UniHub campus information, deadlines, events, internships, scholarships and coding questions.";

      if (
        lower.includes("html") ||
        lower.includes("css") ||
        lower.includes("javascript") ||
        lower.includes("react") ||
        lower.includes("code") ||
        lower.includes("coding")
      ) {
        reply =
          "💻 Absolutely! I can help you write or understand HTML, CSS, JavaScript and React code. Paste your code or tell me what you want to build, and I'll guide you step-by-step.";
      } else if (
        lower.includes("exam") ||
        lower.includes("datesheet")
      ) {
        reply =
          "📚 The current academic feed shows the Mid-Semester Examination Datesheet. Tap the notice to view its full details, deadline and official link.";
      } else if (
        lower.includes("event") ||
        lower.includes("workshop") ||
        lower.includes("orientation") ||
        lower.includes("hackathon")
      ) {
        reply =
          "🎯 Upcoming campus events include the AI/ML Workshop on 18 September, Coding Club Orientation on 20 September, Women in Tech Hackathon on 23 September and Freshers Induction on 24 September.";
      } else if (
        lower.includes("internship") ||
        lower.includes("intern")
      ) {
        reply =
          "💼 A Microsoft STEP Internship opportunity is currently available in the Internship section. Open the card to see the deadline and registration details.";
      } else if (
        lower.includes("scholarship")
      ) {
        reply =
          "🎓 A scholarship application update is currently available. The displayed deadline is 30 September 2026.";
      } else if (
        lower.includes("deadline") ||
        lower.includes("assignment")
      ) {
        reply =
          "⏰ Your current personal deadline is Submit DBMS Assignment on 16 September. You can add more tasks from Calendar.";
      } else if (
        lower.includes("freshers") ||
        lower.includes("cse")
      ) {
        reply =
          `👩‍💻 Since your profile is ${profile.branch || "CSE"}${profile.year ? `, Year ${profile.year}` : ""}, UniHub can prioritize notices and opportunities matching your branch and year.`;
      } else if (
        lower.includes("hello") ||
        lower.includes("hi")
      ) {
        reply =
          "Hey! 👋 What do you want to know about your campus today?";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: reply,
        },
      ]);
    }, 500);
  };

  const addTask = () => {
    if (!newTask.title || !newTask.date) {
      alert("Please enter task name and date.");
      return;
    }

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newTask,
      },
    ]);

    setSelectedDate(newTask.date);

    setNewTask({
      title: "",
      date: "",
      type: "Task",
    });

    setShowTaskModal(false);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const appStyle = {
    "--accent": accentColors[accent].main,
    "--accent-dark": accentColors[accent].dark,
    "--accent-light": accentColors[accent].light,
    "--accent-soft": accentColors[accent].soft,
  };

  if (!loggedIn) {
    return (
      <div className="login-page">
        <div className="login-background-shape shape-one"></div>
        <div className="login-background-shape shape-two"></div>

        <div className="login-card">
          <div className="login-logo">
            <div className="logo-icon">
              <Sparkles size={25} />
            </div>
            <span>UniHub</span>
          </div>

          {!needsProfile ? (
            <>
              <div className="login-heading">
                <p className="eyebrow">Student Campus Hub</p>
                <h1>Welcome back 👋</h1>
                <p>
                  Your campus information, opportunities and events in one
                  place.
                </p>
              </div>

              <div className="login-form">
                <label>IGDTUW College Email</label>

                <div className="input-wrapper">
                  <MessageCircle size={18} />

                  <input
                    type="email"
                    placeholder="yourname@igdtuw.ac.in"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <label>Enrollment Number</label>

                <div className="input-wrapper">
                  <GraduationCap size={18} />

                  <input
                    type="text"
                    placeholder="Enter enrollment number"
                    value={loginData.enrollment}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        enrollment: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  className="primary-button login-button"
                  onClick={loginContinue}
                >
                  Continue
                </button>
              </div>

              <div className="login-note">
                <CheckCircle2 size={16} />
                Use your official IGDTUW college email
              </div>
            </>
          ) : (
            <>
              <div className="login-heading">
                <p className="eyebrow">One-time setup</p>
                <h1>Tell us about you ✨</h1>
                <p>
                  UniHub uses this information to personalize your campus
                  feed.
                </p>
              </div>

              <div className="login-form">
                <label>Your Name</label>

                <div className="input-wrapper">
                  <User size={18} />

                  <input
                    placeholder="Enter your name"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <label>Year</label>

                <div className="input-wrapper">
                  <GraduationCap size={18} />

                  <select
                    value={profile.year}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        year: e.target.value,
                      })
                    }
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>

                <label>Branch</label>

                <div className="input-wrapper">
                  <GitBranch size={18} />

                  <select
                    value={profile.branch}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        branch: e.target.value,
                      })
                    }
                  >
                    <option value="">Select branch</option>
                    <option>CSE</option>
                    <option>IT</option>
                    <option>ECE</option>
                    <option>AI & ML</option>
                    <option>MAE</option>
                  </select>
                </div>

                <button
                  className="primary-button login-button"
                  onClick={completeLogin}
                >
                  Enter UniHub
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={darkMode ? "app dark" : "app"}
      style={appStyle}
    >
      <aside
        className={
          sidebarOpen
            ? "sidebar mobile-open"
            : "sidebar"
        }
      >
        <div className="brand">
          <div className="brand-icon">
            <Sparkles size={23} />
          </div>

          <span>UniHub</span>

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-menu">
          <SidebarItem
            icon={<LayoutDashboard />}
            text="Feed"
            active={page === "feed"}
            onClick={() => {
              setPage("feed");
              setSidebarOpen(false);
            }}
          />

          <SidebarItem
            icon={<MessageSquare />}
            text="AI Chatbot"
            active={page === "chat"}
            onClick={() => {
              setPage("chat");
              setSidebarOpen(false);
            }}
          />

          <SidebarItem
            icon={<CalendarDays />}
            text="Calendar"
            active={page === "calendar"}
            onClick={() => {
              setPage("calendar");
              setSidebarOpen(false);
            }}
          />

          <SidebarItem
            icon={<Briefcase />}
            text="Internships"
            active={page === "internships"}
            onClick={() => {
              setPage("internships");
              setSidebarOpen(false);
            }}
          />

          <SidebarItem
            icon={<Award />}
            text="Scholarships"
            active={page === "scholarships"}
            onClick={() => {
              setPage("scholarships");
              setSidebarOpen(false);
            }}
          />

          <SidebarItem
            icon={<CalendarDays />}
            text="Events"
            active={page === "events"}
            onClick={() => {
              setPage("events");
              setSidebarOpen(false);
            }}
          />

          <SidebarItem
            icon={<BookOpen />}
            text="Resources"
            active={page === "resources"}
            onClick={() => {
              setPage("resources");
              setSidebarOpen(false);
            }}
          />

          <SidebarItem
            icon={<Settings />}
            text="Settings"
            active={page === "settings"}
            onClick={() => {
              setPage("settings");
              setSidebarOpen(false);
            }}
          />
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-profile">
            <div className="avatar">
              {profile.name
                ? profile.name.charAt(0).toUpperCase()
                : "U"}
            </div>

            <div>
              <strong>{profile.name}</strong>
              <span>
                {profile.branch} · Year {profile.year}
              </span>
            </div>
          </div>

          <button
            className="logout-button"
            onClick={logout}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <main className="main">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={23} />
          </button>

          <div className="topbar-user">
            <span>{loginData.email}</span>

            <div className="notification-container">
              <button
                className="notification-button"
                onClick={() =>
                  setShowNotifications(
                    !showNotifications
                  )
                }
              >
                <Bell size={20} />

                {notifications.length > 0 && (
                  <span className="notification-dot">
                    {notifications.length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="notification-dropdown">
                  <h4>Notifications</h4>

                  {notifications.map(
                    (notification, index) => (
                      <div
                        className="notification-item"
                        key={index}
                      >
                        <Bell size={15} />
                        <span>{notification}</span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        {page === "feed" && (
          <FeedPage
            profile={profile}
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            notices={filteredNotices}
            internships={internships}
            scholarships={scholarships}
            events={events}
            onNoticeClick={setSelectedNotice}
          />
        )}

        {page === "chat" && (
          <ChatPage
            messages={chatMessages}
            input={chatInput}
            setInput={setChatInput}
            sendMessage={sendMessage}
          />
        )}

        {page === "calendar" && (
          <CalendarPage
            tasks={tasks}
            deleteTask={deleteTask}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setShowTaskModal={setShowTaskModal}
          />
        )}

        {page === "internships" && (
          <ListingPage
            title="Internships"
            eyebrow="Career opportunities"
            description="Recent internship opportunities relevant to students."
            items={internships}
            icon={<Briefcase />}
            onItemClick={setSelectedNotice}
          />
        )}

        {page === "scholarships" && (
          <ListingPage
            title="Scholarships"
            eyebrow="Financial opportunities"
            description="Recent scholarship information and deadlines."
            items={scholarships}
            icon={<Award />}
            onItemClick={setSelectedNotice}
          />
        )}

        {page === "events" && (
          <ListingPage
            title="Campus Events"
            eyebrow="Everything happening on campus"
            description="Hackathons, workshops, orientations, inductions and other student activities."
            items={events}
            icon={<CalendarDays />}
            onItemClick={setSelectedNotice}
          />
        )}

        {page === "resources" && (
          <ResourcesPage resources={resources} />
        )}

        {page === "settings" && (
          <SettingsPage
            profile={profile}
            setProfile={setProfile}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            accent={accent}
            setAccent={setAccent}
            saveProfile={saveProfile}
          />
        )}
      </main>

      {selectedNotice && (
        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}

      {showTaskModal && (
        <div className="modal-overlay">
          <div className="task-modal">
            <div className="modal-header">
              <div>
                <h2>Add Task / Deadline</h2>
                <p>Add your own important date.</p>
              </div>

              <button
                className="icon-button"
                onClick={() =>
                  setShowTaskModal(false)
                }
              >
                <X />
              </button>
            </div>

            <label>Task name</label>

            <input
              placeholder="e.g. Submit DBMS Assignment"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  title: e.target.value,
                })
              }
            />

            <label>Date</label>

            <input
              type="date"
              value={newTask.date}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  date: e.target.value,
                })
              }
            />

            <label>Type</label>

            <select
              value={newTask.type}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  type: e.target.value,
                })
              }
            >
              <option>Task</option>
              <option>Deadline</option>
              <option>Exam</option>
              <option>Event</option>
            </select>

            <button
              className="primary-button"
              onClick={addTask}
            >
              <Plus size={18} />
              Add to Calendar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SidebarItem({
  icon,
  text,
  active,
  onClick,
}) {
  return (
    <button
      className={
        active
          ? "sidebar-item active"
          : "sidebar-item"
      }
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function FeedPage({
  profile,
  search,
  setSearch,
  filter,
  setFilter,
  notices,
  internships,
  scholarships,
  events,
  onNoticeClick,
}) {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            Personalized for you
          </p>

          <h1>Smart Campus Feed</h1>

          <p>
            Recent information for {profile.branch}, Year{" "}
            {profile.year}.
          </p>
        </div>

        <div className="for-you-badge">
          <Sparkles size={16} />
          For You
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="feed-section">
          <div className="search-row">
            <div className="search-box">
              <Search size={18} />

              <input
                placeholder="Search recent notices..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <div className="filter-row">
              {[
                "All",
                "Academic",
              ].map((item) => (
                <button
                  key={item}
                  className={
                    filter === item
                      ? "filter active"
                      : "filter"
                  }
                  onClick={() =>
                    setFilter(item)
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <FeedSection
            title="Recent Notices"
            subtitle="Only the latest important updates"
            items={notices}
            icon={<AlertCircle />}
            onItemClick={onNoticeClick}
          />

          <FeedSection
            title="Internships"
            subtitle="Recent opportunities"
            items={internships}
            icon={<Briefcase />}
            onItemClick={onNoticeClick}
          />

          <FeedSection
            title="Scholarships"
            subtitle="Latest scholarship updates"
            items={scholarships}
            icon={<Award />}
            onItemClick={onNoticeClick}
          />

          <FeedSection
            title="Events"
            subtitle="Hackathons, workshops, orientations & more"
            items={events.slice(0, 3)}
            icon={<CalendarDays />}
            onItemClick={onNoticeClick}
          />
        </section>

        <aside className="right-column">
          <UpdatedNotice />

          <div className="mini-card">
            <div className="mini-card-heading">
              <div>
                <h3>Coming Up</h3>
                <p>Next campus activities</p>
              </div>

              <CalendarDays size={20} />
            </div>

            {events.slice(0, 3).map(
              (event) => (
                <div
                  className="event-mini"
                  key={event.id}
                >
                  <div className="event-date">
                    <strong>
                      {new Date(
                        event.date
                      ).getDate()}
                    </strong>

                    <span>
                      {new Date(
                        event.date
                      ).toLocaleString(
                        "en",
                        {
                          month: "short",
                        }
                      )}
                    </span>
                  </div>

                  <div>
                    <strong>
                      {event.title}
                    </strong>

                    <span>
                      {event.eventTime} ·{" "}
                      {event.venue}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="today-card">
            <div className="today-icon">
              <Sparkles />
            </div>

            <div>
              <span>SMART INSIGHT</span>

              <h3>
                Your feed adapts to you
              </h3>

              <p>
                Branch, year and interests help
                UniHub surface relevant opportunities.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FeedSection({
  title,
  subtitle,
  items,
  icon,
  onItemClick,
}) {
  return (
    <section className="feed-block">
      <div className="section-title">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <span>{items.length} updates</span>
      </div>

      <div className="notice-list">
        {items.map((item) => (
          <button
            className="notice-card"
            key={item.id}
            onClick={() => onItemClick(item)}
          >
            <div className="notice-icon">
              {icon}
            </div>

            <div className="notice-content">
              <div className="notice-top">
                <span className="category-tag">
                  {item.category}
                </span>

                <span className="notice-time">
                  {item.time}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="notice-source">
                {item.source}
              </span>
            </div>

            <ExternalLink
              className="notice-open-icon"
              size={17}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function UpdatedNotice() {
  return (
    <div className="updated-card compact">
      <div className="updated-heading">
        <RefreshCw size={17} />

        <div>
          <strong>NOTICE UPDATED</strong>
          <p>Smart Diff Detector</p>
        </div>
      </div>

      <div className="diff-item">
        <strong>
          Innerve Society Orientation
        </strong>

        <div className="diff-row">
          <span>Time</span>

          <div>
            <del>10:00 AM</del>
            <b>11:00 AM</b>
          </div>
        </div>

        <div className="diff-row">
          <span>Venue</span>

          <div>
            <del>Seminar Hall</del>
            <b>Auditorium</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoticeModal({
  notice,
  onClose,
}) {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="notice-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="modal-header">
          <div>
            <span className="category-tag">
              {notice.category}
            </span>

            <h2>{notice.title}</h2>

            <p>
              {notice.source} ·{" "}
              {notice.time}
            </p>
          </div>

          <button
            className="icon-button"
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        <div className="detail-box">
          <h4>Details</h4>
          <p>{notice.details}</p>
        </div>

        {notice.deadline && (
          <div className="detail-row-large">
            <div>
              <Clock3 size={19} />
            </div>

            <div>
              <span>Deadline</span>
              <strong>
                {notice.deadline}
              </strong>
            </div>
          </div>
        )}

        {notice.eventTime && (
          <div className="detail-row-large">
            <div>
              <CalendarDays size={19} />
            </div>

            <div>
              <span>Date & Time</span>
              <strong>
                {notice.date} ·{" "}
                {notice.eventTime}
              </strong>
            </div>
          </div>
        )}

        {notice.venue && (
          <div className="detail-row-large">
            <div>
              <div>
                <strong>Venue</strong>
              </div>
            </div>

            <div>
              <span>Location</span>
              <strong>
                {notice.venue}
              </strong>
            </div>
          </div>
        )}

        <div className="modal-actions">
          <button
            className="secondary-button"
            onClick={onClose}
          >
            Close
          </button>

          <a
            className="primary-button"
            href={notice.link}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={17} />
            Registration / Official Link
          </a>
        </div>
      </div>
    </div>
  );
}

function ChatPage({
  messages,
  input,
  setInput,
  sendMessage,
}) {
  return (
    <div className="page chat-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            Your campus copilot
          </p>

          <h1>Campus AI Assistant</h1>

          <p>
            Ask about campus information or get help
            with coding.
          </p>
        </div>
      </div>

      <div className="chat-card">
        <div className="chat-header">
          <div className="ai-avatar">
            <Sparkles />
          </div>

          <div>
            <strong>UniHub AI</strong>

            <span>
              <span className="online-dot"></span>
              Online
            </span>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map(
            (message, index) => (
              <div
                className={
                  message.role === "user"
                    ? "chat-message user"
                    : "chat-message ai"
                }
                key={index}
              >
                {message.text}
              </div>
            )
          )}
        </div>

        <div className="quick-prompts">
          <button
            onClick={() =>
              setInput(
                "What are my upcoming events?"
              )
            }
          >
            Upcoming events
          </button>

          <button
            onClick={() =>
              setInput(
                "Tell me about internships"
              )
            }
          >
            Internships
          </button>

          <button
            onClick={() =>
              setInput(
                "Help me write HTML code"
              )
            }
          >
            Help with code
          </button>
        </div>

        <div className="chat-input">
          <input
            placeholder="Ask UniHub AI anything..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function CalendarPage({
  tasks,
  deleteTask,
  selectedDate,
  setSelectedDate,
  setShowTaskModal,
}) {
  const today = new Date();

  const [month, setMonth] =
    useState(today.getMonth());

  const [year, setYear] =
    useState(today.getFullYear());

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const days = [];

  for (
    let i = 0;
    i < firstDay;
    i++
  ) {
    days.push(null);
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {
    days.push(day);
  }

  const dateKey = (day) =>
    `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;

  const campusEvents = [
    ...events,
  ];

  const goPrevious = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const goNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const selectedEvents =
    campusEvents.filter(
      (event) =>
        event.date === selectedDate
    );

  const selectedTasks =
    tasks.filter(
      (task) =>
        task.date === selectedDate
    );

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            Plan your semester
          </p>

          <h1>Campus Calendar</h1>

          <p>
            Click any date to see events and your
            personal tasks.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() =>
            setShowTaskModal(true)
          }
        >
          <Plus size={18} />
          Add Task
        </button>
      </div>

      <div className="calendar-layout">
        <div className="calendar-card">
          <div className="calendar-top">
            <button
              className="calendar-arrow"
              onClick={goPrevious}
            >
              <ChevronLeft />
            </button>

            <h2>
              {new Date(
                year,
                month
              ).toLocaleString("en", {
                month: "long",
                year: "numeric",
              })}
            </h2>

            <button
              className="calendar-arrow"
              onClick={goNext}
            >
              <ChevronRight />
            </button>
          </div>

          <div className="calendar-weekdays">
            {[
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ].map((day) => (
              <span key={day}>
                {day}
              </span>
            ))}
          </div>

          <div className="calendar-grid">
            {days.map(
              (day, index) => {
                const key = day
                  ? dateKey(day)
                  : "";

                const dayEvents =
                  campusEvents.filter(
                    (event) =>
                      event.date ===
                      key
                  );

                const dayTasks =
                  tasks.filter(
                    (task) =>
                      task.date ===
                      key
                  );

                return (
                  <button
                    className={
                      day
                        ? key ===
                          selectedDate
                          ? "calendar-day selected"
                          : "calendar-day"
                        : "calendar-day empty"
                    }
                    key={index}
                    onClick={() => {
                      if (day) {
                        setSelectedDate(
                          key
                        );
                      }
                    }}
                  >
                    {day && (
                      <>
                        <span className="day-number">
                          {day}
                        </span>

                        <div className="calendar-events">
                          {dayEvents
                            .slice(
                              0,
                              2
                            )
                            .map(
                              (
                                event
                              ) => (
                                <span
                                  className="calendar-event"
                                  key={
                                    event.id
                                  }
                                >
                                  {
                                    event.title
                                  }
                                </span>
                              )
                            )}

                          {dayTasks
                            .slice(
                              0,
                              1
                            )
                            .map(
                              (
                                task
                              ) => (
                                <span
                                  className={
                                    task.type ===
                                    "Deadline"
                                      ? "calendar-event deadline"
                                      : "calendar-event task"
                                  }
                                  key={
                                    task.id
                                  }
                                >
                                  {
                                    task.title
                                  }
                                </span>
                              )
                            )}
                        </div>
                      </>
                    )}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div className="selected-date-card">
          <div className="selected-date-header">
            <div>
              <span>
                Selected date
              </span>

              <h2>
                {new Date(
                  selectedDate
                ).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </h2>
            </div>

            <CalendarDays />
          </div>

          <div className="selected-section">
            <h3>Campus Events</h3>

            {selectedEvents.length ===
            0 ? (
              <p className="empty-text">
                No campus events on this
                date.
              </p>
            ) : (
              selectedEvents.map(
                (event) => (
                  <div
                    className="selected-event"
                    key={event.id}
                  >
                    <strong>
                      {event.title}
                    </strong>

                    <span>
                      {event.eventTime} ·{" "}
                      {event.venue}
                    </span>

                    <small>
                      {event.source}
                    </small>
                  </div>
                )
              )
            )}
          </div>

          <div className="selected-section">
            <h3>Your Tasks</h3>

            {selectedTasks.length ===
            0 ? (
              <p className="empty-text">
                No personal tasks.
              </p>
            ) : (
              selectedTasks.map(
                (task) => (
                  <div
                    className="selected-task"
                    key={task.id}
                  >
                    <CheckCircle2 size={18} />

                    <div>
                      <strong>
                        {task.title}
                      </strong>

                      <span>
                        {task.type}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        deleteTask(
                          task.id
                        )
                      }
                    >
                      <Trash2
                        size={16}
                      />
                    </button>
                  </div>
                )
              )
            )}
          </div>

          <button
            className="add-date-task"
            onClick={() =>
              setShowTaskModal(true)
            }
          >
            <Plus size={17} />
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

function ListingPage({
  title,
  eyebrow,
  description,
  items,
  icon,
  onItemClick,
}) {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            {eyebrow}
          </p>

          <h1>{title}</h1>

          <p>{description}</p>
        </div>
      </div>

      <div className="listing-grid">
        {items.map((item) => (
          <button
            className="listing-card"
            key={item.id}
            onClick={() =>
              onItemClick(item)
            }
          >
            <div className="listing-icon">
              {icon}
            </div>

            <span className="category-tag">
              {item.category}
            </span>

            <h3>{item.title}</h3>

            <p>
              {item.description}
            </p>

            <div className="listing-bottom">
              <span>
                {item.deadline
                  ? `Deadline: ${item.deadline}`
                  : `${item.date} · ${item.eventTime}`}
              </span>

              <ExternalLink size={16} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ResourcesPage({
  resources,
}) {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            Student resources
          </p>

          <h1>Resources</h1>

          <p>
            Useful PYQs, notes and circulars
            collected from student resource channels.
          </p>
        </div>

        <div className="whatsapp-status">
          <MessageCircle size={17} />
          WhatsApp Source
        </div>
      </div>

      <div className="resource-info">
        <div className="resource-info-icon">
          <MessageCircle />
        </div>

        <div>
          <strong>
            Smart WhatsApp Resources
          </strong>

          <p>
            UniHub keeps the original source/group
            visible so students know where a file came
            from.
          </p>
        </div>
      </div>

      <div className="resource-grid">
        {resources.map(
          (resource) => (
            <div
              className="resource-card"
              key={resource.id}
            >
              <div className="resource-icon">
                <FileText />
              </div>

              <span className="resource-type">
                {resource.type}
              </span>

              <h3>
                {resource.title}
              </h3>

              <p>
                {resource.subject} ·{" "}
                {resource.size}
              </p>

              <div className="resource-source">
                <MessageCircle size={14} />

                <span>
                  From WhatsApp group:
                  <strong>
                    {resource.whatsappGroup}
                  </strong>
                </span>
              </div>

              <button
                className="download-button"
                onClick={() =>
                  alert(
                    `${resource.title} download would start here.`
                  )
                }
              >
                <Download size={17} />
                Download
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function SettingsPage({
  profile,
  setProfile,
  darkMode,
  setDarkMode,
  accent,
  setAccent,
  saveProfile,
}) {
  const interests = [
    "AI/ML",
    "Coding",
    "Hackathons",
    "Internships",
    "Design",
    "Entrepreneurship",
    "Cybersecurity",
  ];

  const updateInterest = (
    interest
  ) => {
    const exists =
      profile.interests.includes(
        interest
      );

    if (exists) {
      setProfile({
        ...profile,
        interests:
          profile.interests.filter(
            (item) =>
              item !== interest
          ),
      });
    } else {
      setProfile({
        ...profile,
        interests: [
          ...profile.interests,
          interest,
        ],
      });
    }
  };

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            Personalize UniHub
          </p>

          <h1>
            Settings
          </h1>

          <p>
            Update your profile, interests,
            theme and accent colour.
          </p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <div className="settings-title">
            <div className="settings-title-icon">
              <User />
            </div>

            <div>
              <h2>
                Personal Details
              </h2>

              <p>
                Used for personalized
                recommendations.
              </p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group full">
              <label>
                Name
              </label>

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

            <div className="form-group">
              <label>
                Year
              </label>

              <select
                value={profile.year}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    year: e.target.value,
                  })
                }
              >
                <option value="1">
                  1st Year
                </option>
                <option value="2">
                  2nd Year
                </option>
                <option value="3">
                  3rd Year
                </option>
                <option value="4">
                  4th Year
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Branch
              </label>

              <select
                value={profile.branch}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    branch: e.target.value,
                  })
                }
              >
                <option>
                  CSE
                </option>
                <option>
                  IT
                </option>
                <option>
                  ECE
                </option>
                <option>
                  AI & ML
                </option>
                <option>
                  MAE
                </option>
              </select>
            </div>

            <div className="form-group full">
              <label>
                Mobile Number
              </label>

              <div className="input-with-icon">
                <Smartphone size={17} />

                <input
                  placeholder="+91 XXXXX XXXXX"
                  value={profile.mobile}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      mobile:
                        e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="interest-section">
            <label>
              Your Interests
            </label>

            <p>
              These help UniHub personalize
              your feed.
            </p>

            <div className="interest-tags">
              {interests.map(
                (interest) => (
                  <button
                    key={interest}
                    className={
                      profile.interests.includes(
                        interest
                      )
                        ? "interest selected"
                        : "interest"
                    }
                    onClick={() =>
                      updateInterest(
                        interest
                      )
                    }
                  >
                    {profile.interests.includes(
                      interest
                    ) && (
                      <CheckCircle2
                        size={15}
                      />
                    )}

                    {interest}
                  </button>
                )
              )}
            </div>
          </div>

          <button
            className="primary-button save-button"
            onClick={saveProfile}
          >
            <CheckCircle2 size={18} />
            Save Changes
          </button>
        </div>

        <div className="settings-card">
          <div className="settings-title">
            <div className="settings-title-icon">
              <Sun />
            </div>

            <div>
              <h2>
                Appearance
              </h2>

              <p>
                Choose theme and accent colour.
              </p>
            </div>
          </div>

          <div className="theme-options">
            <button
              className={
                !darkMode
                  ? "theme-option active"
                  : "theme-option"
              }
              onClick={() =>
                setDarkMode(false)
              }
            >
              <Sun size={22} />

              <div>
                <strong>
                  Light Mode
                </strong>

                <span>
                  Clean & bright
                </span>
              </div>
            </button>

            <button
              className={
                darkMode
                  ? "theme-option active"
                  : "theme-option"
              }
              onClick={() =>
                setDarkMode(true)
              }
            >
              <Moon size={22} />

              <div>
                <strong>
                  Dark Mode
                </strong>

                <span>
                  Dark background + light text
                </span>
              </div>
            </button>
          </div>

          <div className="accent-section">
            <label>
              Accent Colour
            </label>

            <p>
              This changes buttons, highlights and
              the left navigation panel.
            </p>

            <div className="accent-options">
              {Object.entries(
                accentColors
              ).map(
                ([key, color]) => (
                  <button
                    key={key}
                    className={
                      accent === key
                        ? "accent-option selected"
                        : "accent-option"
                    }
                    onClick={() =>
                      setAccent(key)
                    }
                  >
                    <span
                      style={{
                        background:
                          color.main,
                      }}
                    ></span>

                    {color.name}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="theme-preview">
            <div
              className="preview-sidebar"
              style={{
                background: `linear-gradient(180deg, ${accentColors[accent].dark}, ${accentColors[accent].main})`,
              }}
            ></div>

            <div className="preview-content">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;