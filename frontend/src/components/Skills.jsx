const skills = [
  { name: 'Manual Testing', category: 'core' },
  { name: 'Web App Testing', category: 'core' },
  { name: 'Mobile Testing (Android/iOS)', category: 'core' },
  { name: 'API Testing', category: 'core' },
  { name: 'Database Testing', category: 'core' },
  { name: 'Test Planning & Estimation', category: 'core' },
  { name: 'Selenium', category: 'automation' },
  { name: 'Cypress', category: 'automation' },
  { name: 'Appium', category: 'automation' },
  { name: 'WebdriverIO', category: 'automation' },
  { name: 'Robot Framework', category: 'automation' },
  { name: 'Postman', category: 'api' },
  { name: 'JIRA', category: 'tools' },
  { name: 'Confluence', category: 'tools' },
  { name: 'X-Ray', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Kibana', category: 'tools' },
  { name: 'Metabase', category: 'tools' },
  { name: 'Java', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Python Basics', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'Agile / Scrum', category: 'methodology' },
  { name: 'Kafka', category: 'tools' },
]

const categoryColors = {
  core: 'bg-green-50 text-green-700 border border-green-200',
  automation: 'bg-blue-50 text-blue-600 border border-blue-200',
  api: 'bg-purple-50 text-purple-600 border border-purple-200',
  tools: 'bg-gray-100 text-gray-600 border border-gray-200',
  language: 'bg-amber-50 text-amber-700 border border-amber-200',
  methodology: 'bg-pink-50 text-pink-600 border border-pink-200',
}

function Skills() {
  return (
    <section id="skills" className="px-10 py-16 bg-gray-50 border-b border-gray-200">

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Skills & Tools
      </h2>
      <p className="text-gray-400 text-center text-sm mb-10">
        Technologies and methodologies I work with
      </p>

      <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`text-sm px-4 py-2 rounded-full font-medium ${categoryColors[skill.category]}`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      <div className="flex gap-6 justify-center mt-10 flex-wrap">
        <span className="text-xs text-green-700">🟢 Core QA</span>
        <span className="text-xs text-blue-600">🔵 Automation</span>
        <span className="text-xs text-purple-600">🟣 API</span>
        <span className="text-xs text-amber-700">🟡 Languages</span>
        <span className="text-xs text-pink-600">🩷 Methodology</span>
        <span className="text-xs text-gray-500">⚪ Tools</span>
      </div>

    </section>
  )
}

export default Skills