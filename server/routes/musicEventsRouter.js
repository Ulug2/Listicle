import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import musicData from '../data/musicData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()


router.get('/', (req, res) => {
  try {
    res.status(200).json(musicData)
  }
  catch (e) {
    console.error('Error sending music data:', e);
    res.status(500).json({ error: 'An error occurred while fetching music events.' });
  }
})

router.get('/:musicId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/musicEvent.html'))
})

export default router;