function Navbar() {
  return (
    // <nav className="flex justify-between items-center px-10 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
    <nav style={{backgroundColor: '#16274bff'}} className="flex justify-between items-center px-16 py-5 sticky top-0 z-50">

      
      <div className="text-white font-bold text-lg">
        YA · QA Engineer
      </div>

      <ul className="flex gap-8 list-none">
        <li><a href="#about" className="text-white text-base hover:text-blue-300">About</a></li>
        <li><a href="#skills" className="text-white text-base hover:text-blue-300">Skills</a></li>
        <li><a href="#experience" className="text-white text-base hover:text-blue-300">Experience</a></li>
        <li><a href="#projects" className="text-white text-base hover:text-blue-300">Projects</a></li>
        <li><a href="#certifications" className="text-white text-base hover:text-blue-300">Certifications</a></li>
        <li><a href="#contact" className="text-white text-base hover:text-blue-300">Contact</a></li>
      </ul>

      <a href="/cv.pdf" download
        className="text-base bg-white text-blue-800 px-5 py-2.5 rounded-md hover:bg-blue-100">
          Download CV
      </a>

    </nav>
  )
}

export default Navbar