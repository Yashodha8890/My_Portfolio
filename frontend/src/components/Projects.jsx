import { useState } from 'react'

const industryProjects = [
  {
    name: 'AiScout',
    category: 'Product',
    type: 'Mobile App',
    company: 'Calcey Technologies',
    period: 'May 2022 – Jul 2023',
    domain: 'Sports Technology',
    description: 'A football scouting platform with three mobile apps — Player App, Scout App and Coach App — available on Android and iOS.',
    myRole: 'End to end manual testing of all three mobile apps, automation scripts with WebdriverIO and Appium, API testing with Postman, cross browser testing with BrowserStack.',
    tags: ['Mobile Testing', 'Appium', 'WebdriverIO', 'Postman', 'BrowserStack', 'iOS', 'Android'],
    color: 'border-blue-100',
    badge: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'DreamSave & DreamSave Insights',
    category: 'Product',
    type: 'Mobile + Web App',
    company: 'Calcey Technologies',
    period: 'May 2022 – Jul 2023',
    domain: 'Finance / NGO',
    description: 'DreamSave is a mobile banking app for an NGO client empowering community savings groups. DreamSave Insights is its companion web analytics platform for reporting and visualizing savings data.',
    myRole: 'Tested both the mobile app (Android/iOS) and web platform. API testing with Postman, functional, regression and database testing. Both products handled by the same team.',
    tags: ['Mobile Testing', 'Web Testing', 'API Testing', 'Postman', 'Regression', 'Database Testing'],
    color: 'border-green-100',
    badge: 'bg-green-50 text-green-700',
  },
  {
    name: 'PickMe Driver Suite',
    category: 'Product',
    type: 'Mobile + Web App',
    company: 'Digital Mobility Solutions Lanka',
    period: 'Apr 2018 – May 2022',
    domain: 'Transport / Ride-hailing',
    description: 'A suite of three products — Driver App (Android/iOS) for trip management, Driver Registration Portal (web) for internal operations staff, and Dispatcher Portal (web) for customer care trip dispatching.',
    myRole: 'End to end testing of all three products — mobile app, web portals and APIs. Functional, regression, UI and API testing with Postman. Defect reporting with JIRA.',
    tags: ['Mobile Testing', 'Web Testing', 'API Testing', 'Postman', 'JIRA', 'Android', 'iOS'],
    color: 'border-amber-100',
    badge: 'bg-amber-50 text-amber-700',
  },
  {
    name: 'Bonotel',
    category: 'Project',
    type: 'Web App',
    company: 'Reservation Gateway (PVT) LTD',
    period: 'Jul 2015 – Apr 2018',
    domain: 'Travel / B2B',
    description: 'A B2B web application providing reservations for flights, hotels and activities. Provided availability data as bulk XML output via API for certain customers.',
    myRole: 'Manual testing of the web application, XML output verification from API using SoapUI, functional, regression and integration testing. Defect reporting with JIRA.',
    tags: ['Web Testing', 'SoapUI', 'XML Verification', 'SOAP API', 'Regression', 'JIRA'],
    color: 'border-purple-100',
    badge: 'bg-purple-50 text-purple-600',
  },
]

const academicProjects = [
  {
    name: 'Daily Routine Tracker — Web App',
    type: 'Full Stack Web App',
    period: '2024',
    domain: 'Productivity',
    description: 'A full-stack web application helping users organize and monitor daily life through structured tracking of activities and expenses. Features activity planning with CRUD, expense logging, dashboard summaries and user authentication.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Handlebars.js', 'HTML', 'CSS', 'JavaScript', 'Passport.js', 'Postman'],
    highlights: [
      'Activity tracker with CRUD — to-do tasks, meals, workouts, meetings',
      'Expense tracker with income/expense logs and financial summaries',
      'Secure user authentication with Passport.js',
      'Deployed on Azure cloud service',
      'API tested with Postman following accessibility guidelines',
    ],
    github: 'https://github.com/yourusername/daily-routine-tracker-web',
    badge: 'bg-blue-50 text-blue-600',
    color: 'border-blue-100',
  },
  {
    name: 'Daily Routine Tracker — Mobile App',
    type: 'Cross-platform Mobile App',
    period: '2024',
    domain: 'Productivity',
    description: 'A cross-platform mobile app built with React Native (Expo) and SQLite for offline data storage. Helps users plan, track and reflect on daily activities with local notifications and progress statistics.',
    techStack: ['React Native', 'Expo SDK 53+', 'SQLite', 'Expo Notifications', 'React Navigation', 'JavaScript'],
    highlights: [
      'Add, edit and delete daily routines with date-wise tracking',
      'Local push notifications for activity reminders',
      'Offline data storage with SQLite — works without internet',
      'Progress statistics and summaries dashboard',
      'Light/Dark mode support with secure login/logout',
    ],
    github: 'https://github.com/shammi22000/DailyRoutineTrackerNew',
    badge: 'bg-purple-50 text-purple-600',
    color: 'border-purple-100',
  },
  {
    name: "Theo's Factory",
    type: 'Full Stack Web App',
    period: '2024 – 2025',
    domain: 'Event Services',
    description: 'A full-stack event services web application with three separate user flows — public guest browsing, logged-in customer workflows, and a fully separated admin dashboard. Built with React, Node.js, Express and MongoDB.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Axios'],
    highlights: [
      'Public pages — Home, Services, Gallery, Book Appointment, Request Quotation',
      'Customer dashboard — appointments, rentals, quotations, profile management',
      'Admin dashboard — bookings, inventory, orders and gallery management',
      'JWT authentication with role-based access control (customer vs admin)',
      'Day/Night mode persisted across sessions',
    ],
    github: 'https://github.com/yourusername/theos-factory',
    badge: 'bg-amber-50 text-amber-700',
    color: 'border-amber-100',
  },
]

function IndustryCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`bg-white border ${project.color} rounded-xl p-5`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-base font-semibold text-gray-800">{project.name}</h3>
        <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
          <span className={`text-xs px-2 py-1 rounded-full ${project.badge}`}>
            {project.category}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">
            {project.type}
          </span>
        </div>
      </div>

      <p className="text-xs text-blue-600 font-medium">{project.company}</p>
      <p className="text-xs text-gray-400 mt-0.5">{project.domain} · {project.period}</p>
      <p className="text-xs text-gray-500 leading-relaxed mt-3">{project.description}</p>

      {isOpen && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-700 mb-1">My Role:</p>
          <p className="text-xs text-gray-500 leading-relaxed">{project.myRole}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-1 mt-3">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-3 text-xs text-blue-500 hover:text-blue-700 font-medium"
      >
        {isOpen ? '▲ Hide my role' : '▼ Show my role'}
      </button>
    </div>
  )
}

function AcademicCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`bg-white border ${project.color} rounded-xl p-5`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-base font-semibold text-gray-800">{project.name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full shrink-0 ml-2 ${project.badge}`}>
          {project.type}
        </span>
      </div>

      <p className="text-xs text-gray-400 mt-0.5">{project.domain} · {project.period}</p>
      <p className="text-xs text-gray-500 leading-relaxed mt-3">{project.description}</p>

      {isOpen && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-700 mb-2">Key Features:</p>
          <ul className="space-y-1.5">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
                <span className="text-blue-400 shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-1 mt-3">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs text-blue-500 hover:text-blue-700 font-medium"
        >
          {isOpen ? '▲ Hide features' : '▼ Show features'}
        </button>
        
          <a href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          GitHub →
        </a>
      </div>
    </div>
  )
}

function Projects() {
  const [activeTab, setActiveTab] = useState('industry')

  return (
    <section id="projects" className="px-10 py-16 bg-white border-b border-gray-200">

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Projects & Products
      </h2>
      <p className="text-gray-400 text-center text-sm mb-8">
        Industry QA experience and academic development projects
      </p>

      <div className="flex gap-3 justify-center mb-10">
        <button
          onClick={() => setActiveTab('industry')}
          className={`text-sm px-6 py-2.5 rounded-full border transition-all ${
            activeTab === 'industry'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300'
          }`}
        >
          🏢 Industry QA Projects
        </button>
        <button
          onClick={() => setActiveTab('academic')}
          className={`text-sm px-6 py-2.5 rounded-full border transition-all ${
            activeTab === 'academic'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300'
          }`}
        >
          🎓 Academic Projects · HAMK
        </button>
      </div>

      {activeTab === 'industry' && (
        <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
          {industryProjects.map((project, index) => (
            <IndustryCard key={index} project={project} />
          ))}
        </div>
      )}

      {activeTab === 'academic' && (
        <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
          {academicProjects.map((project, index) => (
            <AcademicCard key={index} project={project} />
          ))}
        </div>
      )}

    </section>
  )
}

export default Projects