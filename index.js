import express from 'express';
import routes from './routes.js';

const app = express()

app.listen(process.env.PORT, () => {
    console.log(`The app is running at port: ${process.env.PORT}`)
})

app.use('/', routes)