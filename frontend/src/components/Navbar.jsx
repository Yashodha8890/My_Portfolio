function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      
      <div className="text-blue-600 font-semibold text-base">
        YA · QA Engineer
      </div>

      <ul className="flex gap-6 list-none">
        <li><a href="#about" className="text-gray-500 text-sm hover:text-blue-600">About</a></li>
        <li><a href="#skills" className="text-gray-500 text-sm hover:text-blue-600">Skills</a></li>
        <li><a href="#experience" className="text-gray-500 text-sm hover:text-blue-600">Experience</a></li>
        <li><a href="#projects" className="text-gray-500 text-sm hover:text-blue-600">Projects</a></li>
        <li><a href="#certifications" className="text-gray-500 text-sm hover:text-blue-600">Certifications</a></li>
        <li><a href="#contact" className="text-gray-500 text-sm hover:text-blue-600">Contact</a></li>
      </ul>

      <a href="/cv.pdf" download 
        className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Download CV
      </a>

    </nav>
  )
}

export default Navbar