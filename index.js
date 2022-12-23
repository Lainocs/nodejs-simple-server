import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
dotenv.config()

let data = ''

app.post('/', (req, res) => {
	data = req.body.data
	res.send(data)
})

app.get('/', (req, res) => {
	res.send(data)
})

app.listen(process.env.PORT, () => {
	console.log('Example app listening on port' + process.env.PORT + '!')
})
