import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import musicData from '../data/musicData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) // to contain the directory name of the current module file.

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Serving JSON data for /musicEvents')
    res.status(200).json(musicData)
})

router.get('/:musicId', (req, res) => {
  console.log(`Serving HTML for music event ID: ${req.params.musicId}`)
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/musicEvent.html'))
})

export default router;