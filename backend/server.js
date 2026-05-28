const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const contactRoute = require('./routes/contact')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://my-portfolio-six-woad-16.vercel.app'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}))

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