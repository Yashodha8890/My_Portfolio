const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const contactRoute = require('./routes/contact')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/contact', contactRoute)

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend is running!' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})