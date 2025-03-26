import express from 'express'
import path from 'path'

import urlRoute from './routes/url.js'
import staticRoute from './routes/staticRouter.js'
import { connectToMongoDB } from './connection.js'
import { URL } from './models/url.js'

const app = express()
const PORT = 8001
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB connected!"))

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

// app.get("/test", async(req, res) => {
//   const allUrls = await URL.find({})
//   return res.render("home", {
//     urls: allUrls
//   })
// })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', staticRoute)
app.use('/url', urlRoute)


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))