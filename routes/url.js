import express from 'express'

import { handleGenerateNewShortUrl, handleGetRedirected, handleGetAnalytics } from '../controllers/url.js';

const router = express.Router();

router.post('/', handleGenerateNewShortUrl)
router.get('/:shortID', handleGetRedirected)
router.get('/analytics/:shortID', handleGetAnalytics)


export default router