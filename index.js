import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'

import urlRoute from './routes/url.js'
import staticRoute from './routes/staticRouter.js'
import userRoute from './routes/user.js'

import { connectToMongoDB } from './connection.js'
import { checkAuth, restrictToLoggedInUserOnly } from './middlewares/auth.js'

// Initial setup
const app = express()
const PORT = 8001
// After '/' you need to write a new collection name
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB connected!"))

// Initializing the view
app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

// Middleware to parse json/urlencoded information coming from frontend
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Routes
app.use('/', checkAuth, staticRoute)
app.use('/url', restrictToLoggedInUserOnly, urlRoute)
app.use('/user', userRoute)

// To start the server at specified PORT
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))