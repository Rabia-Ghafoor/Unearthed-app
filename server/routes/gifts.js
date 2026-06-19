import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import controllerGifts from '../controllers/controller-gifts.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// creating a GET route 
router.get('/', controllerGifts.getGifts)

// creating another GET route
router.get('/gift', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '..', 'public', 'gift.html'))
})

export default router