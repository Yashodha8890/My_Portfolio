function Footer() {
  return (
    <footer style={{backgroundColor: '#1e3a5f'}} className="px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        <div className="text-center">
          <p className="text-lg font-bold text-white">Your Full Name</p>
          <p className="text-base text-gray-300 mt-1">Senior Software QA Engineer · Tampere, Finland</p>
        </div>

        <div className="flex gap-8">
          <a href="#about" className="text-base text-gray-300 hover:text-white">About</a>
          <a href="#skills" className="text-base text-gray-300 hover:text-white">Skills</a>
          <a href="#experience" className="text-base text-gray-300 hover:text-white">Experience</a>
          <a href="#projects" className="text-base text-gray-300 hover:text-white">Projects</a>
          <a href="#certifications" className="text-base text-gray-300 hover:text-white">Certifications</a>
          <a href="#contact" className="text-base text-gray-300 hover:text-white">Contact</a>
        </div>

        <div className="flex gap-4">
          
          <a href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400"
          >
            LinkedIn
          </a>
          
           <a href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base px-5 py-2 bg-white text-blue-900 rounded-full hover:bg-gray-100"
          >
            GitHub
          </a>
          
           <a href="/cv.pdf"
            download
            className="text-base px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-400"
          >
            Download CV
          </a>
        </div>

        {/* Bottom bar — same navy */}
        <div className="w-full pt-6" style={{borderTop: '1px solid #2d5a8e'}}>
          <p className="text-sm text-gray-400 text-center">
            © 2025 Your Full Name · Built with React & Node.js · Tampere, Finland
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer