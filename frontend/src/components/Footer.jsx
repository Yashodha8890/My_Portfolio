function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-10 py-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">

        {/* Name and role */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-800">Your Full Name</p>
          <p className="text-xs text-gray-400 mt-1">Senior Software QA Engineer · Tampere, Finland</p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a href="#about" className="text-xs text-gray-400 hover:text-blue-600">About</a>
          <a href="#skills" className="text-xs text-gray-400 hover:text-blue-600">Skills</a>
          <a href="#experience" className="text-xs text-gray-400 hover:text-blue-600">Experience</a>
          <a href="#projects" className="text-xs text-gray-400 hover:text-blue-600">Projects</a>
          <a href="#certifications" className="text-xs text-gray-400 hover:text-blue-600">Certifications</a>
          <a href="#contact" className="text-xs text-gray-400 hover:text-blue-600">Contact</a>
        </div>

        {/* Social links */}
        <div className="flex gap-4">
          
            <a href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
          >
            LinkedIn
          </a>
          
            <a href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200"
          >
            GitHub
          </a>
          
            <a href="/cv.pdf"
            download
            className="text-xs px-3 py-1.5 bg-green-50 text-green-700 rounded-full hover:bg-green-100"
          >
            Download CV
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-400 text-center">
            © 2025 Your Full Name · Built with React & Node.js · Tampere, Finland
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer