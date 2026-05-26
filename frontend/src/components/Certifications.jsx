const certifications = [
  {
    name: 'ISTQB Certified Tester — Agile Tester (CTFE-AT)',
    issuer: 'International Software Testing Qualifications Board',
    date: 'Jul 2020',
    credentialId: 'FE124',
    color: 'border-blue-100',
    badge: 'bg-blue-50 text-blue-600',
    icon: '🏆',
  },
  {
    name: 'ISTQB Certified Tester — Foundation Level (CTFL)',
    issuer: 'International Software Testing Qualifications Board',
    date: 'Dec 2018',
    credentialId: 'FL1814',
    color: 'border-green-100',
    badge: 'bg-green-50 text-green-700',
    icon: '🏆',
  },
  {
    name: 'Certified ScrumMaster (CSM)',
    issuer: 'Scrum Alliance',
    date: 'Jul 2019',
    credentialId: '966895',
    color: 'border-amber-100',
    badge: 'bg-amber-50 text-amber-700',
    icon: '🏆',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="px-10 py-16 bg-gray-50 border-b border-gray-200">

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Certifications
      </h2>
      <p className="text-gray-400 text-center text-sm mb-10">
        Professional certifications and qualifications
      </p>

      <div className="grid grid-cols-3 gap-5 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`bg-white border ${cert.color} rounded-xl p-5 flex flex-col gap-3`}
          >
            <div className="flex justify-between items-start">
              <span className="text-2xl">{cert.icon}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${cert.badge}`}>
                {cert.date}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-gray-800 leading-snug">
              {cert.name}
            </h3>

            <p className="text-xs text-gray-400 leading-relaxed">
              {cert.issuer}
            </p>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                Credential ID:
                <span className="text-gray-600 font-medium ml-1">
                  {cert.credentialId}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Certifications