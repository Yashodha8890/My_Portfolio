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
    <section id="certifications" className="px-16 py-20 bg-gray-50 border-b border-gray-200">

      <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
        Certifications
      </h2>
      <p className="text-gray-400 text-center text-base mb-12">
        Professional certifications and qualifications
      </p>

      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`bg-white border ${cert.color} rounded-xl p-6 flex flex-col gap-4`}
          >
            <div className="flex justify-between items-start">
              <span className="text-3xl">{cert.icon}</span>
              <span className={`text-sm px-3 py-1 rounded-full ${cert.badge}`}>
                {cert.date}
              </span>
            </div>

            <h3 className="text-base font-semibold text-gray-800 leading-snug">
              {cert.name}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {cert.issuer}
            </p>

            <div className="pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-400">
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