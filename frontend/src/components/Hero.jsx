import profilePhoto from '../assets/profile.jpeg'

function Hero() {
  return (
    <section id="about" className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-16 py-20 flex items-center gap-16">

        {/* Left — Photo */}
        <div className="shrink-0">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover border-4 border-blue-100 shadow-md"
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Yashodha Amarasinghe
          </h1>

          <p className="text-blue-600 font-medium text-xl mb-4">
            Senior Software QA Engineer · 8 Years Experience
          </p>

          <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-6">
            Software quality assurance professional with 8 years of experience across
            diverse industries and domains. Skilled in manual testing, test automation,
            API testing and mobile testing. Strong team player with proven leadership,
            currently completing a BBA in Computer Application at HAMK, Finland.
          </p>

          <div className="flex gap-3 flex-wrap mb-8">
            <span className="text-sm px-4 py-1.5 rounded-full bg-blue-50 text-blue-600">
              📍 Tampere, Finland
            </span>
            <span className="text-sm px-4 py-1.5 rounded-full bg-green-50 text-green-700">
              ✅ Open to Work
            </span>
            <span className="text-sm px-4 py-1.5 rounded-full bg-amber-50 text-amber-700">
              🎓 BBA at HAMK · In Progress
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#projects"
              className="bg-blue-600 text-white text-sm px-6 py-3 rounded-md hover:bg-blue-700">
              View My Work
            </a>
            <a href="/cv.pdf" download
              className="border border-gray-300 text-gray-500 text-sm px-6 py-3 rounded-md hover:bg-gray-50">
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero