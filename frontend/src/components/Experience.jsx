import { useState } from 'react'

const companies = [
  {
    company: 'Calcey Technologies',
    location: 'Singapore / Sri Lanka',
    period: 'May 2022 – Jul 2023',
    totalDuration: '1 year 2 months',
    type: 'Project',
    roles: [
      {
        role: 'Senior Software QA Engineer (Remote)',
        period: 'Feb 2023 – Jul 2023',
        location: 'Singapore',
        responsibilities: [
          'Performing Test Planning & Designing, providing testing estimation',
          'End to end manual testing including smoke, regression, UI testing for Web, iOS & Android',
          'Cross browser testing with BrowserStack',
          'API testing with Postman',
          'Reporting issues with JIRA bug tracking tool',
          'Mobile app automation scripts with WebdriverIO, TypeScript and Appium',
          'Grooming junior QA engineers',
        ],
        testingTypes: ['Smoke', 'Regression', 'UI', 'API', 'Cross Browser', 'Mobile Automation'],
      },
      {
        role: 'Senior Software QA Engineer',
        period: 'May 2022 – Jan 2023',
        location: 'Sri Lanka',
        responsibilities: [
          'Manual testing for Web (React-Native), Mobile (Android) and API (Postman/Swagger)',
          'Test planning, estimation, test case writing and execution',
          'Reporting issues with JIRA bug tracking tool',
          'Database testing with SQLite, Cassandra and MongoDB',
          'Working in Agile Scrum environment',
        ],
        testingTypes: ['Functional', 'API', 'Database', 'Mobile', 'Regression'],
      },
    ],
  },
  {
    company: 'Digital Mobility Solutions Lanka (PVT) LTD',
    location: 'Sri Lanka',
    period: 'Apr 2018 – May 2022',
    totalDuration: '4 years 1 month',
    type: 'Product',
    roles: [
      {
        role: 'Associate Software QA Lead',
        period: 'Jul 2021 – May 2022',
        location: 'Sri Lanka',
        responsibilities: [
          'Leading and grooming the QA team',
          'Risk identification, impact analysis and troubleshooting',
          'Implementing, coordinating, monitoring and evaluating testing procedures and plans',
          'Manual testing for Mobile (iOS/Android), API (Postman), Database',
          'Microservices and event-driven testing with Kafka/Lenses',
          'Reviewing test cases and defect reports',
          'Involved in Product and Sprint Backlog grooming meetings',
          'Executing regression test suite automation',
        ],
        testingTypes: ['Functional', 'Non-functional', 'Integration', 'Smoke', 'System', 'Regression', 'Usability', 'Beta', 'UAT', 'Exploratory'],
      },
      {
        role: 'Senior Software QA Engineer',
        period: 'Jul 2019 – Jun 2021',
        location: 'Sri Lanka',
        responsibilities: [
          'Testing estimation, design test cases, writing and end to end execution',
          'Create test sets, test plans and execution plans with X-Ray test management tool',
          'Static testing on Product Requirement and Functional Specifications',
          'Manual testing for Web (Angular, Node.js, Golang) and Mobile (Android/iOS)',
          'API testing with Postman and reporting issues with JIRA',
        ],
        testingTypes: ['Functional', 'Non-functional', 'Negative', 'UI', 'Integration', 'Smoke', 'System', 'Regression', 'Retesting', 'Usability', 'Database'],
      },
      {
        role: 'Software QA Engineer',
        period: 'Apr 2018 – Jun 2019',
        location: 'Sri Lanka',
        responsibilities: [
          'Writing test cases and test execution defect reporting with JIRA',
          'Manual testing for Web application and Mobile (Android)',
          'API testing with Postman',
          'Migration testing on Google Cloud',
        ],
        testingTypes: ['Functional', 'Negative', 'UI', 'Integration', 'Smoke', 'Retesting', 'Usability', 'Migration'],
      },
    ],
  },
  {
    company: 'Reservation Gateway (PVT) LTD',
    location: 'Sri Lanka',
    period: 'Jul 2015 – Apr 2018',
    totalDuration: '2 years 9 months',
    type: 'Project',
    roles: [
      {
        role: 'Quality Assurance Analyst',
        period: 'Jul 2017 – Apr 2018',
        location: 'Sri Lanka',
        responsibilities: [
          'Analyzing use cases, designing, writing and executing test cases',
          'Defect reporting with JIRA',
          'Manual testing for Web, XML verification on 3rd party servers, API (SOAP)',
          'Involved in internal and client feature demonstrations',
          'Grooming junior QA members and automation script execution',
        ],
        testingTypes: ['Functional', 'Non-functional', 'Usability', 'Smoke', 'Regression', 'Retesting', 'Exploratory', 'System', 'Integration'],
      },
      {
        role: 'Associate Quality Assurance Analyst',
        period: 'Feb 2016 – Jul 2017',
        location: 'Sri Lanka',
        responsibilities: [
          'Designing, writing and executing test cases',
          'Manual testing for Web applications',
          'Defect reporting and defect life cycle management',
          'Conducted internal feature demonstrations',
          'Working in Agile Scrum environment',
        ],
        testingTypes: ['Functional', 'Smoke', 'Regression', 'Usability', 'Integration'],
      },
      {
        role: 'Quality Assurance Analyst · Intern',
        period: 'Jul 2015 – Feb 2016',
        location: 'Sri Lanka',
        responsibilities: [
          'Deriving test cases from SRS and Product/Feature requirement documents',
          'Test execution in Web applications and defect reporting',
          'Familiarizing with various phases of SDLC and STLC',
          'Working in Agile Scrum and Agile QA environment',
          'Getting familiar with the travel domain',
        ],
        testingTypes: ['Functional', 'Smoke', 'Usability', 'Web Testing'],
      },
    ],
  },
]

function CompanyCard({ company }) {
  const [openRoles, setOpenRoles] = useState([])

  const toggleRole = (index) => {
    setOpenRoles((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">

      {/* Company Header */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-base font-semibold text-gray-800">
            {company.company}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {company.location} · {company.period}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            company.type === 'Product'
              ? 'bg-blue-50 text-blue-600'
              : 'bg-purple-50 text-purple-600'
          }`}>
            {company.type}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            {company.totalDuration}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-3 pt-3 flex flex-col gap-0">
        {company.roles.map((role, index) => (
          <div key={index} className="flex gap-4">

            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div>
              {index !== company.roles.length - 1 && (
                <div className="w-px flex-1 bg-gray-200 my-1"></div>
              )}
            </div>

            {/* Role content */}
            <div className="pb-4 flex-1">
              <p className="text-sm font-medium text-gray-700">{role.role}</p>
              <p className="text-gray-400 text-xs">{role.location} · {role.period}</p>

              {/* Testing type pills */}
              <div className="flex flex-wrap gap-1 mt-2">
                {role.testingTypes.slice(0, 3).map((type) => (
                  <span key={type} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                    {type}
                  </span>
                ))}
                {role.testingTypes.length > 3 && (
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">
                    +{role.testingTypes.length - 3} more
                  </span>
                )}
              </div>

              {/* Expanded content */}
              {openRoles.includes(index) && (
                <div className="mt-3">
                  <ul className="space-y-1.5">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
                        <span className="text-blue-400 shrink-0 mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-gray-100">
                    {role.testingTypes.map((type) => (
                      <span key={type} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Toggle button */}
              <button
                onClick={() => toggleRole(index)}
                className="mt-2 text-xs text-blue-500 hover:text-blue-700 font-medium"
              >
                {openRoles.includes(index) ? '▲ Show less' : '▼ Show more'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="px-10 py-16 bg-gray-50 border-b border-gray-200">

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Work Experience
      </h2>
      <p className="text-gray-400 text-center text-sm mb-10">
        8 years of professional QA journey across 3 companies
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
        {companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>

    </section>
  )
}

export default Experience