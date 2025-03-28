import { nanoid } from 'nanoid'

import { URL } from '../models/url.js'

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body
  if (!body || !body.url) return res.status(400).json({ error: "URL is required" })

  const shortID = nanoid(8)

  await URL.create({
    shortUrl: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id
  })

  return res.render('home' , { id: shortID})
}

async function handleGetRedirected(req, res) {
  const shortID = req.params.shortID

  const entry = await URL.findOneAndUpdate({
    shortUrl: shortID
  }, { $push: {
    visitHistory: { timestamp: Date.now()}
  }})

  if (!entry.redirectUrl.startsWith("http")) {
    return res.redirect(`https://${entry.redirectUrl}`);
  }
  else res.redirect(entry.redirectUrl);

}

async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID

  const result = await URL.findOne({ shortUrl: shortID})

  return res.json({ totalClick: result.visitHistory.length, analytics: result.visitHistory})
}

export { handleGenerateNewShortUrl, handleGetRedirected, handleGetAnalytics }