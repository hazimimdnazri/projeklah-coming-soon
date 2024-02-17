import express from 'express'
import { index } from './controllers/LandingController.js'

let app = express.Router()

app.get('/', index);

export default app