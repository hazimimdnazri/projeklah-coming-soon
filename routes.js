import express from 'express'
import { index, unknownRoute } from './controllers/LandingController.js'

let app = express.Router()

app.get('/', index);
app.get('*', unknownRoute)
app.post('*', unknownRoute)

export default app