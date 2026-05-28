import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-16 py-20 bg-gray-50 border-b border-gray-200">

      <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
        Contact Me
      </h2>
      <p className="text-gray-400 text-center text-base mb-12">
        Feel free to reach out for opportunities or collaborations
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10">

        {/* Left — Contact Info */}
        <div className="flex flex-col gap-6">

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-5">
              Get in touch
            </h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-base text-blue-600 font-medium">your.email@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg">
                  💼
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  
                    <a href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-blue-600 font-medium hover:text-blue-700"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg">
                  🐙
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  
                   <a href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-blue-600 font-medium hover:text-blue-700"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-base text-gray-600 font-medium">Tampere, Finland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-green-50 border border-green-100 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-base font-semibold text-green-700">Available for work</p>
            </div>
            <p className="text-sm text-green-600 leading-relaxed">
              Currently seeking QA Engineer opportunities in Finland.
              Open to full-time, part-time and contract roles.
            </p>
          </div>

        </div>

        {/* Right — Contact Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-5">
            Send a message
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="w-full text-base px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full text-base px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Job Opportunity"
                className="w-full text-base px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message here..."
                className="w-full text-base px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400 resize-none"
              />
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-600 bg-green-50 px-4 py-3 rounded-lg">
                ✅ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-lg">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-blue-600 text-white text-base py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact