import { useState } from 'react'

const education = [
  {
    degree: 'BBA in Computer Application',
    university: 'HAMK Häme University of Applied Sciences',
    location: 'Hämeenlinna, Finland',
    period: 'Aug 2023 – Present',
    status: 'In Progress',
    website: 'https://www.hamk.fi/',
    highlights: [
      'Full stack web development with React, Node.js, Express and MongoDB',
      'Cross-platform mobile development with React Native and Expo',
      'Database management and cloud deployment on Azure',
      'Agile project management and software engineering principles',
    ],
    badge: 'bg-blue-50 text-blue-600',
    color: 'border-blue-100',
  },
  {
    degree: 'BSc (Special Hons) in Information Technology',
    university: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Malabe, Sri Lanka',
    period: 'Nov 2011 – Feb 2015',
    status: 'Completed',
    website: 'https://www.sliit.lk/',
    highlights: [
      'Software engineering, systems analysis and design',
      'Database management, networking and web technologies',
      'Object-oriented programming and software quality assurance',
      'Final year research project in software development',
    ],
    badge: 'bg-green-50 text-green-700',
    color: 'border-green-100',
  },
]

const languages = [
  { name: 'English', level: 'C1', label: 'Professional', color: 'bg-blue-50 text-blue-600' },
  { name: 'Finnish', level: 'A1', label: 'Beginner', color: 'bg-amber-50 text-amber-700' },
  { name: 'Sinhala', level: 'C2', label: 'Native', color: 'bg-green-50 text-green-700' },
]

function Education() {
  return (
    <section id="education" className="px-16 py-20 bg-white border-b border-gray-200">

      <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
        Education
      </h2>
      <p className="text-gray-400 text-center text-base mb-12">
        Academic background and qualifications
      </p>

      {/* Degrees */}
      <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`bg-white border ${edu.color} rounded-xl p-6`}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-3xl">🎓</span>
              <span className={`text-sm px-3 py-1 rounded-full ${edu.badge}`}>
                {edu.status}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {edu.degree}
            </h3>
            <p className="text-blue-600 text-sm font-medium">{edu.university}</p>
            <p className="text-gray-400 text-sm mt-1">{edu.location} · {edu.period}</p>

            <ul className="mt-4 space-y-2">
              {edu.highlights.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-500 leading-relaxed">
                  <span className="text-blue-400 shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>

            
              <a href={edu.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-blue-500 hover:text-blue-700"
            >
              Visit website →
            </a>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-6">
          Languages
        </h3>
        <div className="grid grid-cols-3 gap-5">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-5"
            >
              <span className="text-3xl">
                
                {lang.name === 'English' ? '🇺🇸' : lang.name === 'Finnish' ? '🇫🇮' : '🇱🇰'}
              </span>
              <div>
                <p className="text-base font-semibold text-gray-800">{lang.name}</p>
                <p className="text-sm text-gray-400">{lang.label}</p>
              </div>
              <span className={`ml-auto text-sm px-3 py-1 rounded-full font-medium ${lang.color}`}>
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Education