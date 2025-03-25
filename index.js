import express from 'express'

import urlRoute from './routes/url.js'
import { connectToMongoDB } from './connection.js'
import { URL } from './models/url.js'

const app = express()
const PORT = 8001
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB connected!"))

app.use(express.json())

app.use('/url', urlRoute)


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))