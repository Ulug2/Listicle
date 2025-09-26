import express from 'express'
import musicRouter from './routes/musicEventsRouter.js'

const app = express()


app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.use('/musicEvents', musicRouter);

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle API</h1>')
})


const PORT = process.env.PORT || 3002

app.listen(PORT, (req, res) => {
    console.log("Successfully running on port 3002!")
})